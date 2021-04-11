import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

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

const Covenant = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      xs={12}
      style={{
        height: "500px",
        backgroundColor: "rgb(14, 24, 34)",
      }}
      justify="center"
    >
      <Grid item>
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          Castle Nathria, <span style={{ fontWeight: "400" }}>Warlock POV</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Covenant;
