import { createContext, useContext } from "react";

const locationContext = createContext();

export const useLocation = () => {
  const context = useContext(locationContext);
  return context;
};

export default function locationContext({ children }) {
  return <locationContext.Provider>{children}</locationContext.Provider>;
}
