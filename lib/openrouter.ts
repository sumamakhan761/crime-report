import OpenAI from "openai";

export const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export function getOpenRouterClient() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;

  // OpenRouter is OpenAI-compatible. These headers are recommended by OpenRouter
  // for attribution and analytics, but are optional.
  const referer =
    process.env.OPENROUTER_SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  const title = process.env.OPENROUTER_APP_NAME || "crime-report";

  return new OpenAI({
    apiKey,
    baseURL: OPENROUTER_BASE_URL,
    defaultHeaders: {
      ...(referer ? { "HTTP-Referer": referer } : {}),
      "X-Title": title,
    },
  });
}

export function getOpenRouterModel(defaultModel: string) {
  return (
    process.env.OPENROUTER_MODEL ||
    process.env.OPENROUTER_IMAGE_MODEL ||
    defaultModel
  );
}

