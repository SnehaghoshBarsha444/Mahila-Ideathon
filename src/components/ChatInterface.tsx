
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  SendHorizonal, 
  Bot, 
  User, 
  Clipboard,
  Check,
  RefreshCw
} from "lucide-react";
import { getFinancialAdvice, Message } from "@/services/financialAssistantService";
import { useToast } from "@/hooks/use-toast";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      content: "Hello! I'm your AI financial advisor. I can help with business finances, loan options, investment strategies, and fund transfers. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Sample questions the user can ask
  const sampleQuestions = [
    "How can I improve my business credit score?",
    "What funding options are available for my expansion?",
    "How do I manage seasonal cash flow challenges?",
    "Explain the process of transferring funds internationally",
    "What fees should I expect when processing credit card payments?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    // Create a new AbortController for this request
    abortControllerRef.current = new AbortController();
    
    try {
      // Get AI response
      const updatedMessages = [...messages, userMessage];
      const aiResponse = await getFinancialAdvice(updatedMessages, abortControllerRef.current.signal);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const cancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
      toast({
        description: "Request cancelled",
      });
    }
  };

  const copyToClipboard = (messageId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(messageId);
    
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className={`group relative max-w-[80%] rounded-2xl p-4 ${
              message.sender === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary"
            }`}>
              <div className="flex items-start gap-3">
                {message.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-primary" />
                  </div>
                )}
                <div>
                  <div className="prose prose-sm">
                    {message.content}
                  </div>
                  <div className="mt-2 text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-white" />
                  </div>
                )}
              </div>
              
              <button
                onClick={() => copyToClipboard(message.id, message.content)}
                className={`absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full ${
                  message.sender === "user" ? "bg-white/20" : "bg-gray-200"
                }`}
                aria-label="Copy message"
              >
                {copiedId === message.id ? (
                  <Check size={14} />
                ) : (
                  <Clipboard size={14} />
                )}
              </button>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary max-w-[80%] rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-200"></div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={cancelRequest}
                  className="p-0 h-6 w-6 rounded-full"
                >
                  <RefreshCw size={14} className="text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Quick questions */}
      {messages.length <= 2 && (
        <div className="px-4 mb-4 flex flex-wrap gap-2">
          {sampleQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="text-xs py-1.5 px-3 border border-border rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-auto p-4 border-t bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="flex items-end gap-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a financial question..."
            className="min-h-[40px] max-h-[120px] glass-input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={!inputValue.trim() || isLoading}
            className="rounded-full h-10 w-10 flex-shrink-0"
          >
            <SendHorizonal size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
}
