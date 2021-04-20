import React from "react";
import { AffMenuProvider } from "./AffMenuContext";
import { DemoMenuProvider } from "./DemoMenuContext";

const MaxProvider = (props) => {
  return (
    <AffMenuProvider>
      <DemoMenuProvider>{props.children}</DemoMenuProvider>
    </AffMenuProvider>
  );
};

export default MaxProvider;
