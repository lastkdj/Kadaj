import { Grid } from "@material-ui/core";
import "./Styles.css";
import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import affImage from "../Img/affimg2.jpg";
import demoImage from "../Img/demoimg.jpg";
import destroImage from "../Img/destroimg.jpg";
import aff from "../Img/aff.jpg";
import demo from "../Img/demo.jpg";
import destro from "../Img/destro.jpg";
import logo2 from "../Img/classlogo.png";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "#2e2e2e",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
    animation: "fadeInBot ease 1.8s",
  },

  onHoveraff: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${affImage})`,
    transition: "filter 0.3s ease-in-out",
    filter: "grayscale(100%)",
    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0%)",
    },
  },

  onHoverdemo: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${demoImage})`,

    transition: "filter 0.3s ease-in-out",
    filter: "grayscale(100%)",
    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0%)",
    },
  },

  onHoverdestro: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${destroImage})`,
    transition: "filter 0.3s ease-in-out",
    filter: "grayscale(100%)",
    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0%)",
    },
  },

  override: {
    filter: "grayscale(0%)",
  },
}));

const Spec = () => {
  const classes = useStyles();

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

    const fadeElms = document.querySelectorAll(".fade");
    const fadeAff = document.querySelectorAll(".fadeaff");
    const fadeDemo = document.querySelectorAll(".fadeDemo");
    const fadeDestro = document.querySelectorAll(".fadeDestro");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
    fadeAff.forEach((el) => observer.observe(el));
    fadeDemo.forEach((el) => observer.observe(el));
    fadeDestro.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid id="Specs">
      <Grid
        class="fade fadeOut"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img alt="logo2" src={logo2}></img>
      </Grid>

      <Grid class="fade fadeOut">
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          Specializations,{" "}
          <span style={{ fontWeight: "400" }}>Choose your destiny</span>
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Grid class="fadeaff fadeOut">
          <Paper
            style={{
              width: "350px",
              height: "445px",
              margin: "0 20px",
              borderRadius: "7px",
              display: "flex",
            }}
            className={classes.onHoveraff}
          >
            <Grid
              container
              justify="flex-start"
              direction="column-reverse"
              alignItems="center"
              className={classes.override}
            >
              <Typography
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "2em",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Affliction
              </Typography>
              <img
                src={aff}
                alt="aff"
                style={{ border: "solid", borderRadius: "40px" }}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid class="fadeDemo fadeOut">
          <Paper
            style={{
              width: "350px",
              height: "445px",
              margin: "0 20px",
              borderRadius: "7px",
              display: "flex",
            }}
            className={classes.onHoverdemo}
          >
            <Grid
              container
              justify="flex-start"
              direction="column-reverse"
              alignItems="center"
            >
              <Typography
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "2em",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Demonology
              </Typography>
              <img
                src={demo}
                alt="demo"
                style={{ border: "solid", borderRadius: "40px" }}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid class="fadeDestro fadeOut">
          <Paper
            style={{
              width: "350px",
              height: "445px",
              margin: "0 20px",
              borderRadius: "7px",
              display: "flex",
            }}
            className={classes.onHoverdestro}
          >
            <Grid
              container
              justify="flex-start"
              direction="column-reverse"
              alignItems="center"
            >
              <Typography
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "2em",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Destruction
              </Typography>
              <img
                src={destro}
                alt="destro"
                style={{ border: "solid", borderRadius: "40px" }}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Spec;
