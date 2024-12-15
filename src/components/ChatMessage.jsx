import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReactMarkdown from 'react-markdown'

export const ChatMessage = ({ role, text }) => {
  return (
    <div
      className={`rounded-lg px-4 py-2 max-w-[70%] shadow-sm ${
        role === "user"
          ? "bg-gray-200 text-gray-800"
          : "bg-white text-gray-700 border border-gray-200"
      }`}
    >
      <div>
        {role == "user" && <AccountCircleIcon />}
        {/* Tyce Icon */}
        {role == "model" && <div>✱</div>}
      </div>
      <div>
      <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};
