import { NextResponse } from "next/server";
import { getOpenRouterClient } from "@/lib/openrouter";

export const runtime = "nodejs";

const ALLOWED_TYPES = new Set([
  "Theft",
  "Fire Outbreak",
  "Medical Emergency",
  "Natural Disaster",
  "Violence",
  "Other",
]);

function parseRetryDelaySeconds(retryDelay: unknown): number | null {
  if (typeof retryDelay !== "string") return null;
  const match = retryDelay.match(/(\d+(?:\.\d+)?)s/i);
  if (!match) return null;
  const seconds = Number(match[1]);
  return Number.isFinite(seconds) ? Math.max(0, Math.ceil(seconds)) : null;
}

function getErrorStatus(err: unknown): number | null {
  const anyErr = err as any;
  const status = anyErr?.status ?? anyErr?.statusCode;
  if (typeof status === "number") return status;
  if (typeof status === "string" && status.trim()) {
    const n = Number(status);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const client = getOpenRouterClient();
    if (!client) {
      return NextResponse.json(
        { error: "OPENROUTER_API_KEY is not configured on the server" },
        { status: 503 }
      );
    }

    const body = await request.json().catch(() => null);
    const image = (body as any)?.image;

    if (typeof image !== "string" || image.length === 0) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    // Expect a data URL: data:<mime>;base64,<data>
    const commaIdx = image.indexOf(",");
    const header = commaIdx >= 0 ? image.slice(0, commaIdx) : "";
    const base64Data = commaIdx >= 0 ? image.slice(commaIdx + 1) : "";
    const mimeType =
      header.match(/^data:(.*?);base64$/i)?.[1] ?? "image/jpeg";

    if (!base64Data) {
      return NextResponse.json(
        { error: "Invalid image data" },
        { status: 400 }
      );
    }

    // Default to a FREE vision model on OpenRouter (no purchased credits required).
    // You can override via OPENROUTER_IMAGE_MODEL in .env.
    //
    // NOTE: Some free model IDs may exist but have no active endpoints; if you
    // see a 404 "No endpoints found", switch to another free vision model.
    const model =
      process.env.OPENROUTER_IMAGE_MODEL || "google/gemma-3-12b-it:free";

    const prompt = `Analyze this emergency situation image and respond in this exact format without any asterisks or bullet points:
TITLE: Write a clear, brief title
TYPE: Choose one (Theft, Fire Outbreak, Medical Emergency, Natural Disaster, Violence, or Other)
DESCRIPTION: Write a clear, concise description`;

    const completion = await client.chat.completions.create({
      model,
      temperature: 0.2,
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: image } },
          ],
        },
      ],
    });

    const content = completion.choices?.[0]?.message?.content ?? "";
    const text = Array.isArray(content)
      ? content.map((p: any) => p?.text ?? "").join("")
      : String(content);

    const titleMatch = text.match(/TITLE:\s*(.*)/i);
    const typeMatch = text.match(/TYPE:\s*(.*)/i);
    const descMatch = text.match(/DESCRIPTION:\s*([\s\S]*)/i);

    const title = titleMatch?.[1]?.trim() || "";
    const reportTypeRaw = typeMatch?.[1]?.trim() || "";
    const reportType = ALLOWED_TYPES.has(reportTypeRaw)
      ? reportTypeRaw
      : reportTypeRaw
        ? "Other"
        : "";
    const description = descMatch?.[1]?.trim() || "";

    return NextResponse.json({ title, reportType, description });
  } catch (error) {
    // Keep the log line, but map known API errors to meaningful status codes.
    console.error("Image analysis error:", error);

    const status = getErrorStatus(error);

    // OpenRouter / upstream rate-limit errors
    if (status === 429) {
      const retryAfterHeader = (error as any)?.headers?.get?.("retry-after");
      const retryAfterSeconds =
        parseRetryDelaySeconds(retryAfterHeader) ??
        (retryAfterHeader ? Number(retryAfterHeader) : null) ??
        30;

      return NextResponse.json(
        {
          error:
            "Rate limit / quota exceeded. Check OpenRouter limits and retry.",
          retryAfterSeconds,
        },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfterSeconds) },
        }
      );
    }

    if (status === 401 || status === 403) {
      return NextResponse.json(
        {
          error:
            "OpenRouter authorization failed. Verify OPENROUTER_API_KEY.",
        },
        { status: 401 }
      );
    }

    if (status === 402) {
      return NextResponse.json(
        {
          error:
            "OpenRouter insufficient credits. Add credits at https://openrouter.ai/settings/credits",
        },
        { status: 402 }
      );
    }

    if (status === 404) {
      return NextResponse.json(
        {
          error:
            "OpenRouter model not available (no endpoints found). Try a different OPENROUTER_IMAGE_MODEL.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ error: "Failed to analyze image" }, { status: 500 });
  }
}
