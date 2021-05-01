import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Slide, Typography, makeStyles } from "@material-ui/core";
import { Menu } from "../../Context/DemoMenuContext";
import Divider from "@material-ui/core/Divider";
import StatImage from "../../Img/demo/demorightside.jpg";
import wowBack from "../../Img/wowback.jpg";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.5em",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      fontSize: "2.1em",
    },
  },

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "justify",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { fontSize: "0.8em" },

    [theme.breakpoints.up("xl")]: {
      fontSize: "1em",
    },
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#B97AF4",
    backgroundImage: `url(${wowBack})`,

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  statsimg: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#B97AF4",
    backgroundImage: `url(${wowBack})`,

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: "300px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "400px",
    },
  },

  paperborder: {
    maxWidth: "100%",
    height: "auto",
    backgroundColor: "#1c1c1c",
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#B97AF4",
    backgroundImage: `url(${wowBack})`,
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      height: "650px",
    },
  },

  menuItemSheet: {
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      marginTop: "190px",
    },

    [theme.breakpoints.up("xl")]: {
      marginTop: "50px",
    },
  },
}));

const Stats = (props) => {
  const classes = useStyles();
  const { state } = Menu();
  const { stats } = state;
  return (
    <Slide
      direction="left"
      in={stats}
      timeout={{
        appear: 500,
        enter: 300,
        exit: 500,
      }}
      mountOnEnter
      unmountOnExit
    >
      <Grid item xs={9} className={classes.menuItemSheet}>
        <Paper elevation={3} className={classes.paperborder}>
          <Grid container style={{ padding: "10px 10px 10px 15px" }}>
            <Grid container xs={12}>
              {" "}
              <Typography
                className={classes.tittle}
                style={{ textAlign: "center" }}
              >
                Best Stats for Demonology Warlock
              </Typography>
            </Grid>
            <Divider variant="inset" component="hr" />
            <Grid container item xs={12} justify="space-around">
              <Grid container item xs={7}>
                {" "}
                <Typography className={classes.info}>
                  <ul>
                    <li>Intellect</li>
                    <li>Spell Power</li>
                    <li>
                      Mastery{" "}
                      <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                        Increases the damage done by your demons by %.{" "}
                      </span>
                    </li>
                    <li>
                      Haste{" "}
                      <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                        Increases attack speed and spell casting speed.{" "}
                      </span>
                    </li>
                    <li>
                      Crit :{" "}
                      <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                        Chance for extra effectiveness on attacks and heals.{" "}
                      </span>
                    </li>
                    <li>
                      Versatility{" "}
                      <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                        Increases damage and reduces damage taken by half.{" "}
                      </span>
                    </li>
                  </ul>
                  <span
                    style={{
                      color: "#B97AF4",
                      marginLeft: "50px",
                      fontWeight: 600,
                    }}
                  >
                    Intellect{" > "}Spell Power{" > "}Haste{" > "}Mastery{" = "}
                    Crit{" > "}
                    Versatility
                  </span>
                </Typography>
                <Typography className={classes.info}>
                  The above suggestion is only generic and exact values will
                  change based on your gear available. In order to best know
                  your best stats, we recommend you to sim your own character
                  using many tools available in the community like
                  SimulationCraft. Raidbots provides you with an online platform
                  for you to sim your characters and find your Demonology
                  Warlock stat priority for free! Learn more about that in our
                  in-depth guide to Raidbots.
                </Typography>
              </Grid>
              <Grid container item xs={4} style={{ alignItems: "center" }}>
                <img alt="" src={StatImage} className={classes.statsimg} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Slide>
  );
};

export default Stats;
