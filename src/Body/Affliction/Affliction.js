import React from "react";
import { Grid } from "@material-ui/core";
import Affmenu from "./Affmenu";
import Stats from "./Stats";
import Lego from "./Lego";
import Covenant from "./Covenant";
import Talents from "./Talents";
import Raid from "./Raid";
import Rotation from "./Rotation";
import { Menu } from "../../Context/AffMenuContext";

const Affliction = () => {
  const { state } = Menu();
  const { stats, lego, covenant, talents, raid, rotation } = state;

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
      ) : rotation ? (
        <Rotation />
      ) : null}
    </Grid>
  );
};

export default Affliction;
