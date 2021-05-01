import { Grid } from "@material-ui/core";
import "./Styles.css";
import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import affImage from "../Img/affimg2.jpg";
import demoImage from "../Img/demoimg.jpg";
import destroImage from "../Img/destroimg.jpg";
import affmobile from "../Img/affmobile.jpg";
import demomobile from "../Img/demomobile.jpg";
import destromobile from "../Img/destromobile.jpg";
import aff from "../Img/aff.jpg";
import demo from "../Img/demo.jpg";
import destro from "../Img/destro.jpg";
import logo2 from "../Img/warlocklogo.png";
import { Link } from "react-scroll";
import useHover from "./useHover";
import Video from "../Img/wallnew.mp4";
import VideoSmall from "../Img/wallnew2.mp4";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    animation: "fadeInBot ease 1.8s",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.8em",
    },

    [theme.breakpoints.up("lg")]: { fontSize: "2.1em" },

    [theme.breakpoints.up("xl")]: {},
  },

  onHoveraff: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    transition: "filter 0.3s ease-in-out",
    width: "300px",
    height: "120px",
    margin: "0px 20px 10px 20px",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      width: "230px",
      height: "290px",
      margin: "0px 20px",
      backgroundSize: "contain",
    },

    [theme.breakpoints.up("lg")]: {
      width: "280px",
      height: "370px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },

    [theme.breakpoints.up("xl")]: {
      width: "350px",
      height: "445px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },
  },

  affGrey: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    transition: "filter 0.3s ease-in-out",
    width: "300px",
    height: "120px",
    margin: "0px 20px 10px 20px",
    borderRadius: "7px",
    borderRadius: "7px",
    display: "flex",
    filter: "grayscale(100%)",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      width: "230px",
      height: "290px",
      margin: "0px 20px",
      backgroundSize: "contain",
    },

    [theme.breakpoints.up("lg")]: {
      width: "280px",
      height: "370px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },

    [theme.breakpoints.up("xl")]: {
      width: "350px",
      height: "445px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },
  },

  onHoverdemo: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    transition: "filter 0.3s ease-in-out",
    width: "300px",
    height: "120px",
    margin: "0px 20px 10px 20px",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      width: "230px",
      height: "290px",
      margin: "0px 20px",
      backgroundSize: "contain",
    },

    [theme.breakpoints.up("lg")]: {
      width: "280px",
      height: "370px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },

    [theme.breakpoints.up("xl")]: {
      width: "350px",
      height: "445px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },
  },

  demoGrey: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    transition: "filter 0.3s ease-in-out",
    width: "300px",
    height: "120px",
    margin: "0px 20px 10px 20px",
    borderRadius: "7px",
    borderRadius: "7px",
    display: "flex",
    filter: "grayscale(100%)",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      width: "230px",
      height: "290px",
      margin: "0px 20px",
      backgroundSize: "contain",
    },

    [theme.breakpoints.up("lg")]: {
      width: "280px",
      height: "370px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },

    [theme.breakpoints.up("xl")]: {
      width: "350px",
      height: "445px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },
  },

  onHoverdestro: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    transition: "filter 0.3s ease-in-out",
    width: "300px",
    height: "120px",
    margin: "0px 20px 10px 20px",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      width: "230px",
      height: "290px",
      margin: "0px 20px",
      backgroundSize: "contain",
    },

    [theme.breakpoints.up("lg")]: {
      width: "280px",
      height: "370px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },

    [theme.breakpoints.up("xl")]: {
      width: "350px",
      height: "445px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },
  },

  destroGrey: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.2)",
    borderColor: "white",
    transition: "filter 0.3s ease-in-out",
    width: "300px",
    height: "120px",
    margin: "0px 20px 10px 20px",
    borderRadius: "7px",
    borderRadius: "7px",
    display: "flex",
    filter: "grayscale(100%)",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      width: "230px",
      height: "290px",
      margin: "0px 20px",
      backgroundSize: "contain",
    },

    [theme.breakpoints.up("lg")]: {
      width: "280px",
      height: "370px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },

    [theme.breakpoints.up("xl")]: {
      width: "350px",
      height: "445px",
      margin: "0px 20px",
      backgroundSize: "cover",
    },
  },

  override: {
    filter: "grayscale(0%)",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  warlocklogo: {
    marginTop: "20px",
    width: "100px",
    height: "100px",
    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
      width: "120px",
      height: "120px",
    },

    [theme.breakpoints.up("lg")]: { margin: "0px" },

    [theme.breakpoints.up("xl")]: {
      width: "320px",
      height: "320px",
    },
  },

  specname: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    fontWeight: "600",
    color: "white",
    marginBottom: "20px",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.5em",
    },

    [theme.breakpoints.up("lg")]: { fontSize: "2em" },

    [theme.breakpoints.up("xl")]: {},
  },

  speclogo: {
    border: "solid",
    borderRadius: "40px",
    width: "40px",
    marginLeft: "inherit",

    [theme.breakpoints.up("md")]: {
      width: "50px",
      marginLeft: "0px",
    },

    [theme.breakpoints.up("lg")]: { width: "56px" },

    [theme.breakpoints.up("xl")]: {},
  },

  card: {
    alignItems: "flex-start",
    marginLeft: "10px",

    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      marginLeft: "0px",
    },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  cardspec: {
    marginTop: "30px",
    marginBottom: "30px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      marginBottom: "200px",
    },
  },

  specgrid: {
    overflow: "hidden",
    borderTopStyle: "solid",
    borderWidth: "3px",
    borderColor: "black",
    boxShadow: "inset 0 0 0 1px #504137",
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

  const isMobile = useMediaQuery({ query: "(max-width: 959px)" });
  const isBelow360 = useMediaQuery({ query: "(max-width: 360px)" });

  return (
    <Grid
      id="Specs"
      className={classes.specgrid}
      style={isBelow360 ? { height: "577px" } : null}
    >
      <video
        style={{ position: "absolute", zIndex: "-1", width: " 100%" }}
        autoPlay
        loop
        muted
      >
        <source src={isMobile ? VideoSmall : Video} type="video/mp4" />
      </video>
      <Grid
        class="fade fadeOut"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img alt="logo2" src={logo2} className={classes.warlocklogo}></img>
      </Grid>

      <Grid class="fade fadeOut">
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          Specializations,{" "}
          <span style={{ fontWeight: "400" }}>Choose your Guide</span>
        </Typography>
      </Grid>
      <Grid container justify="center" className={classes.cardspec}>
        <Link
          activeClass="active"
          to="affGuide"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1500}
        >
          <Grid class="fadeaff fadeOut" ref={affRef}>
            <Paper
              style={{
                backgroundImage: `url(${isMobile ? affmobile : affImage})`,
              }}
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
              <Grid container className={classes.override}>
                <Grid
                  container
                  item
                  xs={12}
                  alignItems="center"
                  justify="flex-end"
                  direction="column"
                  className={classes.card}
                >
                  <img src={aff} alt="aff" className={classes.speclogo} />
                  <Typography className={classes.specname}>
                    Affliction
                  </Typography>
                </Grid>{" "}
              </Grid>
            </Paper>
          </Grid>
        </Link>
        <Link
          activeClass="active"
          to="demoGuide"
          spy={true}
          smooth={true}
          offset={0}
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
              style={{
                backgroundImage: `url(${isMobile ? demomobile : demoImage})`,
              }}
            >
              <Grid container className={classes.override}>
                <Grid
                  container
                  item
                  xs={12}
                  alignItems="center"
                  justify="flex-end"
                  direction="column"
                  className={classes.card}
                >
                  {" "}
                  <img src={demo} alt="demo" className={classes.speclogo} />
                  <Typography className={classes.specname}>
                    Demonology
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Link>
        <Link
          activeClass="active"
          to="destroGuide"
          spy={true}
          smooth={true}
          offset={0}
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
              style={{
                backgroundImage: `url(${
                  isMobile ? destromobile : destroImage
                })`,
              }}
            >
              <Grid container className={classes.override}>
                <Grid
                  container
                  item
                  xs={12}
                  alignItems="center"
                  justify="flex-end"
                  direction="column"
                  className={classes.card}
                >
                  <img src={destro} alt="destro" className={classes.speclogo} />
                  <Typography className={classes.specname}>
                    Destruction
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Spec;
