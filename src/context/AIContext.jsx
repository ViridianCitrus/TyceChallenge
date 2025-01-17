import { createContext, useState, useEffect } from "react";
import { useChat } from "./useChat";
import { chatRequest } from "./api";

export const AIContext = createContext({});

export const useAIContext = () => {
  const [isThinking, setIsThinking] = useState(false);
  const [filesText, setFilesText] = useState([]);
  const [userInput, setUserInput] = useState("");
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
      const messages = [...chatHistory];
      if (messages.length > 1) {
        messages[1] = {
          role: messages[1].role,
          parts: [{ text: formatRequest(messages[1].parts[0].text) }],
        };
      }
      addUserMessage(value);
      setUserInput("");
      const text = chatRequest({
        messages: messages,
        prompt: messages.length > 1 ? value : formatRequest(value),
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

  return {
    chatHistory,
    isThinking,
    setIsThinking,
    isLoading,
    addUserMessage,
    addAssistantMessage,
    submit,
    filesText,
    setFilesText,
    userInput,
    setUserInput,
  };
};
