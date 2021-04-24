import React from "react";
import Particles from "./Particles";
import logo from "../Img/KadajLogo.png";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  kadajLogo: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      margin: "50px 20px 0px 150px",
      width: "160px",
    },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      width: "236px",
    },
  },

  firstsectiontext: {
    fontWeight: 500,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2em",
    animation: "fadeIn ease 1.5s",

    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
      textShadow: "1px 1px black",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "2em",
      textShadow: "1px 1px black",
    },

    [theme.breakpoints.up("xl")]: {
      fontSize: "3em",
      textShadow: "none",
    },
  },

  firstsectionh2: {
    color: "white",
    fontSize: "2em",
    margin: "0%",
    fontWeight: 500,
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    animation: "fadeInBot ease 1.7s",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  firstsectionspan: {
    color: "rgb(90, 240, 30)",
  },
  secondsectionp: {
    fontSize: "0.8em",
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    animation: "fadeInBot ease 1.9s",

    [theme.breakpoints.up("md")]: {
      fontSize: "0.8em",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "0.8em",
    },

    [theme.breakpoints.up("xl")]: {
      fontSize: "1em",
    },
  },

  spec: {
    fontWeight: 600,
    color: "black",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "3em",
  },
}));

const Banner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 412px)" });

  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      style={!isMobile ? { height: "106vh" } : { height: "60vh" }}
    >
      {isMobile ? null : <Particles isMobile={isMobile} />}
      <Grid container item style={{ backgroundRepeat: "no-repeat" }}>
        <Grid item>
          <img alt="logo" src={logo} className={classes.kadajLogo}></img>
        </Grid>

        <Grid
          item
          style={
            !isMobile
              ? { marginTop: "60px" }
              : { marginTop: "180px", padding: "20px" }
          }
        >
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

export default Banner;
