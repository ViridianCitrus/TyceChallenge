import React, { useState, useContext } from "react";
import { AIContext } from "../context/AIContext";
export const FileUpload = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { setFilesText } = useContext(AIContext);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const txtFiles = files.filter((file) => file.type === "text/plain");

    if (txtFiles.length !== files.length) {
      setErrorMessage(
        "Only .txt files are allowed. Please remove unsupported files."
      );
      return;
    }

    setErrorMessage(""); // Clear any previous error messages

    const fileReadPromises = txtFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () =>
          reject(new Error(`Failed to read file: ${file.name}`));
        reader.readAsText(file);
      });
    });

    Promise.all(fileReadPromises)
      .then((contents) => {
        setFilesText(contents);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred while reading files.");
      });
  };

  return (
    <div className="tw-px-5 tw-py-4 tw-bg-gray-200 tw-rounded-md">
      <label>
        Add documents (meeting notes, client briefings) to start a new project
        <input
          className="tw-hidden"
          type="file"
          accept=".txt"
          multiple
          onChange={handleFileUpload}
        />
      </label>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};
