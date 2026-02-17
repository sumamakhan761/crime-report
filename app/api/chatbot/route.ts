import { NextResponse } from 'next/server';
import { getMockResponse } from './mock-data';
import { getOpenRouterClient } from '@/lib/openrouter';

// Flag to use mock data (true in development or when API key is missing)
const useMockData =
  process.env.NODE_ENV === 'development' || !process.env.OPENROUTER_API_KEY;

// Define the system prompt to guide the model's behavior
const SYSTEM_PROMPT = `You are a helpful assistant for a crime and disaster reporting website. 
Your primary role is to answer questions related to:
- Natural disasters (floods, earthquakes, fires, etc.)
- Crime reporting procedures
- Safety information during emergencies
- General information about the crime reporting platform

If a user asks a question that is NOT related to disasters, crimes, or safety information, 
respond with something like: "I'm sorry, but I can only provide information related to disasters, 
crimes, and safety. Please ask a relevant question about these topics."

If a user asks inappropriate questions about sexual content, political figures, or other sensitive topics,
respond with: "I cannot provide information on that topic. I'm here to help with disaster and crime-related questions only."

Keep your responses concise, accurate, and helpful. Format with markdown when appropriate for readability.`;

export async function POST(request: Request) {
  let userMessage = '';

  try {
    const body = await request.json();
    const { message, history } = body;
    userMessage = message;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Use mock data in development or when API key is missing
    if (useMockData) {
      console.log('Using mock data for chatbot response');
      const mockResponse = getMockResponse(message);
      return NextResponse.json({ response: mockResponse });
    }

    const client = getOpenRouterClient();
    if (!client) {
      return NextResponse.json(
        { error: 'OPENROUTER_API_KEY is not configured on the server' },
        { status: 503 }
      );
    }

    // Default to a FREE text model on OpenRouter (no purchased credits required).
    // You can override via OPENROUTER_CHAT_MODEL in .env.
    const model =
      process.env.OPENROUTER_CHAT_MODEL ||
      'deepseek/deepseek-r1-distill-llama-70b:free';

    // Convert history to OpenAI/OpenRouter chat format
    const formattedHistory = Array.isArray(history)
      ? history
          .filter((msg: any) => msg?.role && msg?.content && msg.role !== 'system')
          .map((msg: any) => ({
            role: msg.role === 'assistant' ? ('assistant' as const) : ('user' as const),
            content: String(msg.content),
          }))
      : [];

    const completion = await client.chat.completions.create({
      model,
      temperature: 0.7,
      max_tokens: 800,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...formattedHistory,
        { role: 'user', content: String(message) },
      ],
    });

    const text = completion.choices?.[0]?.message?.content ?? '';

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error processing chatbot request:', error);

    const status = (error as any)?.status ?? (error as any)?.statusCode;
    if (status === 401 || status === 403) {
      return NextResponse.json(
        { error: 'OpenRouter authorization failed. Verify OPENROUTER_API_KEY.' },
        { status: 401 }
      );
    }
    if (status === 402) {
      return NextResponse.json(
        {
          error:
            'OpenRouter insufficient credits. Add credits at https://openrouter.ai/settings/credits',
        },
        { status: 402 }
      );
    }

    // Fallback to mock data if API request fails
    if (!useMockData) {
      try {
        console.log('Falling back to mock data after API error');
        const mockResponse = getMockResponse(userMessage);
        return NextResponse.json({ response: mockResponse });
      } catch (mockError) {
        console.error('Error with mock fallback:', mockError);
      }
    }

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 