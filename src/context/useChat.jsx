import { useState } from "react";

export const useChat = () => {
  const [rawChatHistory, setRawChatHistory] = useState([]);
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
