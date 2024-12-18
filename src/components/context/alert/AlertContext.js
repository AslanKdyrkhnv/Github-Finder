import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const inital = null;

  const [state, dispatch] = useReducer(AlertReducer, inital);

  const setAlert = (msg, type) => {
    dispatch({
      type: "ALERT_ON",
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: "ALERT_OFF",
      });
    }, 4000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
