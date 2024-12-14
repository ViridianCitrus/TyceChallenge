import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { AIContext } from "../context/AIContext";

export const UserInput = () => {
  const [value, setValue] = useState("");
  const context = useContext(AIContext);

  return (
    <>
      <TextField
        label=""
        multiline
        rows={4}
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
    </>
  );
};
