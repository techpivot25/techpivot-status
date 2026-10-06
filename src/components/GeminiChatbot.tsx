import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  RefreshCw, 
  User, 
  Maximize2, 
  Minimize2, 
  Cpu, 
  Briefcase, 
  Code2, 
  Zap, 
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { StatusNeoLogo } from './StatusNeoLogo';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [role, setRole] = useState<'advisor' | 'architect' | 'consultant'>('advisor');
  const [model, setModel] = useState<'gemini-3.5-flash' | 'gemini-3.1-flash-lite'>('gemini-3.5-flash');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I am TechPivot's AI Enterprise Consultant. How can I assist you with your digital transformation, agentic systems, or architecture today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Listen to custom event to open chat from any button in the app
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-gemini-chat', handleOpenChat);
    return () => window.removeEventListener('open-gemini-chat', handleOpenChat);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, text: m.text })),
          role,
          model
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      const data = await response.json();
      const botReply: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.reply || 'I processed your request, but received an empty response.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botReply]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: `Notice: ${err.message || 'Unable to connect to Gemini at this moment. Please verify your connection.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: "Conversation cleared. How can I assist you with TechPivot's technologies and consulting capabilities?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const starterPrompts = [
    "What services does TechPivot provide?",
    "How does TechPivot modernize legacy enterprise monoliths?",
    "Explain the 4-phase transformation loop",
    "What are best practices for multi-agent governance?"
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-3 px-4 py-3 rounded-full bg-[#0B3558] hover:bg-[#082842] text-white shadow-2xl border border-sky-400/30 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          aria-label="Open Gemini Chat"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00A8E8] animate-ping" />
            <div className="w-8 h-8 rounded-full bg-[#008FD5] flex items-center justify-center text-white">
              <Bot className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="text-left pr-1 hidden sm:block">
            <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>Ask TechPivot AI</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-200 border border-sky-400/30">
                Gemini
              </span>
            </div>
            <div className="text-[10px] text-sky-200/80 font-medium">Enterprise Advisor</div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden ${
            isExpanded 
              ? 'inset-4 md:inset-10' 
              : 'bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:w-[440px] h-[640px] max-h-[90vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-[#0B3558] text-white p-4 flex items-center justify-between border-b border-sky-900/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#008FD5] flex items-center justify-center text-white shadow-xs">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white leading-tight">TechPivot AI Consultant</h3>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded-full bg-[#008FD5] text-white">
                    {model === 'gemini-3.5-flash' ? '3.5 Flash' : '3.1 Lite'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-sky-200 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Online · Multi-turn Enterprise Assistant</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
                title={isExpanded ? 'Minimize size' : 'Expand window'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleClearHistory}
                className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-white/10 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Role & Model Toolbar */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold">Role:</span>
              <div className="flex items-center rounded-lg bg-white border border-slate-200 p-0.5">
                <button
                  onClick={() => setRole('advisor')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                    role === 'advisor' ? 'bg-[#0B3558] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Advisor
                </button>
                <button
                  onClick={() => setRole('architect')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                    role === 'architect' ? 'bg-[#0B3558] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Architect
                </button>
                <button
                  onClick={() => setRole('consultant')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                    role === 'consultant' ? 'bg-[#0B3558] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Consultant
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold">Model:</span>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value as any)}
                className="text-[11px] font-mono bg-white border border-slate-200 rounded-md px-2 py-0.5 text-slate-700 cursor-pointer focus:outline-none"
              >
                <option value="gemini-3.5-flash">Gemini 3.5 Flash (General)</option>
                <option value="gemini-3.1-flash-lite">Gemini 3.1 Flash-Lite (Fast)</option>
              </select>
            </div>
          </div>

          {/* Scrollable Conversation Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-8 h-8 rounded-full bg-[#0B3558] flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-[#00A8E8]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                      isUser
                        ? 'bg-[#0B3558] text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">{msg.text}</div>
                    <div
                      className={`text-[9px] mt-1.5 font-mono ${
                        isUser ? 'text-sky-200 text-right' : 'text-slate-400 text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#0B3558] flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-[#00A8E8]" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs px-4 py-3 text-xs shadow-2xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#008FD5] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#008FD5] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#008FD5] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] font-mono text-slate-400 ml-1">Analyzing architecture...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Chips */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold shrink-0">
                Suggested:
              </span>
              {starterPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-[#008FD5] hover:border-sky-200 border border-slate-200 text-[11px] text-slate-600 whitespace-nowrap transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-end gap-2 bg-slate-50 border border-slate-300 rounded-2xl p-2 focus-within:border-[#008FD5] focus-within:ring-2 focus-within:ring-sky-100 transition-all">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about AI strategy, microservices, cloud, or consulting..."
                rows={1}
                className="flex-1 bg-transparent resize-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none max-h-28 py-1 px-1"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className={`p-2 rounded-xl transition-all ${
                  input.trim() && !isLoading
                    ? 'bg-[#0B3558] text-white hover:bg-[#082842] shadow-xs cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
                title="Send message (Enter)"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-400 font-mono">
              <span>Press Enter to send · Shift+Enter for new line</span>
              <span>Powered by Gemini API</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
