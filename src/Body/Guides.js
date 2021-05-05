import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Affwall from "../Img/affwall5.png";
import PhoneAffwall from "../Img/affwallmobileblur.jpg";
import Affliction from "./Affliction/Affliction";
import Demonology from "./Demo/Demonology";
import Destruction from "./Destro/Destruction";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${PhoneAffwall})`,
    backgroundPosition: "top",
    borderTopStyle: "solid",
    boxShadow: "inset 0 0 0 1px #504137",
    borderWidth: "4px",
    opacity: "",
    backgroundPositionX: "50%",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${Affwall})`,
    },

    [theme.breakpoints.up("xl")]: {},
  },
}));

const Guides = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.asset1} id="Guides">
          <Affliction />
      <Demonology />
      <Destruction />
    </Grid>
  );
};

export default Guides;
