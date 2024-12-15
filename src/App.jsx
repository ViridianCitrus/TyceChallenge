import { useState } from "react";
import { AIContext, useAIContext } from "./context/AIContext";
import { HomePage } from "./pages/Homepage";
import { ChatPage } from "./pages/ChatPage";
import { PAGES } from "./const";
import { NavBar } from "./components/NavBar";
// Skip on using react-router since this is a 2-page demo

function App() {
  const [page, setPage] = useState(PAGES.HOME);
  return (
    <>
      <AIContext.Provider value={useAIContext()}>
        <div className="tw-w-full tw-h-full tw-flex tw-flex-row">
          <NavBar />
          {page === PAGES.HOME && <HomePage changePage={setPage} />}
          {page === PAGES.CHAT && <ChatPage changePage={setPage} />}
        </div>
      </AIContext.Provider>
    </>
  );
}

export default App;
