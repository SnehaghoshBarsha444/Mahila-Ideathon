
import Groq from 'groq-sdk';

// Initialize the Groq client with API key
const groq = new Groq({
  apiKey: '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',
  dangerouslyAllowBrowser: true, // Enable browser usage
});

// System prompt to define the AI's role and capabilities
const SYSTEM_PROMPT = `You are an expert AI Financial Assistant for a platform focused on helping women entrepreneurs. 
Your role includes:
1. Providing personalized financial planning advice
2. Offering guidance on loan management strategies
3. Analyzing business finances and suggesting improvements
4. Explaining transfer of funds, payment processing, and financial transactions
5. Recommending investment opportunities specific to small businesses
6. Providing financial literacy education in simple, clear language

Be professional but warm in your responses. When discussing transfers or financial transactions, explain the process, fees, timing, and security considerations. Always prioritize practical, actionable advice.`;

export interface Message {
  id: string;
  content: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export const getFinancialAdvice = async (
  messages: Message[],
  signal?: AbortSignal
): Promise<string> => {
  try {
    // Format messages for the Groq API with proper typing
    const formattedMessages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...messages
        .filter(msg => msg.id !== "initial") // Skip the initial greeting
        .map(msg => ({
          role: msg.sender === "user" ? "user" as const : "assistant" as const,
          content: msg.content,
        })),
    ];

    // Make the API call
    const chatCompletion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7, // Slightly lower temperature for more focused responses
      max_tokens: 1024,
      top_p: 1,
      stream: false, // We're not streaming in this implementation for simplicity
    }, { signal });

    return chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error getting financial advice:", error);
    if (signal?.aborted) {
      return "Request was cancelled.";
    }
    return "I'm sorry, there was an error processing your request. Please try again later.";
  }
};
