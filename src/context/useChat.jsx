import { useState } from "react";
import { SYSTEM_PROMPT } from "../const";

export const useChat = () => {
  const [rawChatHistory, setRawChatHistory] = useState([
    { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addUserMessage = (userMessage) => {
    setRawChatHistory((prevChatHistory) => {
      return [
        ...prevChatHistory,
        { role: "user", parts: [{ text: userMessage }] },
      ];
    });
  };

  const addAssistantMessage = (assistantMessage) => {
    setRawChatHistory((prevChatHistory) => {
      return [
        ...prevChatHistory,
        { role: "model", parts: [{ text: assistantMessage }] },
      ];
    });
  };

  return {
    chatHistory: rawChatHistory,
    isLoading,
    setIsLoading,
    addUserMessage,
    addAssistantMessage,
  };
};
