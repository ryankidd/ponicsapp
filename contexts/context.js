import { createContext, useState } from "react";

export const GlobalContext = createContext();


export default function ContextProvider({ children }) {
  const [mode, setMode] = useState("temp") // temp - Temperature set as default mode.
  const [room, setRoom] = useState(null)

  return (
    <GlobalContext.Provider
      value={[mode, setMode, room, setRoom]}>
      {children}
    </GlobalContext.Provider>
  );
}