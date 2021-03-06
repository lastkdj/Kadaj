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
import { makeStyles } from "@material-ui/core";
import PhoneGuide from "./Mobile/PhoneGuide";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  affliction: {
    overflow: "hidden",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
      height: "820px",
    },

    [theme.breakpoints.up("xl")]: {},
  },
}));

const Affliction = () => {
  const classes = useStyles();
  const { state } = Menu();
  const { stats, lego, covenant, talents, raid, rotation } = state;

  const isTablet = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <Grid container xs={12} item id="affGuide" className={classes.affliction}>
      {isTablet ? <PhoneGuide /> : <Affmenu />}

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
