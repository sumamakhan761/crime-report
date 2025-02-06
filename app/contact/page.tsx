import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
          Contact Us
        </h1>
        <p className="text-sm text-neutral-400">Get in touch through any of the platforms below.</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-neutral-900/50 backdrop-blur-sm py-8 px-4 shadow-xl border border-neutral-800 rounded-xl sm:px-10 flex flex-col space-y-6">
          <a
            href="mailto:example@mail.com"
            className="flex items-center justify-center gap-3 px-4 py-2 border border-neutral-800 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 transition-colors"
          >
            <Mail className="h-5 w-5 text-sky-400" /> example@mail.com
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-2 border border-neutral-800 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 transition-colors"
          >
            <Linkedin className="h-5 w-5 text-sky-400" /> LinkedIn
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-2 border border-neutral-800 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 transition-colors"
          >
            <Twitter className="h-5 w-5 text-sky-400" /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
