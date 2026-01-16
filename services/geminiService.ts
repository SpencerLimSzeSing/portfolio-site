
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_CONTEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (userMessage: string) => {
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
    return "I'm experiencing some technical difficulties. Please feel free to explore my projects manually!";
  }
};
