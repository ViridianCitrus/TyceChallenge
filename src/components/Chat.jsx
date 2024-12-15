import { useContext } from "react";
import { ChatMessage } from "./ChatMessage";

export const Chat = ({ messages }) => {
  return (
    <div>
      {messages.slice(1).map((msg, i) => {
        return (
          <ChatMessage index={i} role={msg.role} text={msg.parts[0].text} />
        );
      })}
    </div>
  );
};
