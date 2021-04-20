import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Demomenu from "./Demomenu";
import Stats from "./Stats";
import Lego from "./Lego";
import Covenant from "./Covenant";
import Talents from "./Talents";
import Raid from "./Raid";
import { Menu } from "../../Context/DemoMenuContext";

const useStyles = makeStyles((theme) => ({}));

const Demonology = () => {
  const { state } = Menu();
  const { stats, lego, covenant, talents, raid } = state;

  return (
    <Grid container id="Guides" style={{ marginTop: "150px", height: "300vh" }}>
      <Demomenu />
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

export default Demonology;
