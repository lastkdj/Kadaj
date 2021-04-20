import React from "react";
import { Grid } from "@material-ui/core";
import Destromenu from "./Destromenu";
import Stats from "./Stats";
import Lego from "./Lego";
import Covenant from "./Covenant";
import Talents from "./Talents";
import Raid from "./Raid";
import { Menu } from "../../Context/DestroMenuContext";

const Destruction = () => {
  const { state } = Menu();
  const { stats, lego, covenant, talents, raid } = state;

  return (
    <Grid container id="Guides" style={{ marginTop: "200px", height: "840px" }}>
      <Destromenu />
      {stats ? (
        <Stats />
      ) : lego ? (
        <Lego />
      ) : covenant ? (
        <Covenant />
      ) : talents ? (
        <Talents />
      ) : raid ? (
        <Raid />
      ) : null}
    </Grid>
  );
};

export default Destruction;
