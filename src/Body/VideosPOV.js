import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import cnraid from "../Img/cn/denathriuswall.jpg";
import Shriekwing from "../Img/cn/shriekwingphone.jpg";
import Huntsman from "../Img/cn/huntsman2.jpg";
import Hungering from "../Img/cn/hungering.jpg";
import Lady from "../Img/cn/lady.jpg";
import Xymox from "../Img/cn/xymox.jpg";
import Sunsking from "../Img/cn/sunsking.jpg";
import Council from "../Img/cn/council.jpg";
import Sludgefist from "../Img/cn/sludgefist.jpg";
import Generals from "../Img/cn/stonegenerals.jpg";
import Denathrius from "../Img/cn/denathrius.jpg";
import "./cnStyles.css";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.1em",
    animation: "fadeInBot ease 1.8s",
    marginTop: "50px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { fontSize: "1.5em" },

    [theme.breakpoints.up("xl")]: { marginTop: "70px", fontSize: "2.1em" },
  },

  borderThumbnail: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "rgb(254, 179, 0)",
    margin: "0 10px 0 10px",
    width: "210px",
    height: "118px",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: "130px",
      height: "70px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "210px",
      height: "118px",
    },
  },

  nathriagrid: {
    overflow: "hidden",
    height: "900px",
    backgroundImage: `url(${cnraid})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderTopStyle: "solid",
    borderWidth: "1px",
    marginTop: "3px",
    boxShadow: "inset 0 0 0 1px #504137",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${cnraid})`,
      backgroundPosition: "right",
    },

    [theme.breakpoints.up("xl")]: {
      height: "900px",
    },
  },

  iframe: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#504137",
    width: "560px",
    height: "330px",
    justifySelf: "center",
    boxShadow: "10px -8px 73px 27px rgba(0,0,0,0.92)",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      width: "760px",
      height: "430px",
    },
  },

  thumbnailframe: {
    overflow: "hidden",
    paddingBottom: "50px",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      paddingRight: "10px",
      paddingBottom: "90px",
      overflow: "hidden",
    },
  },

  videoplayer: {
    padding: "30px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      padding: "0px",
    },
  },

  bossesgrid: {
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70px",
    boxShadow: "inset 0 0 0 1px #504137",
    marginBottom: "2px",
  },

  BossesSheets: {
    padding: "10px 10px 10px 10px",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      padding: "10px 10px 30px 30px",
    },

    [theme.breakpoints.up("xl")]: {},
  },

  cnVideos: {
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },
}));

