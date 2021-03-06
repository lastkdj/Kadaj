import React from "react";
import { Grid } from "@material-ui/core";
import Demomenu from "./Demomenu";
import Stats from "./Stats";
import Lego from "./Lego";
import Covenant from "./Covenant";
import Talents from "./Talents";
import Raid from "./Raid";
import { Menu } from "../../Context/DemoMenuContext";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core";
import PhoneGuide from "./Mobile/PhoneGuide";

const useStyles = makeStyles((theme) => ({
  affliction: {
    overflow: "hidden",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
      height: "900px",
    },

    [theme.breakpoints.up("xl")]: {},
  },
}));

const Demonology = () => {
  const classes = useStyles();
  const { state } = Menu();
  const { stats, lego, covenant, talents, raid } = state;

  const isTablet = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <Grid container xs={12} item id="demoGuide" className={classes.affliction}>
      {isTablet ? <PhoneGuide /> : <Demomenu />}

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
