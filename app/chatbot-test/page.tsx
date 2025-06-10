import ChatbotTester from "@/components/ChatbotTester";

export default function ChatbotTestPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
          Chatbot Testing Page
        </h1>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-zinc-400 mb-6">
            This page allows you to test the Gemini AI-powered chatbot. Use the sample queries below or try your own.
            The chatbot is programmed to respond to disaster and crime-related questions while filtering out inappropriate content.
          </p>

          <div className="p-4 bg-zinc-900 rounded-lg border border-sky-500/20 text-sm text-zinc-300">
            <p>Look for the chat button in the bottom-right corner of the page to interact with the chatbot.</p>
          </div>
        </div>

        <ChatbotTester />
      </div>
    </div>
  );
} 