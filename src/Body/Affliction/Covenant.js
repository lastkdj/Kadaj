import React from "react";
import Paper from "@material-ui/core/Paper";
import { Menu } from "../../Context/AffMenuContext";
import { Grid, Slide, Typography, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Nightfae from "../../Img/aff/nightfae.jpg";
import nf from "../../Img/aff/nf.png";
import Conduits from "./Conduits";
import Niya from "../../Img/aff/niya.png";
import Soulrot from "../../Img/aff/soulrot.png";
import Flicker from "../../Img/aff/flicker.png";
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

    [theme.breakpoints.up("lg")]: { marginTop: "80px" },

    [theme.breakpoints.up("xl")]: {
      marginTop: "50px",
    },
  },

  subtittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.2em",
  },

  boxText: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9em",
  },

  infoBox: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9em",
    textAlign: "justify",
  },

  covenantskills: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
    width: "40px",
    height: "40px",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      width: "50px",
      height: "50px",
    },
  },
}));

const Covenant = (props) => {
  const classes = useStyles();
  const { state } = Menu();
  const { covenant } = state;
  return (
    <Slide
      direction="left"
      in={covenant}
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
          <Grid
            container
            item
            xs={12}
            style={{ padding: "10px 10px 10px 15px" }}
          >
            {" "}
            <Typography className={classes.tittle}>
              Best Affliction Warlock Covenant
            </Typography>
          </Grid>
          <Divider variant="inset" component="hr" />
          <Grid container item xs={12} justify="space-around">
            <Grid container item xs={8}>
              <Grid container item xs={12} justify="center">
                {" "}
                <Typography
                  className={classes.subtittle}
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "#584DE1",
                  }}
                >
                  NIGHTFAE
                </Typography>
                <img alt="" src={nf} width="60px" height="60px" />
              </Grid>

              <Conduits />
              <Grid container item xs={6} direction="column">
                {" "}
                <Typography
                  className={classes.subtittle}
                  style={{ textAlign: "center" }}
                >
                  Soulbind
                </Typography>
                <Typography
                  className={classes.subtittle}
                  style={{ textAlign: "center", color: "rgb(245, 137, 0)" }}
                >
                  {" "}
                  NIYA
                </Typography>
                <Grid container item justify="center">
                  {" "}
                  <img alt="" src={Niya} style={{ width: "fit-content" }} />
                  <a
                    href="https://www.wowhead.com/spell=325640/soul-rot"
                    data-wowhead="spell=325640"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      alt=""
                      src={Soulrot}
                      style={{ marginRight: "10px" }}
                      className={classes.covenantskills}
                    />
                  </a>
                  <a
                    href="https://www.wowhead.com/spell=310143/soulshape"
                    data-wowhead="spell=310143"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      alt=""
                      src={Flicker}
                      className={classes.covenantskills}
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} style={{ alignItems: "center" }}>
              <img alt="" src={Nightfae} className={classes.statsimg} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Slide>
  );
};

export default Covenant;
