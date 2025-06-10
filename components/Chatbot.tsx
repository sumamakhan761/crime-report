'use client'
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface Message {
  content: string;
  role: 'user' | 'assistant';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi there! I can help with disaster and crime-related information. How can I assist you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response
      }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="flex flex-col w-80 sm:w-96 h-96 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Crime Report Assistant</h3>
              <h4 className="text-sm font-medium bg-zinc-800 rounded-md p-1">
                <Link href="/chatbot-test">
                  <button className="text-white hover:text-white/80">
                    Guideline
                  </button>
                </Link>
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-zinc-950">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-2xl max-w-[80%] ${message.role === 'user'
                    ? 'bg-sky-500 text-white'
                    : 'bg-zinc-800 text-zinc-200'
                    }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block px-4 py-2 rounded-2xl bg-zinc-800 text-zinc-200">
                  <span className="flex gap-1">
                    <span className="animate-pulse">•</span>
                    <span className="animate-pulse animation-delay-200">•</span>
                    <span className="animate-pulse animation-delay-400">•</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-2 bg-zinc-900 border-t border-zinc-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-zinc-800 text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || inputValue.trim() === ''}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg hover:shadow-sky-400/20 transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
} 