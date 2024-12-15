import React, { useContext } from "react";
import { AIContext } from "../context/AIContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FileUpload } from "../components/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import { PAGES } from "../const";
import TyceLogo from "../assets/tyce.png";
export const HomePage = ({ changePage }) => {
  const { userInput, setUserInput } = useContext(AIContext);

  const onStart = () => {
    changePage(PAGES.CHAT);
  };

  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-5 tw-mt-8">
      <img src={TyceLogo} />
      <p className="tw-text-xl">Hi Kevin, I’m Tyce, your Sales Partner.</p>
      <p>I’m here to help you sell projects.</p>
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
          className="tw-p-3 tw-w-3/5 tw-border tw-border-slate-400 tw-rounded-md"
          placeholder="Let me know how I can help you!"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <Button variant="contained" startIcon={<SendIcon />} onClick={onStart}>
          START
        </Button>
        {/* Document Section */}
      </div>
      <FileUpload />
      <p></p>
      <div className="tw-mt-6">
        <p className="tw-mb-4 tw-font-bold">Top deals this quarter</p>
        {/* App Development Card */}
        <div className="tw-flex tw-flex-row tw-gap-5">
          <div className="tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-w-48 tw-shadow-lg">
            <p className="tw-font-bold tw-mb-2">App Development</p>
            <p className="tw-my-1">
              <strong>6</strong> Deals
            </p>
            <p className="tw-my-1">
              <strong>$1M</strong> Revenue
            </p>
            <div className="tw-mt-2 tw-p-1 tw-bg-gray-200 tw-rounded-md tw-text-sm tw-flex tw-text-center">
              Banking
            </div>
          </div>
          {/* ERP Card */}
          <div className="tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-w-48 tw-shadow-lg">
            <p className="tw-font-bold tw-mb-2">ERP</p>
            <p className="tw-my-1">
              <strong>10</strong> Deals
            </p>
            <p className="tw-my-1">
              <strong>$5M</strong> Revenue
            </p>
            <div className="tw-mt-2 tw-p-1 tw-bg-gray-200 tw-rounded-md tw-text-sm tw-flex tw-text-center">
              Banking
            </div>
          </div>
          {/* AI POCs Card */}
          <div className="tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-w-48 tw-shadow-lg">
            <p className="tw-font-bold tw-mb-2">AI POCs</p>
            <p className="tw-my-1">
              <strong>7</strong> Deals
            </p>
            <p className="tw-my-1">
              <strong>$500K</strong> Revenue
            </p>
            <div className="tw-mt-2 tw-p-1 tw-bg-gray-200 tw-rounded-md tw-text-sm tw-flex tw-text-center">
              Industrial
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
