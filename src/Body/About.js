import React, { useEffect } from "react";
import "./Styles.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Asset1 from "../Img/shape1light.jpg";

const useStyles = makeStyles((theme) => ({
  asset1: {
    backgroundImage: `url(${Asset1})`,
    filter: "opacity (80%)",
    height: "70vh",
    paddingTop: "70px",
  },

  about: {
    fontWeight: 700,
    color: "#2e2e2e",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
    animation: "fadeInBot ease 1.8s",
  },

  aboutText: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    color: "#6a6972",
    margin: 0,
    textAlign: "justify",
  },
}));

const About = () => {
  const ref = React.useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeIn");
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

  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.asset1}>
      <Grid container item xs={12} justify="flex-end" class="aboutFade fadeOut">
        <Grid item xs={6} style={{ paddingRight: "20px" }}>
          <Grid item xs={7}>
            <Typography className={classes.about}>ABOUT ME</Typography>
            <Typography className={classes.aboutText}>
              Hello friends! My name is Ricardo, I'm a warlock, Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Grid>
  );
};

export default About;
