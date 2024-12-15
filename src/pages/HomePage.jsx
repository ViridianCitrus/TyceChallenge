import React, { useContext } from "react";
import { AIContext } from "../context/AIContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FileUpload } from "../components/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import { PAGES } from "../const";
export const HomePage = ({ changePage }) => {
  const { userInput, setUserInput } = useContext(AIContext);

  const onStart = () => {
    changePage(PAGES.CHAT);
  };

  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-5">
      <div>✱</div>
      <h2>Hi Kim, I’m Tyce, your Sales Partner.</h2>
      <p className="tw-text-slate-500">I’m here to help you sell projects.</p>
      <p>What do you need assistance with today?</p>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">RFP</Button>
        <Button variant="contained">Pricing</Button>
        <Button variant="contained">Marketing</Button>
        <Button variant="contained">Contract</Button>
      </Stack>
      <div className="tw-w-1/2 tw-flex tw-flex-row tw-justify-center tw-gap-2">
        <input
          type="text"
          className="tw-w-full"
          placeholder="Let me know how I can help you!"
          style={styles.input}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value)
          }}
        />
        <Button variant="contained" startIcon={<SendIcon />} onClick={onStart}>
          START
        </Button>
        {/* Document Section */}
      </div>
      <p>
        Add documents (meeting notes, client briefings) to start a new project
      </p>
      <div className="tw-mt-8">
        <p className="tw-mb-4 tw-font-bold">Top deals this quarter ⌃</p>
        {/* App Development Card */}
        <div className="tw-flex tw-flex-row tw-gap-5">
          <div style={styles.card}>
            <p style={styles.cardTitle}>App Development</p>
            <p style={styles.cardStats}>
              <strong>6</strong> Deals
            </p>
            <p style={styles.cardStats}>
              <strong>$1M</strong> Revenue
            </p>
            <div style={styles.cardCategory}>Banking</div>
          </div>
          {/* ERP Card */}
          <div style={styles.card}>
            <p style={styles.cardTitle}>ERP</p>
            <p style={styles.cardStats}>
              <strong>10</strong> Deals
            </p>
            <p style={styles.cardStats}>
              <strong>$5M</strong> Revenue
            </p>
            <div style={styles.cardCategory}>Banking</div>
          </div>
          {/* AI POCs Card */}
          <div style={styles.card}>
            <p style={styles.cardTitle}>AI POCs</p>
            <p style={styles.cardStats}>
              <strong>7</strong> Deals
            </p>
            <p style={styles.cardStats}>
              <strong>$500K</strong> Revenue
            </p>
            <div style={styles.cardCategory}>Industrial</div>
          </div>
        </div>
      </div>
      <FileUpload />
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "2rem",
    color: "#333",
  },

  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.75rem",
    width: "60%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    width: "200px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  cardStats: {
    margin: "0.25rem 0",
  },
  cardCategory: {
    marginTop: "0.5rem",
    padding: "0.25rem",
    backgroundColor: "#eee",
    borderRadius: "5px",
    fontSize: "0.85rem",
  },
};
