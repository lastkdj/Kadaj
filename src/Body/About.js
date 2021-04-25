import React, { useEffect } from "react";
import "./Styles.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Asset1 from "../Img/oribosback6.jpg";
import Asset2 from "../Img/newabout.jpg";
import about from "../Img/kadaj.png";
import Awareness from "../Img/Awareness.png";
import Void from "../Img/void.png";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  asset1: {
    marginTop: "-17px",
    borderColor: "black",
    borderTopStyle: "solid",
    borderWidth: "3px",

    [theme.breakpoints.up("md")]: {
      backgroundSize: "cover",
    },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: { marginTop: "180px" },
  },

  about: {
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.8em",
    animation: "fadeInBot ease 1.8s",
    textShadow: "1px 1px #000000",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.8em",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.8em",
      textAlign: "start",
    },

    [theme.breakpoints.up("xl")]: {
      fontSize: "2.1em",
    },
  },

  aboutText: {
    fontSize: "0.8em",
    fontWeight: 400,
    lineHeight: "26px",
    color: "white",
    margin: 0,
    textAlign: "justify",
    textShadow: "1px 1px #000000",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: { fontSize: "1em" },
  },

  aboutgrid: {
    margin: "0px 30px 0px 30px",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: { justifyContent: "flex-start" },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  awareness: {
    marginTop: "60px",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },

    [theme.breakpoints.up("xl")]: {
      marginTop: "130px",
    },
  },
}));

const About = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInLeft");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".aboutFade");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInRight");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".aboutFadetwo");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 414px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 960px)" });

  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.asset1}
      id="About"
      style={
        isTablet
          ? {
              backgroundImage: `url(${Asset2})`,
              height: "1750px",
              backgroundPosition: "top",
            }
          : { backgroundImage: `url(${Asset1})`, height: "1900px" }
      }
    >
      <Grid
        container
        item
        xs={12}
        style={{
          justifyContent: "center",
          paddingTop: "50px",
          height: "650px",
        }}
      >
        <Grid container item xs={12} md={12} lg={6} class="aboutFade fadeOut">
          <Typography
            className={classes.about}
            style={!isTablet ? { marginTop: "200px" } : null}
          >
            ABOUT ME
          </Typography>
          <Typography className={classes.aboutText}>
            Hello friends! My name is Ricardo, I'm 31 years old. I'm a Top Tier
            Warlock and I've been playing wow since Wotlk, I dedicate most of my
            time optimizing my game, and also doing some programing. In this
            oportunity I bring to you this website, for all the fellow warlocks
            around the globe that need some sort of guidance to maximize their
            playstyle, and help in a certain way their posibility of improvement
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={6}
          class="aboutFadetwo fadeOut"
        >
          <img
            alt=""
            src={about}
            style={isTablet ? { width: "200px" } : { width: "400px" }}
          ></img>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify="center"
          className={classes.awareness}
        >
          <Grid
            container
            item
            xs={12}
            md={12}
            lg={6}
            justify="flex-end"
            class="aboutFade fadeOut"
            style={
              isTablet
                ? {
                    order: 2,
                    display: "flex",
                    justifyContent: "center",
                    height: "250px",
                    marginTop: "40px",
                  }
                : null
            }
          >
            <img
              style={isTablet ? { width: "300px" } : null}
              alt=""
              src={Awareness}
            ></img>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={12}
            lg={6}
            justify="flex-end"
            class="aboutFadetwo fadeOut"
            style={
              isTablet
                ? { order: 1, width: "500px", flexDirection: "column" }
                : { paddingTop: "200px" }
            }
          >
            <Typography className={classes.about}>AWARENESS GUILD</Typography>
            <Typography className={classes.aboutText}>
              I Raid in the Guild Awareness in the Ragnaros US server. Currently
              10/10 Mythic Castle Nathria, Top 2 Guild Latam We are a group of
              dedicated raiders that try to make the best out of each raid
              content. Most of the Raiders are located in South America so there
              is not Toxicity at all... yeah sure...
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={isTablet ? { marginTop: "40px" } : { marginTop: "100px" }}
          justify="center"
        >
          <Grid
            container
            item
            xs={12}
            md={12}
            lg={6}
            justify="flex-end"
            class="aboutFade fadeOut"
            style={isTablet ? { height: "200px" } : { width: "500px" }}
          >
            <Typography className={classes.about}>THE VOID GUILD</Typography>
            <Typography className={classes.aboutText}>
              I Also Raid with my alt during the weekends, as a Vengance Demon
              Hunter with some friends. This is more like a chill group, and we
              usually seek to clear the content with no rush.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={12}
            lg={6}
            justify="flex-end"
            class="aboutFadetwo fadeOut"
            style={isTablet ? { width: "500px" } : null}
          >
            <img
              style={isTablet ? { width: "300px" } : null}
              alt=""
              src={Void}
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
