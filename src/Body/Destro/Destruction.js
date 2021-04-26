import React from "react";
import { Grid } from "@material-ui/core";
import Destromenu from "./Destromenu";
import Stats from "./Stats";
import Lego from "./Lego";
import Covenant from "./Covenant";
import Talents from "./Talents";
import Raid from "./Raid";
import { Menu } from "../../Context/DestroMenuContext";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core";
import PhoneGuide from "./Mobile/PhoneGuide";

const useStyles = makeStyles((theme) => ({
  affliction: {
    height: "704px",
    overflow: "hidden",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    },

    [theme.breakpoints.up("xl")]: {},
  },
}));

const Destruction = () => {
  const classes = useStyles();
  const { state } = Menu();
  const { stats, lego, covenant, talents, raid } = state;

  const isTablet = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <Grid
      container
      id="Guides"
      style={{ marginTop: "200px", height: "840px", overflow: "hidden" }}
      className={classes.affliction}
    >
      {" "}
      {isTablet ? <PhoneGuide /> : <Destromenu />}
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
