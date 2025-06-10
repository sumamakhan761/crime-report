"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    // Simulate API call
    try {
      // Replace with actual API call in production
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        type: "error",
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Get in Touch
            </div>

            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Contact Us
              <span className="block text-2xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                We&apos;re Here to Help
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Have questions about our services or need assistance with a report?
              Our team is ready to help. Fill out the form below, and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-sm p-8 border border-zinc-800">
                <h2 className="text-xl font-medium text-white mb-6">Send a Message</h2>

                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-xl ${submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {submitStatus.type === "success" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        )}
                      </svg>
                      <span>{submitStatus.message}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                                text-white transition-colors duration-200
                                focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                                text-white transition-colors duration-200
                                focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-3.5 text-white transition-all
                                focus:outline-none focus:ring-2 focus:ring-sky-500/50 hover:border-sky-500
                                appearance-none shadow-lg backdrop-blur-md"
                        required
                      >
                        <option value="">Select subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Report Assistance">Report Assistance</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                        ▼
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                              text-white transition-colors duration-200
                              focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 
                            px-4 py-3.5 text-sm font-medium text-white shadow-lg
                            transition-all duration-200 hover:from-sky-400 hover:to-blue-500
                            disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-sm p-8 border border-zinc-800">
                <h2 className="text-xl font-medium text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10">
                        <svg
                          className="h-5 w-5 text-sky-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">Email</h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        <a
                          href="mailto:report@gmail.com"
                          className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          report@gmail.com
                        </a>
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        We aim to respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10">
                        <svg
                          className="h-5 w-5 text-sky-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">Phone</h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        <a
                          href="tel:+1800SAFEREPORT"
                          className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          +1 (800) SAFEREPORT
                        </a>
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Mon-Fri from 9am to 5pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10">
                        <svg
                          className="h-5 w-5 text-sky-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">Address</h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        123 Security Plaza, Suite 456
                        <br />
                        Tech City, CA 94103
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <h3 className="text-sm font-medium text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: "Twitter",
                        icon: (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        ),
                      },
                      {
                        name: "LinkedIn",
                        icon: (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        ),
                      },
                      {
                        name: "Facebook",
                        icon: (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                          </svg>
                        ),
                      },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-sky-500/20 hover:text-sky-400 transition-colors duration-200"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6">
              {[
                {
                  question: "Is my information kept confidential?",
                  answer: "Yes, all communication through our contact form is encrypted and confidential. We never share your personal information with third parties without your explicit consent.",
                },
                {
                  question: "How quickly will I receive a response?",
                  answer: "Our team typically responds within 24 hours during business days. For urgent matters, we recommend using our emergency contact number.",
                },
                {
                  question: "Can I follow up on a previously submitted report?",
                  answer: "Yes, you can track the status of your report using the Report ID through our Track Report page. You can also mention your Report ID in the contact form for specific inquiries.",
                },
                {
                  question: "How can I provide feedback about the platform?",
                  answer: "We welcome all feedback! You can use this contact form and select 'Feedback' as the subject, or email us directly at report@gmail.com.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="text-lg font-medium text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 