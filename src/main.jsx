import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChatProvider } from "./context/ChatContext.jsx"; // ✅ Import ChatProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatProvider> {/* ✅ Wrap App inside ChatProvider */}
      <App />
    </ChatProvider>
  </StrictMode>
);
