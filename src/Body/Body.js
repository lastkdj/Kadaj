import React from "react";
import Particles from "./Particles";
import logo from "../Img/KadajLogo.png";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  kadajLogo: {
    margin: "50px 20px 0px 150px",
  },

  firstsectiontext: {
    fontWeight: 500,
    color: "white",
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",
    fontSize: "3em",
    animation: "fadeIn ease 1.5s",
  },

  firstsectionh2: {
    color: "white",
    fontSize: "2em",
    margin: "0%",
    fontWeight: 500,
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",
    animation: "fadeInBot ease 1.7s",
  },

  firstsectionspan: {
    color: "rgb(90, 240, 30)",
  },
  secondsectionp: {
    fontSize: "1em",
    color: "white",
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",
    animation: "fadeInBot ease 1.9s",
  },

  spec: {
    fontWeight: 600,
    color: "black",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "3em",
  },
}));

const Body = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" style={{ height: "106vh" }}>
      <Particles />
      <Grid container item style={{ backgroundRepeat: "no-repeat" }}>
        <Grid item>
          <img alt="logo" src={logo} className={classes.kadajLogo}></img>
        </Grid>

        <Grid item style={{ marginTop: "60px" }}>
          <Grid item>
            <Typography variant="h1" className={classes.firstsectiontext}>
              <span className={classes.firstsectionspan}>Kadaj</span> Gaming
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" className={classes.firstsectionh2}>
              Guides
            </Typography>{" "}
          </Grid>
          <Grid>
            <Typography variant="body1" className={classes.secondsectionp}>
              Welcome to the new Warlock Workshop
            </Typography>
            <Typography variant="body1" className={classes.secondsectionp}>
              And learn all the basics of{" "}
              <span className={classes.secondsectionspan}>
                Mardita sea borre todo
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body;
