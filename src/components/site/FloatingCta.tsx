import { useEffect, useState, useRef, type FormEvent } from "react";
import {
  MessageSquare,
  X,
  Send,
  Phone,
  CheckCircle2,
  Sparkles,
  User,
  Clock,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { BUSINESS } from "@/lib/site";

type ChatMsg = {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
};

const QUICK_PROMPTS = [
  "🧱 Free Masonry & Concrete Estimate",
  "🏡 Kitchen or Bathroom Remodel",
  "📞 Request Call Back from Luan Meziu",
  "📍 Check Zip Code Service Coverage",
];

export function FloatingCta() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Hello! Welcome to MEZIU CONSTRUCTION LLC. Master contractor Luan Meziu and our estimation crew are online.",
      time: "Just now",
    },
    {
      id: "welcome-2",
      sender: "bot",
      text: "How can we assist you with your masonry, concrete, kitchen, bathroom, or remodeling project today?",
      time: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  function handleSend(textToSend?: string) {
    const text = (textToSend || inputMsg).trim();
    if (!text) return;

    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: ChatMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMsg("");
    setIsTyping(true);

    // Dynamic Bot Reply
    setTimeout(() => {
      let botResponse = `Thank you for reaching out! Master contractor Luan Meziu will review your message shortly. For immediate assistance, call us at ${BUSINESS.phone}.`;

      const lower = text.toLowerCase();
      if (lower.includes("masonry") || lower.includes("concrete") || lower.includes("paver")) {
        botResponse = "We specialize in custom brickwork, concrete driveways, stone retaining walls, and pavers! Would you like us to schedule a free on-site estimate?";
      } else if (lower.includes("kitchen") || lower.includes("bath") || lower.includes("remodel")) {
        botResponse = "Our team transforms kitchens and bathrooms with master craftsmanship. Share your zip code or timeline, and we can discuss your vision!";
      } else if (lower.includes("call") || lower.includes("phone") || lower.includes("luan")) {
        botResponse = `You can reach Luan Meziu directly at ${BUSINESS.phone}, or leave your phone number here and we'll call you back right away.`;
      } else if (lower.includes("zip") || lower.includes("area") || lower.includes("location")) {
        botResponse = "We proudly serve Garfield, Clifton, Passaic, Paterson, Hackensack, Elmwood Park, Lodi, Saddle Brook, Paramus, Wayne & surrounding towns within 40 miles!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleSend();
  }

  return (
    <>
      {/* Mobile Bottom Fixed Bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 backdrop-blur-md transition-transform duration-300 flex items-center gap-2 lg:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={BUSINESS.phoneHref}
          className="flex-1 flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-amber-500 to-primary font-bold text-xs uppercase tracking-wider text-primary-foreground shadow-md"
        >
          <Phone className="h-4 w-4" />
          <span>Call ({BUSINESS.phone})</span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 font-bold text-xs uppercase tracking-wider text-white border border-white/20 shadow-md cursor-pointer"
        >
          <img src={logo} alt="MEZIU" className="w-5 h-5 object-contain" />
          <span>Live Chat</span>
        </button>
      </div>

      {/* Floating Chat Modal (Desktop & Mobile Popover) */}
      {isOpen && (
        <div className="fixed inset-x-2 bottom-[70px] sm:inset-x-auto sm:bottom-24 sm:right-6 z-50 w-auto sm:w-[380px] max-h-[80vh] sm:max-h-none rounded-3xl bg-card border border-border/80 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 lg:inset-x-auto lg:bottom-24 lg:right-6 lg:w-[380px]">
          {/* Header */}
          <div className="bg-slate-950 p-4 text-white flex items-center justify-between border-b border-white/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 p-1 flex items-center justify-center shadow-inner">
                  <img src={logo} alt="MEZIU Logo" className="w-full h-full object-contain" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm text-white leading-tight">
                    MEZIU Live Support
                  </h3>
                  <span className="inline-flex items-center text-[9px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded-full border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">
                  Master Contractor Luan Meziu &amp; Team
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer relative z-10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 space-y-3.5 max-h-[340px] min-h-[260px] overflow-y-auto bg-muted/30 text-xs font-medium">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <img src={logo} alt="MEZIU" className="w-4 h-4 object-contain" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-card border border-border/80 text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="leading-relaxed font-semibold">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right font-medium ${
                      msg.sender === "user" ? "text-primary-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <img src={logo} alt="MEZIU" className="w-4 h-4 object-contain" />
                </div>
                <div className="bg-card border border-border/80 rounded-2xl px-3 py-2 text-muted-foreground text-xs flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  <span className="font-semibold text-[11px]">Luan Meziu is typing...</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-background border-t border-border/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap rounded-full bg-muted border border-border/80 px-3 py-1 text-[10px] font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-all shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSubmit} className="p-3 bg-card border-t border-border/80 flex items-center gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Ask about your project..."
              className="flex-1 rounded-xl border border-border/80 bg-background px-3.5 py-2.5 text-xs font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
            />

            <a
              href={BUSINESS.phoneHref}
              title="Call Us Directly"
              className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 hover:bg-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="submit"
              disabled={!inputMsg.trim()}
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-primary to-amber-500 text-primary-foreground flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button (Desktop Right Bottom) */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-3 transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-3 rounded-full bg-slate-950 border border-white/20 p-2 pr-5 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {/* Logo Badge Container */}
          <div className="relative w-10 h-10 rounded-full bg-white/10 border border-white/20 p-1 flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
            <img src={logo} alt="MEZIU Construction Logo" className="w-full h-full object-contain" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-white">Live Chat Support</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
              Online • Free Consultation
            </span>
          </div>
        </button>
      </div>
    </>
  );
}