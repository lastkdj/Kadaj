import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ControlledCarousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
    animation: "fadeInBot ease 1.8s",
  },
}));

const VideosPOV = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      style={{
        height: "80vh",
        backgroundColor: "rgb(14, 24, 34)",
      }}
      justify="center"
    >
      <Grid item xs={!2}>
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          Castle Nathria, <span style={{ fontWeight: "400" }}>Warlock POV</span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ControlledCarousel />
      </Grid>
    </Grid>
  );
};

export default VideosPOV;
