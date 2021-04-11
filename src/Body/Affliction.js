import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Affwall from "../Img/guidewall.png";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${Affwall})`,
    height: "300vh",
    opacity: "",
  },
}));

const Affliction = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      className={classes.asset1}
      id="Guides"
    ></Grid>
  );
};

export default Affliction;
