import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Slide, Typography, makeStyles } from "@material-ui/core";
import { Menu } from "../../Context/AffMenuContext";
import Divider from "@material-ui/core/Divider";
import Runecarver from "../../Img/aff/runecarver.jpg";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Demonic from "../../Img/aff/demonic.png";
import Wrath from "../../Img/aff/wrath.png";
import Sacrolash from "../../Img/aff/sacrolash.png";
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
    borderColor: "#2AB602",
    backgroundImage: `url(${wowBack})`,

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  statsimg: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
    backgroundImage: `url(${wowBack})`,

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: "300px",
      height: "400px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "400px",
      height: "536px",
    },
  },

  paperborder: {
    maxWidth: "100%",
    height: "auto",
    backgroundColor: "#1c1c1c",
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
    backgroundImage: `url(${wowBack})`,
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      height: "650px",
    },
  },

  menuItemSheet: {
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { marginTop: "130px" },

    [theme.breakpoints.up("xl")]: {
      marginTop: "50px",
    },
  },

  subtittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: { fontSize: "1.2em" },
  },
}));

const Lego = (props) => {
  const classes = useStyles();
  const { state } = Menu();
  const { lego } = state;

  return (
    <Slide
      direction="left"
      in={lego}
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
                Best Affliction Warlock Legendaries
              </Typography>
            </Grid>
            <Divider variant="inset" component="hr" />
            <Grid container item xs={12} justify="space-around">
              <Grid container item xs={7} direction="column">
                {" "}
                <Typography
                  className={classes.info}
                  style={{ marginTop: "20px", color: "#adb0bb" }}
                >
                  Before getting into the specific legendary powers, keep in
                  mind that you'll want to choose to craft your legendaries in
                  the slot that will grant you the highest amount of stats.
                  Focus on pieces that have more stats baseline, like
                  helm/chest/legs.
                </Typography>
                <Typography
                  className={classes.subtittle}
                  style={{ marginTop: "20px", color: "#2AB602" }}
                >
                  Best Affliction Warlock Legendary for Raiding and Mythic +
                </Typography>
                <Grid>
                  <a
                    href="https://www.wowhead.com/spell=337057/relic-of-demonic-synergy"
                    data-wowhead="spell=337057"
                    style={{ textDecoration: "none" }}
                  >
                    <Grid container style={{ marginTop: "30px" }}>
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          src={Demonic}
                          style={{
                            boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                          }}
                        ></Avatar>
                      </ListItemAvatar>
                      <Typography
                        className={classes.subtittle}
                        style={{ color: "orange", paddingTop: "10px" }}
                        variant="h2"
                      >
                        Relic of Demonic Synergy{" "}
                      </Typography>
                    </Grid>
                  </a>
                  <Typography className={classes.info}>
                    <ul>
                      <li>
                        Available Slots:{" "}
                        <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                          Head, Shoulder{" "}
                        </span>
                      </li>
                      <li>
                        Crafting Preference:{" "}
                        <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                          Head
                        </span>
                      </li>
                      <li>
                        Secondaries to use:{" "}
                        <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                          Haste/Mastery
                        </span>
                      </li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid style={{ display: "flex" }}>
                  <Grid container item>
                    <Typography
                      className={classes.subtittle}
                      style={{ marginTop: "20px", color: "darkkhaki" }}
                    >
                      Alternative for Mythic +
                    </Typography>
                    <a
                      href="https://www.wowhead.com/spell=337128/wrath-of-consumption"
                      data-wowhead="spell=337128"
                      style={{ textDecoration: "none" }}
                    >
                      <Grid container style={{ marginTop: "30px" }}>
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            src={Wrath}
                            style={{
                              boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                            }}
                          ></Avatar>
                        </ListItemAvatar>
                        <Typography
                          className={classes.subtittle}
                          style={{ color: "orange", paddingTop: "10px" }}
                          variant="h2"
                        >
                          Wrath of Consumption{" "}
                        </Typography>
                      </Grid>
                    </a>
                    <Typography className={classes.info}>
                      <ul>
                        <li>
                          Available Slots:{" "}
                          <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                            Feet, Back{" "}
                          </span>
                        </li>
                        <li>
                          Crafting Preference:{" "}
                          <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                            Feet
                          </span>
                        </li>
                        <li>
                          Secondaries to use:{" "}
                          <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                            Haste/Mastery
                          </span>
                        </li>
                      </ul>
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Typography
                      className={classes.subtittle}
                      style={{ marginTop: "20px", color: "darkkhaki" }}
                    >
                      Alternative for Raiding & Mythic +
                    </Typography>
                    <a
                      href="https://www.wowhead.com/spell=337111/sacrolashs-dark-strike"
                      data-wowhead="spell=337111"
                      style={{ textDecoration: "none" }}
                    >
                      <Grid container style={{ marginTop: "30px" }}>
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            src={Sacrolash}
                            style={{
                              boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                            }}
                          ></Avatar>
                        </ListItemAvatar>
                        <Typography
                          className={classes.subtittle}
                          style={{ color: "orange", paddingTop: "10px" }}
                          variant="h2"
                        >
                          Sacrolash's Dark Strike{" "}
                        </Typography>
                      </Grid>
                    </a>
                    <Typography className={classes.info}>
                      <ul>
                        <li>
                          Available Slots:{" "}
                          <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                            Legs, Feet{" "}
                          </span>
                        </li>
                        <li>
                          Crafting Preference:{" "}
                          <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                            Legs
                          </span>
                        </li>
                        <li>
                          Secondaries to use:{" "}
                          <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                            Haste/Mastery
                          </span>
                        </li>
                      </ul>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item xs={4} style={{ alignItems: "center" }}>
                <img src={Runecarver} className={classes.statsimg} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Slide>
  );
};

export default Lego;
