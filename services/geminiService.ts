
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_CONTEXT } from "../constants";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI Chat features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getGeminiResponse = async (userMessage: string) => {
  const ai = getAIClient();
  
  if (!ai) {
    return "The AI assistant is currently offline because no API key was provided. Please check the environment configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing some technical difficulties reaching the brain. Please explore my projects manually!";
  }
};
