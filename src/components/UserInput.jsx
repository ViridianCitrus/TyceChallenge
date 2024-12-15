import { Button } from "@mui/material";
import { useContext } from "react";
import { AIContext } from "../context/AIContext";
import SendIcon from "@mui/icons-material/Send";

export const UserInput = () => {
  const context = useContext(AIContext);
  const { userInput: value, setUserInput: setValue } = context;

  return (
    <div className="tw-flex tw-flex-row tw-justify-center tw-gap-2">
      <input
        type="text"
        className="tw-p-3 tw-w-3/5 tw-border tw-border-slate-400 tw-rounded-md"
        placeholder="Let me know how I can help you!"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button
        variant="contained"
        startIcon={<SendIcon />}
        onClick={() => {
          context.submit(value);
        }}
      ></Button>
    </div>
  );
};
