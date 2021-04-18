import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Affmenu from "./Affmenu";
import Stats from "./Affliction/Stats";
import Lego from "./Affliction/Lego";
import Covenant from "./Affliction/Covenant";
import Talents from "./Affliction/Talents";
import Raid from "./Affliction/Raid";
import { Menu } from "../Context/MenuContext";

const useStyles = makeStyles((theme) => ({}));

const Affliction = () => {
  const { state, dispatch } = Menu();
  const { stats, lego, covenant, talents, raid } = state;
  const classes = useStyles();

  return (
    <Grid container id="Guides">
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
