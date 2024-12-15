import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReactMarkdown from "react-markdown";
import TyceLogo from "../assets/tyce.png";

export const ChatMessage = ({ role, text }) => {
  return (
    <div
      className={`tw-flex tw-items-center tw-rounded-lg tw-px-4 tw-py-2 tw-shadow-md tw-max-w-[1000px] tw-min-h-1 tw-mx-auto tw-my-2 ${
        role === "user"
          ? "tw-bg-gray-200 tw-text-gray-800"
          : "tw-bg-white tw-text-gray-700 tw-border tw-border-gray-200"
      }`}
    >
      <div className="tw-flex tw-items-center tw-shrink-0">
        {role == "user" && <AccountCircleIcon sx={{ fontSize: 45 }} />}
        {/* Tyce Icon */}
        {role == "model" && <img src={TyceLogo} className="tw-size-9" />}
      </div>
      <div className="tw-px-5">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};
