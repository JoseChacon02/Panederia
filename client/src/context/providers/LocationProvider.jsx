import { createContext, useContext, useState } from "react";

const locationContext = createContext();

export const useLinkLocation = () => {
  const context = useContext(locationContext);
  return context;
};

export default function LocationProvider({ children }) {
  const [isActivateLink, setisActivateLink] = useState("home");
  console.log(isActivateLink)

  return <locationContext.Provider value={{ isActivateLink, setisActivateLink }}>
    {children}
  </locationContext.Provider>;
}
