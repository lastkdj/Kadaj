import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import Warlock from "../Img/Warlock.jpg";
import Particles from "./Particles";
import logo from "../Img/KadajLogo.png";
import logo2 from "../Img/classlogo.png";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  firstsectiontext: {
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",
    fontSize: "3em",
  },

  firstsectionh2: {
    color: "white",
    fontSize: "2em",
    margin: "0%",
    fontWeight: "700",
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",
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
  },

  spec: {
    fontWeight: 700,
    color: "black",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "3em",
  },
}));

const Body = () => {
  const classes = useStyles();
  return (
    <Grid style={{ height: "110vh", backgroundImage: `url(${Warlock})` }}>
      <Particles />
      <Header />

      <Grid
        container
        style={{ backgroundRepeat: "no-repeat", marginTop: "250px" }}
      >
        <Grid item style={{ marginLeft: "150px", marginTop: "150px" }}>
          <img alt="logo" src={logo}></img>
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
        <Grid item style={{ marginLeft: "20px", marginTop: "420px" }}>
          <img alt="logo2" src={logo2}></img>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body;
