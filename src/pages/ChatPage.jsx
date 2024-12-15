import { UserInput } from "../components/UserInput";
import { useContext } from "react";
import { AIContext } from "../context/AIContext";
import { Chat } from "../components/Chat";

export const ChatPage = () => {
  const context = useContext(AIContext);
  const { chatHistory } = context;

  return(
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col">
      <div>
        <Chat messages={context.chatHistory} />
      </div>
    <UserInput />
  </div>
  );
};
