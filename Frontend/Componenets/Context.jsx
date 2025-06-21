import { createContext, useState, useEffect } from "react";
import object from "./ob";

export const WebContext = createContext(null);

export const ContextProvider = (props) => {
  const [currcart, setcart] = useState([]);
  const [singleItem, setSingleItem] = useState(object[30]);
  const [present, setpresent] = useState(null);

  const itemPage = (obj) => {
    setSingleItem(obj);
  };

  const cartOnClick = (obj) => {
    setcart([...currcart, obj]);
  };
  return (
    <WebContext.Provider
      value={{
        currcart,
        setcart,
        cartOnClick,
        itemPage,
        singleItem,
        present,
        setpresent,
      }}
    >
      {props.children}
    </WebContext.Provider>
  );
};
