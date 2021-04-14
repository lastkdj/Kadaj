import React, { useEffect } from "react";
import "./Styles.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Asset1 from "../Img/oribosback4.jpg";
import about from "../Img/kadaj.png";
import Awareness from "../Img/Awareness.png";
import Void from "../Img/Voidsmall.png";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${Asset1})`,
    height: "208vh",
    marginTop: "90px",
  },

  about: {
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
    animation: "fadeInBot ease 1.8s",
    textShadow: "2px 2px #000000",
  },

  aboutText: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    color: "white",
    margin: 0,
    textAlign: "justify",
    textShadow: "2px 2px #000000",
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

  const classes = useStyles();
  return (
    <Grid container className={classes.asset1} id="About">
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
        <Grid container item xs={6} class="aboutFade fadeOut">
          <Typography className={classes.about} style={{ marginTop: "200px" }}>
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
        <Grid container item xs={6} class="aboutFadetwo fadeOut">
          <img alt="about" src={about} style={{ width: "400px" }}></img>
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{ marginTop: "130px" }}
          justify="center"
        >
          <Grid
            container
            item
            xs={6}
            justify="flex-end"
            class="aboutFade fadeOut"
            style={{}}
          >
            <img alt="about" src={Awareness}></img>
          </Grid>

          <Grid
            container
            item
            xs={6}
            justify="flex-end"
            class="aboutFadetwo fadeOut"
            style={{ width: "500px", paddingTop: "200px" }}
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
          style={{ marginTop: "10px" }}
          justify="center"
        >
          <Grid
            container
            item
            xs={6}
            justify="flex-end"
            class="aboutFade fadeOut"
            style={{ width: "500px" }}
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
            xs={6}
            justify="flex-end"
            class="aboutFadetwo fadeOut"
          >
            <img alt="about" src={Void}></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;