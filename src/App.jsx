import { useEffect, useState, useContext } from "react";
import Navbar from "./components/navbar/Index.jsx"; // Import Navbar
import Routes from "./Routes/Routes.jsx";
import Chat from "../src/components/navbar/Chat.jsx";
import CallToAction from "../src/components/homepage/CallToAction.jsx";
import { ChatContext } from "../src/context/ChatContext.jsx"; // Import ChatContext

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const { openChatBot, setOpenChatBot } = useContext(ChatContext); // ✅ Ensure both values are used

  return (
    <div className={`h-screen ${openChatBot ? "overflow-auto" : "overflow-visible"}`}>
      <Routes>
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
          setOpenChatBot={setOpenChatBot} // ✅ Pass setOpenChatBot to Navbar
        />
        {openChatBot && <Chat setOpenChatBot={setOpenChatBot} />} {/* ✅ Pass to Chat */}
      </Routes>
    </div>
  );
}

export default App;