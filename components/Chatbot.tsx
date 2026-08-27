"use client";

import { siteData } from "@/data";
import {
  ActionLink,
  generateWhatsAppUrl,
  KnowledgeMatchResult,
  queryWebsiteKnowledge,
} from "@/lib/chatbotKnowledge";
import {
  Bot,
  ChevronRight,
  ExternalLink,
  RotateCcw,
  Send,
  UserCheck,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  foundData?: boolean;
  suggestWhatsApp?: boolean;
  actionLinks?: ActionLink[];
  managerAssigned?: {
    name: string;
    role: string;
    image: string;
    whatsapp: string;
  };
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: `Hi there! 👋 Welcome to **${siteData.name}**.\n\nI am your AI Assistant, trained on our website data. Ask me anything about our Shopify services, case studies, team, or process!`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      foundData: true,
      actionLinks: [
        { label: "View Services", url: "/services" },
        {
          label: "Book Strategy Call",
          url:
            siteData.menus.find((m) => m.label === "Contact")?.link ||
            "/contact",
        },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const windowContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [messages, isOpen]);

  // Listen for external trigger events to toggle Chatbot (e.g. from MobileMenu center button)
  useEffect(() => {
    const handleToggleChatbot = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("toggle-chatbot", handleToggleChatbot);
    return () => {
      window.removeEventListener("toggle-chatbot", handleToggleChatbot);
    };
  }, []);

  // Broadcast chatbot state so Header can track open/close
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("chatbot-state", { detail: { isOpen } }),
    );
  }, [isOpen]);

  // Attach native capture-phase DOM listeners to prevent GSAP from hijacking Chatbot scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleCaptureWheel = (e: WheelEvent) => {
      const messagesEl = messagesContainerRef.current;
      const windowEl = windowContainerRef.current;

      const target = e.target as Node | null;
      if (!target) return;

      // Handle vertical scrolling for Messages thread
      if (messagesEl && messagesEl.contains(target)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        return;
      }

      // Handle scrolling within Chatbot window
      if (windowEl && windowEl.contains(target)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        return;
      }
    };

    const handleCaptureTouch = (e: TouchEvent) => {
      const windowEl = windowContainerRef.current;
      const target = e.target as Node | null;

      if (target && windowEl && windowEl.contains(target)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    };

    window.addEventListener("wheel", handleCaptureWheel, {
      capture: true,
      passive: false,
    });
    window.addEventListener("touchstart", handleCaptureTouch, {
      capture: true,
      passive: false,
    });
    window.addEventListener("touchmove", handleCaptureTouch, {
      capture: true,
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleCaptureWheel, {
        capture: true,
      });
      window.removeEventListener("touchstart", handleCaptureTouch, {
        capture: true,
      });
      window.removeEventListener("touchmove", handleCaptureTouch, {
        capture: true,
      });
    };
  }, [isOpen]);

  const handleSend = (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const result: KnowledgeMatchResult = queryWebsiteKnowledge(queryText);

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: result.response,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        foundData: result.found,
        suggestWhatsApp: result.suggestWhatsApp,
        actionLinks: result.actionLinks,
        managerAssigned: result.suggestWhatsApp
          ? {
              name: siteData.ceo.name,
              role: "CEO & Head of Support",
              image: siteData.ceo.image,
              whatsapp: siteData.whatsapp,
            }
          : undefined,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: `Chat reset! How can I assist you with **${siteData.name}** today?`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        foundData: true,
      },
    ]);
  };

  // Helper to format text with simple markdown (bold, quotes, linebreaks, bullet points)
  const renderFormattedText = (text: string, isUser: boolean = false) => {
    const lines = text.split("\n");
    const textColorClass = isUser ? "text-black" : "text-white";
    const bulletColorClass = isUser
      ? "text-black font-bold shrink-0"
      : "text-[#C9FF00] font-bold shrink-0";
    const numColorClass = isUser
      ? "text-black font-semibold shrink-0"
      : "text-[#C9FF00] font-semibold shrink-0";
    const boldColorClass = isUser
      ? "font-bold text-black"
      : "font-bold text-white";

    return lines.map((line, idx) => {
      if (!line.trim()) return <div key={idx} className="h-2" />;

      // Blockquotes
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={idx}
            className={`my-1.5 border-l-2 ${isUser ? "border-black bg-black/10 text-black" : "border-[#C9FF00] bg-neutral-900/60 text-white"} pl-3 italic py-1 rounded-r-md text-xs sm:text-sm`}
          >
            {parseBoldText(line.replace("> ", ""), boldColorClass)}
          </blockquote>
        );
      }

      // Headings
      if (line.startsWith("### ")) {
        return (
          <h4
            key={idx}
            className={`font-bold ${textColorClass} text-sm sm:text-base mt-2 mb-1`}
          >
            {parseBoldText(line.replace("### ", ""), boldColorClass)}
          </h4>
        );
      }

      // Bullet points
      if (line.startsWith("• ") || line.startsWith("- ")) {
        return (
          <div
            key={idx}
            className={`flex items-start gap-1.5 my-1 text-xs sm:text-sm ${textColorClass}`}
          >
            <span className={bulletColorClass}>•</span>
            <div>
              {parseBoldText(line.replace(/^[•-]\s*/, ""), boldColorClass)}
            </div>
          </div>
        );
      }

      // Numbered items
      if (/^\d+\.\s/.test(line)) {
        const num = line.match(/^(\d+)\.\s/)?.[1];
        const content = line.replace(/^\d+\.\s/, "");
        return (
          <div
            key={idx}
            className={`flex items-start gap-1.5 my-1 text-xs sm:text-sm ${textColorClass}`}
          >
            <span className={numColorClass}>{num}.</span>
            <div>{parseBoldText(content, boldColorClass)}</div>
          </div>
        );
      }

      return (
        <p
          key={idx}
          className={`my-1 text-xs sm:text-sm leading-relaxed ${textColorClass}`}
        >
          {parseBoldText(line, boldColorClass)}
        </p>
      );
    });
  };

  // Inline bold string parser
  const parseBoldText = (
    str: string,
    boldClass: string = "font-bold text-white",
  ) => {
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className={boldClass}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* FLOATING TOGGLE BUTTON — hidden on mobile when chatbox is open full screen */}
      <div
        className={`fixed bottom-5 right-5 sm:bottom-10 sm:right-7 z-9999 ${isOpen ? "hidden sm:block" : "block"}`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Chatbot"
          className="relative cursor-pointer flex items-center justify-center size-14 sm:size-16 rounded-full text-white shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 group"
        >
          {/* No ambient animation - clean look */}

          <div className="relative z-10 flex items-center justify-center size-full">
            {isOpen ? (
              <img
                src="/images/chat-icon-x.png"
                alt="Close Chat"
                className="size-full object-contain transform transition-all duration-300 rotate-0 group-hover:rotate-90 group-hover:scale-105"
              />
            ) : (
              <div className="relative size-full flex items-center justify-center">
                <img
                  src="/images/chat-icon.png"
                  alt="Open Chat"
                  className="size-full object-contain transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>
            )}
          </div>
        </button>
      </div>

      {/* BACKDROP — blurs outside on mobile only when chatbot is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm xl:hidden"
          aria-hidden="true"
        />
      )}

      {/* CHAT CONTAINER WINDOW */}
      {isOpen && (
        <div
          ref={windowContainerRef}
          onWheel={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="fixed inset-0 sm:inset-auto sm:bottom-30 sm:right-7 z-9999 w-full sm:w-105 h-full sm:max-h-[82vh] sm:h-150 flex flex-col sm:rounded-3xl bg-neutral-950/95 backdrop-blur-xl border-0 sm:border sm:border-white/15 shadow-2xl overflow-hidden animate-chatbot-open"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-5 py-4 bg-linear-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative ">
                <img src="/images/chat-icon.png" className="size-10" alt="" />
              </div>
              <div>
                <div className="flex items-start gap-1.5">
                  <h3 className="font-semibold text-white text-sm sm:text-base leading-snug">
                    {siteData.name} AI Assistant
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-neutral-400">
              <button
                onClick={resetChat}
                title="Reset Chat"
                className="p-1.5 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Window"
                className="p-1.5 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MESSAGES THREAD */}
          <div
            ref={messagesContainerRef}
            data-scrollable="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain touch-pan-y p-4 sm:p-5 space-y-4 scrollbar-thin scrollbar-thumb-neutral-800"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`flex items-start gap-2.5 max-w-[88%] ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Sender Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                      msg.sender === "user"
                        ? "bg-[#C9FF00] text-black"
                        : "bg-neutral-800 text-emerald-400 border border-white/10"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <UserRound className="w-4 h-4" />
                    ) : (
                      <img src="/images/chat-icon.png" alt="" />
                    )}
                  </div>
                  <div>
                    {/* Message Content Bubble */}
                    <div
                      className={`p-2 px-3.5 rounded-2xl text-sm shadow-md ${
                        msg.sender === "user"
                          ? "bg-[#C9FF00] text-black rounded-tr-none"
                          : "bg-neutral-900/90 text-white border border-white/10 rounded-tl-none"
                      }`}
                    >
                      {renderFormattedText(msg.text, msg.sender === "user")}

                      {/* ACTION LINKS */}
                      {msg.actionLinks && msg.actionLinks.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-2">
                          {msg.actionLinks.map((link, idx) => {
                            const isExternal = link.url.startsWith("http");
                            return isExternal ? (
                              <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#C9FF00] text-black text-xs font-semibold transition-colors"
                              >
                                <span>{link.label}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <Link
                                key={idx}
                                href={link.url}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-medium transition-colors"
                              >
                                <span>{link.label}</span>
                                <ChevronRight className="w-3 h-3 text-neutral-400" />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] text-neutral-500 mt-3 px-1 block">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>

                {/* SUPPORT MANAGER ASSIGNMENT CARD */}
                {msg.suggestWhatsApp && msg.managerAssigned && (
                  <div className="mt-3 ml-9 max-w-[88%] w-full rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 shadow-xl text-left animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                      <span className="text-[11px] font-semibold tracking-wide uppercase text-[#C9FF00] flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5" /> Support Manager
                        Assigned
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-black font-semibold bg-[#25D366] px-2 py-0.5 rounded-full">
                        Available Now
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={msg.managerAssigned.image}
                          alt={msg.managerAssigned.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          {msg.managerAssigned.name}
                        </h4>
                        <p className="text-xs font-semibold text-neutral-400 my-1.5">
                          {msg.managerAssigned.role}
                        </p>
                        <p className="text-[12px] text-[#C9FF00] font-semibold">
                          Direct WhatsApp Response
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 mb-3 bg-neutral-950/60 p-2.5 rounded-xl border border-white/5">
                      Since this request isn&apos;t fully covered by site data,
                      **{msg.managerAssigned.name}** is ready to chat with you
                      directly on WhatsApp.
                    </p>

                    <a
                      href={generateWhatsAppUrl(msg.text)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-black font-bold text-xs shadow-lg transition-all transform active:scale-95"
                    >
                      <img src="/images/whatapp-icon.png" alt="" />
                      <span>
                        Chat with {msg.managerAssigned.name} on WhatsApp
                      </span>
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex items-center gap-2.5 text-neutral-400 text-xs">
                <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>
                <div className="px-4 py-2.5 rounded-2xl bg-neutral-900 border border-white/10 flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                  <span className="ml-1 text-[11px] text-neutral-400">
                    Searching website data...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT BAR */}
          <div className="p-3.5 bg-neutral-900/90 border-t border-white/10 shrink-0">
            <div className="flex items-center gap-2 bg-neutral-950 border border-white/15 rounded-full pl-3.5 pr-2 py-2 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask AI or request Support Manager..."
                className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                aria-label="Send Message"
                className="size-8 rounded-full cursor-pointer bg-[#C9FF00] disabled:opacity-40 disabled:hover:bg-emerald-500 text-black flex items-center justify-center transition-all shrink-0"
              >
                <Send className="size-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-neutral-500 mt-2 font-semibold">
              Powered by Vorklye AI Knowledge Base & WhatsApp Support Escalation
            </p>
          </div>
        </div>
      )}
    </>
  );
}
