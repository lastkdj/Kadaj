import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Affwall from "../Img/affwall4.png";
import Affliction from "./Affliction/Affliction";
import Demonology from "./Demo/Demonology";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${Affwall})`,
    opacity: "",
  },
}));

const Guides = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.asset1} id="Guides">
      <Affliction />
      <Demonology />
    </Grid>
  );
};

export default Guides;
