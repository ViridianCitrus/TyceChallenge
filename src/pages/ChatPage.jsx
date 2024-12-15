import { UserInput } from "../components/UserInput";
import { useContext } from "react";
import { AIContext } from "../context/AIContext";
import { Chat } from "../components/Chat";

export const ChatPage = () => {
  const context = useContext(AIContext);

  return (
    <div className="tw-flex tw-flex-col overflow-y-auto tw-px-4 tw-py-2 tw-w-5/6 tw-mx-auto tw-mt-auto">
      <div>
        <Chat messages={context.chatHistory} />
      </div>
      <UserInput />
    </div>
  );
};
