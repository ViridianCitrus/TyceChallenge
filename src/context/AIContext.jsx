import React, { createContext, useState, useEffect } from "react";
import { useChat } from "./useChat";
import { chatRequest } from "./api";

export const AIContext = createContext({});

export const useAIContext = () => {
  const [isThinking, setIsThinking] = useState(false);
  const [filesText, setFilesText] = useState([]);
  const { chatHistory, isLoading, addUserMessage, addAssistantMessage } =
    useChat();

  const formatRequest = (userText) => {
    if (filesText.length) {
      return `Use the following as context for your conversation: ${filesText.join(
        "\n"
      )} User Input: ${userText}`;
    } else {
      return userText;
    }
  };

  const submit = async (value) => {
    if (value != "") {
      setIsThinking(true);
      const text = chatRequest({
        messages: chatHistory,
        prompt: formatRequest(value),
      })
        .then((res) => {
          addAssistantMessage(res);
          setIsThinking(false);
        })
        .catch((err) => {
          console.error(err);
          setIsThinking(false);
        });
    }
  };
  useEffect(() => {
    console.log(chatHistory);
  }, [chatHistory]);

  return {
    chatHistory,
    isThinking,
    setIsThinking,
    isLoading,
    addUserMessage,
    addAssistantMessage,
    submit,
  };
};
