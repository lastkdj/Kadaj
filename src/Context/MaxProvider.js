import React from "react";

import { AffMenuProvider } from "./AffMenuContext";
import { DemoMenuProvider } from "./DemoMenuContext";
import { DestroMenuProvider } from "./DestroMenuContext";

const MaxProvider = (props) => {
  return (
    <AffMenuProvider>
      <DemoMenuProvider>
        <DestroMenuProvider>{props.children}</DestroMenuProvider>
      </DemoMenuProvider>
    </AffMenuProvider>
  );
};

export default MaxProvider;
