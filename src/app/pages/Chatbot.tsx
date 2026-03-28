import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your UPSC Mentor AI. I'm here to help you with any questions about UPSC preparation, syllabus, study strategies, or specific topics. How can I assist you today?",
    sender: 'bot',
    timestamp: new Date()
  }
];

const sampleResponses = [
  "That's a great question! The Indian Constitution was adopted on November 26, 1949, and came into effect on January 26, 1950. It's the longest written constitution in the world with 395 articles in 22 parts and 8 schedules.",
  "For UPSC Prelims preparation, I recommend starting with NCERT books from classes 6-12, then moving to standard reference books. Focus on current affairs from the last 12 months and practice previous year questions regularly.",
  "The fundamental rights in the Indian Constitution are derived from Part III (Articles 12-35). They include Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies.",
  "For effective answer writing in UPSC Mains, follow the structure: Introduction (define/contextual background), Body (multiple dimensions with facts, examples, and analysis), and Conclusion (way forward/solution). Practice writing 10 answers per day.",
  "Current affairs are crucial for both Prelims and Mains. Focus on government schemes, international relations, economy, environment, and science & technology. Read a good newspaper daily and make notes of important issues."
];

const suggestedQuestions = [
  "What is the UPSC syllabus for Prelims?",
  "How to prepare for Indian Polity?",
  "Best strategy for current affairs?",
  "Difference between Prelims and Mains?"
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-12rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          AI Chatbot
        </h2>
        <p className="text-muted-foreground">
          Ask anything about UPSC preparation and get instant answers
        </p>
      </motion.div>

      <div className="bg-card border border-border rounded-2xl h-full flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex gap-4 ${
                  message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'bot'
                      ? 'bg-primary text-white'
                      : 'bg-accent text-foreground'
                  }`}
                >
                  {message.sender === 'bot' ? (
                    <Bot className="w-5 h-5" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div
                  className={`flex-1 max-w-[80%] ${
                    message.sender === 'user' ? 'flex justify-end' : ''
                  }`}
                >
                  <div
                    className={`rounded-2xl p-4 ${
                      message.sender === 'bot'
                        ? 'bg-accent text-foreground'
                        : 'bg-primary text-white'
                    }`}
                  >
                    <p className="leading-relaxed">{message.text}</p>
                    <span
                      className={`text-xs mt-2 block ${
                        message.sender === 'bot'
                          ? 'text-muted-foreground'
                          : 'text-white/70'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-accent rounded-2xl p-4">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-muted-foreground rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-muted-foreground rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-muted-foreground rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-6 pb-4">
            <p className="text-sm text-muted-foreground mb-3">Suggested questions:</p>
            <div className="grid grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleSendMessage(question)}
                  className="text-left p-3 rounded-xl border border-border hover:bg-accent hover:border-primary/30 transition-all text-sm text-foreground"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-border p-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything about UPSC..."
                className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-border focus:border-primary focus:outline-none resize-none bg-background text-foreground"
                rows={1}
                style={{
                  minHeight: '48px',
                  maxHeight: '120px'
                }}
              />
              <div className="absolute right-3 top-3 text-muted-foreground">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <Button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isTyping}
              size="lg"
              className="rounded-xl px-6"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
