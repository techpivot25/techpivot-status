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
  Copy,
  Check,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  modelUsed?: string;
}

export const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [role, setRole] = useState<'assistant' | 'architect' | 'consultant' | 'coder'>('assistant');
  const [model, setModel] = useState<'gemini-3.5-flash' | 'gemini-3.1-flash-lite' | 'gemini-3.1-pro-preview'>('gemini-3.5-flash');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "👋 Welcome to TechPivot! I am your AI Assistant powered by Gemini.\n\nI can help you evaluate enterprise architectures, plan digital transformations, benchmark AI maturity, or answer technical questions across our consulting solutions. How can I assist you today?",
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
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen]);

  // Listen to custom event to open chat from any button or component in the app
  useEffect(() => {
    const handleOpenChat = (event?: any) => {
      setIsOpen(true);
      if (event?.detail?.prompt) {
        setInput(event.detail.prompt);
      }
    };

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
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.model || model
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
        text: "Conversation refreshed. I'm ready to assist you as TechPivot's AI Assistant. What challenge or project would you like to explore?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const starterPrompts = [
    { text: "What services does TechPivot provide?", icon: <Sparkles className="w-3 h-3 text-[#00A8E8]" /> },
    { text: "How do we modernize legacy monoliths into AI-native systems?", icon: <Layers className="w-3 h-3 text-emerald-500" /> },
    { text: "Explain the AuthenticAI™ Transformation Loop", icon: <Cpu className="w-3 h-3 text-amber-500" /> },
    { text: "How can we implement deterministic guardrails for LLMs?", icon: <Code2 className="w-3 h-3 text-purple-500" /> }
  ];

  // Simple clean message parser for bold text, lists, and code blocks
  const renderFormattedText = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return parts.map((part, pIdx) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        const code = part.replace(/^```[a-z]*\n?/, '').replace(/```$/, '');
        return (
          <div key={pIdx} className="my-2 rounded-xl bg-slate-900 text-slate-100 p-3 font-mono text-[11px] overflow-x-auto border border-slate-800">
            <pre><code>{code}</code></pre>
          </div>
        );
      }

      // Format lines
      const lines = part.split('\n');
      return (
        <div key={pIdx} className="space-y-1.5">
          {lines.map((line, lIdx) => {
            if (!line.trim()) return <div key={lIdx} className="h-1.5" />;
            
            // Format bold **text**
            const boldFormatted = line.split(/(\*\*.*?\*\*)/g).map((sub, sIdx) => {
              if (sub.startsWith('**') && sub.endsWith('**')) {
                return <strong key={sIdx} className="font-bold text-slate-900 dark:text-white">{sub.slice(2, -2)}</strong>;
              }
              return sub;
            });

            if (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*')) {
              return (
                <div key={lIdx} className="flex items-start gap-2 pl-2">
                  <span className="text-[#008FD5] mt-1 shrink-0">•</span>
                  <div className="flex-1">{boldFormatted}</div>
                </div>
              );
            }

            return <div key={lIdx}>{boldFormatted}</div>;
          })}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-3 px-4 py-3 rounded-full bg-[#0B3558] hover:bg-[#07243d] text-white shadow-2xl border border-sky-400/30 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          aria-label="Open TechPivot AI Assistant"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00A8E8] animate-ping" />
            <div className="w-8 h-8 rounded-full bg-[#008FD5] flex items-center justify-center text-white shadow-2xs">
              <Bot className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="text-left pr-1 hidden sm:block">
            <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>AI Assistant</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-200 border border-sky-400/30">
                Gemini
              </span>
            </div>
            <div className="text-[10px] text-sky-200/80 font-medium">Ask Anything 24/7</div>
          </div>
        </button>
      )}

      {/* Main AI Assistant Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden ${
            isExpanded 
              ? 'inset-4 md:inset-10' 
              : 'bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:w-[460px] h-[660px] max-h-[92vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-[#0B3558] text-white p-4 flex items-center justify-between border-b border-sky-900/50 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#008FD5] flex items-center justify-center text-white shadow-sm ring-2 ring-white/10">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white leading-tight">TechPivot AI Assistant</h3>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded-full bg-[#008FD5] text-white">
                    {model === 'gemini-3.1-pro-preview' ? '3.1 Pro' : model === 'gemini-3.1-flash-lite' ? '3.1 Lite' : '3.5 Flash'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-sky-200 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online · Multi-Turn Enterprise Assistant</span>
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
                title="Clear conversation"
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

          {/* Role & Model Controls Bar */}
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            {/* Roles */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Role:</span>
              <div className="flex items-center rounded-lg bg-white border border-slate-200 p-0.5 shadow-2xs">
                <button
                  onClick={() => setRole('assistant')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                    role === 'assistant' ? 'bg-[#0B3558] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="General AI Assistant"
                >
                  Assistant
                </button>
                <button
                  onClick={() => setRole('architect')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                    role === 'architect' ? 'bg-[#0B3558] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Solutions Architect (Systems & APIs)"
                >
                  Architect
                </button>
                <button
                  onClick={() => setRole('consultant')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                    role === 'consultant' ? 'bg-[#0B3558] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Management Consultant (C-Suite & ROI)"
                >
                  Consultant
                </button>
                <button
                  onClick={() => setRole('coder')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                    role === 'coder' ? 'bg-[#0B3558] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Automation & DevOps Engineer"
                >
                  Code/QA
                </button>
              </div>
            </div>

            {/* Model Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Model:</span>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value as any)}
                className="text-[11px] font-mono bg-white border border-slate-200 rounded-md px-2 py-1 text-slate-800 cursor-pointer focus:outline-none shadow-2xs"
              >
                <option value="gemini-3.5-flash">Gemini 3.5 Flash (General)</option>
                <option value="gemini-3.1-flash-lite">Gemini 3.1 Flash-Lite (Fast)</option>
                <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro (Complex)</option>
              </select>
            </div>
          </div>

          {/* Scrollable Conversation Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/40">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-8 h-8 rounded-full bg-[#0B3558] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-2xs">
                      <Bot className="w-4 h-4 text-[#00A8E8]" />
                    </div>
                  )}

                  <div
                    className={`group relative max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                      isUser
                        ? 'bg-[#0B3558] text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                    }`}
                  >
                    <div>{renderFormattedText(msg.text)}</div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100/30 text-[9px] font-mono text-slate-400">
                      <span className={isUser ? 'text-sky-200' : 'text-slate-400'}>
                        {msg.timestamp} {msg.modelUsed ? `· ${msg.modelUsed}` : ''}
                      </span>

                      {!isUser && (
                        <button
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-slate-700 rounded text-slate-400 flex items-center gap-1 cursor-pointer"
                          title="Copy message"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 shadow-2xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-3 justify-start animate-in fade-in duration-200">
                <div className="w-8 h-8 rounded-full bg-[#0B3558] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-2xs">
                  <Bot className="w-4 h-4 text-[#00A8E8]" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs px-4 py-3 text-xs shadow-2xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#008FD5] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#008FD5] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#008FD5] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] font-mono text-slate-500 ml-1">AI Assistant is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Prompts */}
          {messages.length <= 2 && (
            <div className="px-4 py-2.5 bg-white border-t border-slate-100 overflow-x-auto scrollbar-none">
              <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#008FD5]" />
                <span>Suggested Topics:</span>
              </div>
              <div className="flex items-center gap-2">
                {starterPrompts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(item.text)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-sky-50 hover:text-[#008FD5] hover:border-sky-300 border border-slate-200 text-[11px] text-slate-700 whitespace-nowrap transition-colors cursor-pointer shadow-2xs"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </button>
                ))}
              </div>
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
                placeholder="Ask TechPivot AI Assistant about architectures, transformation, or engineering..."
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
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>AI Assistant Ready</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
