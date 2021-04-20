import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Affmenu from "../Affmenu";
import Stats from "./Stats";
import Lego from "./Lego";
import Covenant from "./Covenant";
import Talents from "./Talents";
import Raid from "./Raid";
import { Menu } from "../../Context/AffMenuContext";

const useStyles = makeStyles((theme) => ({}));

const Affliction = () => {
  const { state } = Menu();
  const { stats, lego, covenant, talents, raid } = state;

  return (
    <Grid container id="Guides" style={{ height: "704px" }}>
      <Affmenu />
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

export default Affliction;
