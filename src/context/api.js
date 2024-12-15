import { GoogleGenerativeAI } from "@google/generative-ai";

export const chatRequest = async ({ messages, prompt }) => {
  console.log(messages);
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = model.startChat({
    history: messages,
  });
  let result = await chat.sendMessage(prompt);
  return result.response.text();
};
