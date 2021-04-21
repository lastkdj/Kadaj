import React from "react";
import Paper from "@material-ui/core/Paper";
import { Menu } from "../../Context/DestroMenuContext";
import { Grid, Slide, Typography, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Nightfae from "../../Img/aff/nightfae.jpg";
import nf from "../../Img/aff/nf.png";
import Conduits from "./Conduits";
import Niya from "../../Img/aff/niya.png";
import Korayn from "../../Img/destro/korayn.png";
import Soulrot from "../../Img/aff/soulrot.png";
import Flicker from "../../Img/aff/flicker.png";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
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

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "justify",
  },

  infoBox: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9em",
    textAlign: "justify",
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#E64D00",
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
      <Grid item xs={9} style={{ marginTop: "50px" }}>
        <Paper
          elevation={3}
          style={{
            maxWidth: "100%",
            height: "650px",
            backgroundColor: "#1c1c1c",
          }}
          className={classes.border}
        >
          <Grid
            container
            item
            xs={12}
            style={{ padding: "10px 10px 10px 15px" }}
          >
            {" "}
            <Typography className={classes.tittle}>
              Best Destruction Warlock Covenant
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
                <img alt="covenant" src={nf} width="60px" height="60px" />
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
                <Grid container item justify="center">
                  <Grid container item xs={12} justify="center">
                    <a
                      href="https://www.wowhead.com/spell=325640/soul-rot"
                      data-wowhead="spell=325640"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        alt=""
                        src={Soulrot}
                        width="50px"
                        height="50px"
                        style={{ marginRight: "10px" }}
                        className={classes.border}
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
                        width="50px"
                        height="50px"
                        className={classes.border}
                      />
                    </a>{" "}
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    justify="center"
                    style={{ marginTop: "50px" }}
                  >
                    <Grid
                      container
                      item
                      xs={6}
                      style={{ justifyContent: "center", color: "white" }}
                    >
                      {" "}
                      <Typography
                        className={classes.subtittle}
                        style={{ textAlign: "center" }}
                      >
                        Single Target (NIYA)
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      style={{ justifyContent: "center" }}
                    >
                      {" "}
                      <Typography
                        className={classes.subtittle}
                        style={{ textAlign: "center" }}
                      >
                        AOE (KORYAN)
                      </Typography>
                    </Grid>
                    <img alt="" src={Niya} style={{ width: "230px" }} />
                    <img alt="" src={Korayn} style={{ width: "230px" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} style={{ maxHeight: "400px" }}>
              <img
                alt=""
                width="400px"
                src={Nightfae}
                className={classes.border}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Slide>
  );
};

export default Covenant;
