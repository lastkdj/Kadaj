import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { Menu } from "../../Context/MenuContext";

const Covenant = (props) => {
  const { state } = Menu();
  const { covenant } = state;
  return (
    <Slide
      direction="left"
      in={covenant}
      timeout={{
        appear: 500,
        enter: 300,
        exit: 500,
      }}
      mountOnEnter
      unmountOnExit
    >
      <Grid item xs={9} style={{ marginTop: "50px" }}>
        <Paper
          elevation={3}
          style={{
            width: "100%",
            height: "650px",
            backgroundColor: "#1c1c1c",
          }}
        />
      </Grid>
    </Slide>
  );
};

export default Covenant;
