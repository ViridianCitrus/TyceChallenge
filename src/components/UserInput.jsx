import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { AIContext } from "../context/AIContext";

export const UserInput = () => {
  const context = useContext(AIContext);
  const { userInput: value, setUserInput: setValue } = context;

  return (
    <div className="tw-w-full tw-flex tw-flex-row">
      <TextField
        label=""
        multiline
        rows={4}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => {
          context.submit(value);
        }}
      ></Button>
    </div>
  );
};