const VideosPOV = () => {
  const [url, setUrl] = useState("https://www.youtube.com/embed/bgSebA5bTNs");

  const classes = useStyles();

  const onClickShriekwing = () => {
    if (isMobile) {
      window.open(
        "https://www.youtube.com/watch?v=wxnBOpmZAY4&ab_channel=Kadaj"
      );
    }
    setUrl("https://www.youtube.com/embed/wxnBOpmZAY4");
  };

  const onClickHuntsman = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/2FK1yQLDAK8?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }
    setUrl("https://www.youtube.com/embed/2FK1yQLDAK8");
  };
  const onClickHungering = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/XxVvCAQs-vA?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }
    setUrl("https://www.youtube.com/embed/XxVvCAQs-vA");
  };
  const onClickLady = () => {
    if (isMobile) {
      window.open(
        " https://youtu.be/5gufn0coduk?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }

    setUrl("https://www.youtube.com/embed/5gufn0coduk");
  };
  const onClickXymox = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/PehuXJ4YE_o?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }

    setUrl("https://www.youtube.com/embed/PehuXJ4YE_o");
  };
  const onClickSunsking = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/JJhB4T04Gws?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }

    setUrl("https://www.youtube.com/embed/JJhB4T04Gws");
  };
  const onClickCouncil = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/dhCUYr2jev8?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }

    setUrl("https://www.youtube.com/embed/dhCUYr2jev8");
  };
  const onClickSludgefist = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/gEcTGjLPcpo?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }

    setUrl("https://www.youtube.com/embed/gEcTGjLPcpo");
  };
  const onClickGenerals = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/Kfvn-bR1I8k?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }
    setUrl("https://www.youtube.com/embed/Kfvn-bR1I8k");
  };
  const onClickDenathrius = () => {
    if (isMobile) {
      window.open(
        "https://youtu.be/bgSebA5bTNs?list=PLvUajLfjohzU4Q5ENngN7Rmkjt6QMKMGH"
      );
    }
    setUrl("https://www.youtube.com/embed/bgSebA5bTNs");
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.4,
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

    const fadeElms1 = document.querySelectorAll(".cnFade1");
    const fadeElms2 = document.querySelectorAll(".cnFade2");
    const fadeElms3 = document.querySelectorAll(".cnFade3");
    const fadeElms4 = document.querySelectorAll(".cnFade4");
    const fadeElms5 = document.querySelectorAll(".cnFade5");
    const fadeElms6 = document.querySelectorAll(".cnFade6");
    const fadeElms7 = document.querySelectorAll(".cnFade7");
    const fadeElms8 = document.querySelectorAll(".cnFade8");
    const fadeElms9 = document.querySelectorAll(".cnFade9");
    const fadeElms10 = document.querySelectorAll(".cnFade10");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms1.forEach((el) => observer.observe(el));
    fadeElms2.forEach((el) => observer.observe(el));
    fadeElms3.forEach((el) => observer.observe(el));
    fadeElms4.forEach((el) => observer.observe(el));
    fadeElms5.forEach((el) => observer.observe(el));
    fadeElms6.forEach((el) => observer.observe(el));
    fadeElms7.forEach((el) => observer.observe(el));
    fadeElms8.forEach((el) => observer.observe(el));
    fadeElms9.forEach((el) => observer.observe(el));
    fadeElms10.forEach((el) => observer.observe(el));
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
          entry.target.classList.replace("fadeOut", "fadeInLeft");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".cnPlayer");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <Grid container item xs={12} className={classes.nathriagrid} id="raid">
      <Grid item xs={12} sm={12} md={12} lg={12} class="fade fadeOut">
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          <span style={{ color: "rgb(254, 179, 0)" }}>Mythic</span> Castle
          Nathria, <span style={{ fontWeight: "400" }}>Warlock POV</span>
        </Typography>
      </Grid>
      <Grid container className={classes.cnVideos}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className={classes.BossesSheets}
        >
          <Grid
            onClick={onClickShriekwing}
            class="cnFade1 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Shriekwing})` }}
          ></Grid>
          <Grid
            onClick={onClickHuntsman}
            class="cnFade2 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Huntsman})` }}
          ></Grid>
          <Grid
            onClick={onClickHungering}
            class="cnFade3 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Hungering})` }}
          ></Grid>
          <Grid
            onClick={onClickLady}
            class="cnFade4 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Lady})` }}
          ></Grid>
          <Grid
            onClick={onClickXymox}
            class="cnFade5 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Xymox})` }}
          ></Grid>
          <Grid
            onClick={onClickSunsking}
            class="cnFade6 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Sunsking})` }}
          ></Grid>
          <Grid
            onClick={onClickCouncil}
            class="cnFade7 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Council})` }}
          ></Grid>
          <Grid
            onClick={onClickSludgefist}
            class="cnFade8 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Sludgefist})` }}
          ></Grid>
          <Grid
            onClick={onClickGenerals}
            class="cnFade9 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Generals})` }}
          ></Grid>
          <Grid
            onClick={onClickDenathrius}
            class="cnFade10 fadeOut"
            item
            xs={12}
            style={{ backgroundImage: `url(${Denathrius})` }}
          ></Grid>
        </Grid>
        {!isMobile ? (
          <Grid
            container
            direction="column"
            item
            xs={7}
            class="cnPlayer fadeOut"
          >
            <iframe
              src={url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={classes.iframe}
            ></iframe>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default VideosPOV;
