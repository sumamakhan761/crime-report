import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getMockResponse } from './mock-data';

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Flag to use mock data (true in development or when API key is missing)
const useMockData = process.env.NODE_ENV === 'development' || !process.env.GEMINI_API_KEY;

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

    // Convert history to the format expected by Gemini
    const formattedHistory = history
      .filter((msg: any) => msg.role !== 'system')
      .map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      }));

    // Create a chat instance
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
      systemInstruction: SYSTEM_PROMPT,
    });

    // Generate the response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error processing chatbot request:', error);

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