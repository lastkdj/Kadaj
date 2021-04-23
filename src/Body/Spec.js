import { Grid } from "@material-ui/core";
import "./Styles.css";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useRef } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import affImage from "../Img/affimg2.jpg";
import demoImage from "../Img/demoimg.jpg";
import destroImage from "../Img/destroimg.jpg";
import aff from "../Img/aff.jpg";
import demo from "../Img/demo.jpg";
import destro from "../Img/destro.jpg";
import logo2 from "../Img/warlocklogo.png";
import { Link } from "react-scroll";
import useHover from "./useHover";
import Video from "../Img/wallnew.mp4";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
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
    width: "350px",
    height: "445px",
    margin: "0 20px",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",
  },

  affGrey: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${affImage})`,
    transition: "filter 0.3s ease-in-out",
    width: "350px",
    height: "445px",
    margin: "0 20px",
    borderRadius: "7px",
    display: "flex",
    filter: "grayscale(100%)",
    cursor: "pointer",
  },

  onHoverdemo: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${demoImage})`,
    transition: "filter 0.3s ease-in-out",
    width: "350px",
    height: "445px",
    margin: "0 20px",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",
  },

  demoGrey: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${demoImage})`,
    transition: "filter 0.3s ease-in-out",
    width: "350px",
    height: "445px",
    margin: "0 20px",
    borderRadius: "7px",
    display: "flex",
    filter: "grayscale(100%)",
    cursor: "pointer",
  },

  onHoverdestro: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${destroImage})`,
    transition: "filter 0.3s ease-in-out",
    width: "350px",
    height: "445px",
    margin: "0 20px",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",
  },

  destroGrey: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    backgroundImage: `url(${destroImage})`,
    transition: "filter 0.3s ease-in-out",
    width: "350px",
    height: "445px",
    margin: "0 20px",
    borderRadius: "7px",
    display: "flex",
    filter: "grayscale(100%)",
    cursor: "pointer",
  },

  override: {
    filter: "grayscale(0%)",
  },
}));

const Spec = () => {
  const classes = useStyles();
  const [affRef, affIsHovered] = useHover();
  const [demoRef, demoIsHovered] = useHover();
  const [destroRef, destroIsHovered] = useHover();

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
    <Grid
      id="Specs"
      style={{
        overflow: "hidden",
        borderTopStyle: "solid",
        borderWidth: "3px",
        borderColor: "#DADADA",
      }}
    >
      <video
        style={{ position: "absolute", zIndex: "-1", width: " 100%" }}
        autoPlay
        loop
        muted
      >
        <source src={Video} type="video/mp4" />
      </video>
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
          <span style={{ fontWeight: "400" }}>Choose your Guide</span>
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Link
          activeClass="active"
          to="Guides"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1500}
        >
          <Grid class="fadeaff fadeOut" ref={affRef}>
            <Paper
              className={
                affIsHovered
                  ? classes.onHoveraff
                  : demoIsHovered
                  ? classes.affGrey
                  : destroIsHovered
                  ? classes.affGrey
                  : classes.onHoveraff
              }
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
        </Link>
        <Link
          activeClass="active"
          to="Guides"
          spy={true}
          smooth={true}
          offset={750}
          duration={1500}
        >
          <Grid class="fadeDemo fadeOut" ref={demoRef}>
            <Paper
              className={
                demoIsHovered
                  ? classes.onHoverdemo
                  : affIsHovered
                  ? classes.demoGrey
                  : destroIsHovered
                  ? classes.demoGrey
                  : classes.onHoverdemo
              }
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
        </Link>
        <Link
          activeClass="active"
          to="Guides"
          spy={true}
          smooth={true}
          offset={1650}
          duration={1500}
        >
          <Grid ref={destroRef} class="fadeDestro fadeOut">
            <Paper
              className={
                destroIsHovered
                  ? classes.onHoverdestro
                  : affIsHovered
                  ? classes.destroGrey
                  : demoIsHovered
                  ? classes.destroGrey
                  : classes.onHoverdestro
              }
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
        </Link>
      </Grid>
    </Grid>
  );
};

export default Spec;
