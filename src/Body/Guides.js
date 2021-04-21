import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Affwall from "../Img/affwall5.png";
import Affliction from "./Affliction/Affliction";
import Demonology from "./Demo/Demonology";
import Destruction from "./Destro/Destruction";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${Affwall})`,
    borderTopStyle: "solid",
    boxShadow: "-1px 8px 0px 13px rgba(0,0,0,1)",
    borderWidth: "1px",
    opacity: "",
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
