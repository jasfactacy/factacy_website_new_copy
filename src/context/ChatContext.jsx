import { createContext, useState } from "react";

// Create Context
export const ChatContext = createContext();

// Create Provider Component
export function ChatProvider({ children }) {
  const [openChatBot, setOpenChatBot] = useState(false);

  return (
    <ChatContext.Provider value={{ openChatBot, setOpenChatBot }}>
      {children}
    </ChatContext.Provider>
  );
}
