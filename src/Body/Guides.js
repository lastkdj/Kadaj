import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Affwall from "../Img/affwall4.png";
import Affliction from "./Affliction";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${Affwall})`,
    height: "300vh",
    opacity: "",
  },
}));

const Guides = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.asset1} id="Guides">
      <Affliction />
    </Grid>
  );
};

export default Guides;
