import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Asset1 from "../Img/shape2.jpg";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${Asset1})`,
    height: "60vh",
  },
}));

const Youtube = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.asset1}>
      <Grid item xs={6}>
        {" "}
        Hello
      </Grid>
      <Grid item xs={6}>
        World
      </Grid>
    </Grid>
  );
};

export default Youtube;
