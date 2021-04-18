import React from "react";
import { MenuProvider } from "./MenuContext";

const MaxProvider = (props) => {
  return <MenuProvider>{props.children}</MenuProvider>;
};

export default MaxProvider;
