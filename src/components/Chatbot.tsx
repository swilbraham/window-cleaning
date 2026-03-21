"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "bot" | "user";
  text: string;
}

const quickReplies = [
  "What areas do you cover?",
  "How much does it cost?",
  "How do I pay?",
  "Do you clean frames & sills?",
  "Why aren't my windows streak-free?",
  "Can you reach high windows?",
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.match(/streak|smear|mark|residue|not clean|dirty|first clean/)) {
    return "Great question! If your windows haven't been professionally cleaned in a while, built-up residue in the rubber seals and frames can get drawn out by our pure water system during the first clean. This can leave minor marks as it dries. It typically takes 2–3 regular cleans for the seals to be fully flushed out and for a perfectly streak-free result every time. After that, they'll look amazing!";
  }
  if (lower.match(/area|cover|location|where|liverpool|wirral|chester|warrington/)) {
    return "We cover all of Merseyside and Cheshire — including Liverpool, Wirral, St Helens, Warrington, Chester, Widnes, Runcorn, Formby, Crosby, and many more. Not sure if we cover your area? Just ask or drop us a message through the quote form!";
  }
  if (lower.match(/price|cost|how much|charge|rate|expensive|cheap|quote/)) {
    return "Every property is different, so we provide free, no-obligation quotes tailored to your home or business. Just fill in the quote form on this page or call us on 07724 564683 and we'll get back to you the same day!";
  }
  if (lower.match(/pay|payment|gocardless|direct debit|cash|invoice|bank/)) {
    return "We use GoCardless for easy, hassle-free Direct Debit payments. Once it's set up, your payment is taken automatically after each clean — no cash needed, no invoices to chase. Simple and secure!";
  }
  if (lower.match(/frame|sill|upvc|pvc/)) {
    return "Yes! We clean frames and sills as part of every visit at no extra charge. Our pure water system cleans the entire window unit, not just the glass.";
  }
  if (lower.match(/rain/)) {
    return "Rain is actually just pure water, so it won't leave marks on freshly cleaned windows. The streaks you see after rain on dirty windows are caused by existing dirt being moved around. Once your windows are clean, rain will simply run off!";
  }
  if (lower.match(/high|reach|storey|story|skylight|conservatory|ladder/)) {
    return "Our water-fed pole system can safely reach up to 3 storeys, including skylights and conservatory roofs — all from the ground. No ladders needed for most jobs!";
  }
  if (lower.match(/often|frequency|how often|schedule|regular/)) {
    return "We recommend every 4–8 weeks for most homes. Commercial properties may need more frequent cleans. We'll help you find the perfect schedule when we provide your quote.";
  }
  if (lower.match(/pure water|water.fed|deionised|filtered|system/)) {
    return "We use a multi-stage purification system that removes all minerals from the water. This purified water is fed through a telescopic pole to clean your windows, frames, and sills. Because there are no minerals, it dries completely clear — no soap or squeegee needed!";
  }
  if (lower.match(/home|need to be in|access|away|out/)) {
    return "No, you don't need to be home! As long as we can access your windows, we'll carry out the clean. We'll let you know when we're coming and message you once it's done.";
  }
  if (lower.match(/commercial|business|office|shop|unit/)) {
    return "We work with lots of commercial clients across Merseyside and Cheshire. Whether it's an office, shop, or multi-storey building, we'll tailor a cleaning schedule that works for your business. Get in touch for a free quote!";
  }
  if (lower.match(/hello|hi |hey|hiya|morning|afternoon|evening/)) {
    return "Hi there! 👋 I'm Crystal, your virtual assistant. I can help answer questions about our window cleaning services. What would you like to know?";
  }
  if (lower.match(/thank|cheers|ta /)) {
    return "You're welcome! If you have any other questions, feel free to ask. Or you can get a free quote using the form on this page, or call us on 07724 564683. 😊";
  }

  return "I'm not sure about that one, but our team can definitely help! Give us a call on 07724 564683 or fill in the quote form on this page and we'll get back to you the same day.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm Crystal, your virtual window cleaning assistant. Ask me anything about our services, pricing, or coverage areas!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-colors hover:bg-blue-700 sm:bottom-8 sm:right-6 sm:h-16 sm:w-16"
            aria-label="Open chat"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 flex h-[480px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:bottom-8 sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-blue-600 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Crystal</div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-100">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-slate-100 text-slate-800 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />

              {/* Quick replies — show only when there's just the initial message */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100"
                    >
                      {reply}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 rounded-full border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
