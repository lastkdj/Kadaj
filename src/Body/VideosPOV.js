import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import cn from "../Img/wowback.jpg";
import cnraid from "../Img/cn.jpg";
import Shriekwing from "../Img/cn/Castle Nathria Mythic Shriekwing.jpg";
import Huntsman from "../Img/cn/Castle Nathria Mythic Huntsman Altimor.jpg";
import Hungering from "../Img/cn/Castle Nathria Mythic Hungering Destroyer.jpg";
import Lady from "../Img/cn/Castle Nathria Mythic Lady Inerva Darkvein.jpg";
import Xymox from "../Img/cn/Castle Nathria Mythic Artificer Xymox.jpg";
import Sunsking from "../Img/cn/Castle Nathria Mythic Sun Kings salvation.jpg";
import Council from "../Img/cn/Castle Nathria Mythic The Council of Blood.jpg";
import Sludgefist from "../Img/cn/Castle Nathria Mythic Sludgefist.jpg";
import Generals from "../Img/cn/Castle Nathria Mythic Stone Legion Generals.jpg";
import Denathrius from "../Img/cn/Castle Nathria Mythic Denathrius.jpg";
import "./cnStyles.css";
import { useMediaQuery } from "react-responsive";
import BossesSheets from "./BossesSheets";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    animation: "fadeInBot ease 1.8s",
    marginTop: "50px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      fontSize: "2.1em",
      marginTop: "70px",
    },

    [theme.breakpoints.up("xl")]: {},
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
    backgroundImage: `url(${cn})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderTopStyle: "solid",
    borderWidth: "1px",
    marginTop: "3px",
    boxShadow: "inset 0 0 0 1px #504137",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${cnraid})`,
      height: "600px",
    },

    [theme.breakpoints.up("xl")]: {
      height: "900px",
    },
  },

  iframe: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "rgb(254, 179, 0)",
    width: "560px",
    height: "330px",
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
}));

const VideosPOV = () => {
  const [url, setUrl] = useState("https://www.youtube.com/embed/bgSebA5bTNs");

  const classes = useStyles();

  const onClickShriekwing = () => {
    setUrl("https://www.youtube.com/embed/wxnBOpmZAY4");
  };

  const onClickHuntsman = () => {
    setUrl("https://www.youtube.com/embed/2FK1yQLDAK8");
  };
  const onClickHungering = () => {
    setUrl("https://www.youtube.com/embed/XxVvCAQs-vA");
  };
  const onClickLady = () => {
    setUrl("https://www.youtube.com/embed/5gufn0coduk");
  };
  const onClickXymox = () => {
    setUrl("https://www.youtube.com/embed/PehuXJ4YE_o");
  };
  const onClickSunsking = () => {
    setUrl("https://www.youtube.com/embed/JJhB4T04Gws");
  };
  const onClickCouncil = () => {
    setUrl("https://www.youtube.com/embed/dhCUYr2jev8");
  };
  const onClickSludgefist = () => {
    setUrl("https://www.youtube.com/embed/gEcTGjLPcpo");
  };
  const onClickGenerals = () => {
    setUrl("https://www.youtube.com/embed/Kfvn-bR1I8k");
  };
  const onClickDenathrius = () => {
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
    <Grid
      container
      item
      xs={12}
      className={classes.nathriagrid}
      justify="center"
      id="raid"
    >
      <Grid item xs={12} sm={12} md={12} lg={12} class="fade fadeOut">
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          <span style={{ color: "rgb(254, 179, 0)" }}>Mythic</span> Castle
          Nathria, <span style={{ fontWeight: "400" }}>Warlock POV</span>
        </Typography>
      </Grid>

      {!isMobile ? (
        <Grid container item xs={12} className={classes.videoplayer}>
          <Grid container item xs={6} class="cnPlayer fadeOut">
            {" "}
            <iframe
              src={url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={classes.iframe}
            ></iframe>
          </Grid>

          <Grid
            container
            item
            xs={6}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.thumbnailframe}
          >
            <Grid class="cnFade1 fadeOut">
              <img
                onClick={onClickShriekwing}
                className={classes.borderThumbnail}
                alt=""
                src={Shriekwing}
              />
            </Grid>
            <Grid class="cnFade2 fadeOut">
              <img
                onClick={onClickHuntsman}
                className={classes.borderThumbnail}
                alt=""
                src={Huntsman}
              />
            </Grid>
            <Grid class="cnFade3 fadeOut">
              <img
                onClick={onClickHungering}
                className={classes.borderThumbnail}
                alt=""
                src={Hungering}
              />
            </Grid>
            <Grid class="cnFade4 fadeOut">
              <img
                onClick={onClickLady}
                className={classes.borderThumbnail}
                alt=""
                src={Lady}
              />
            </Grid>
            <Grid class="cnFade5 fadeOut">
              <img
                onClick={onClickXymox}
                className={classes.borderThumbnail}
                alt=""
                src={Xymox}
              />
            </Grid>
            <Grid class="cnFade6 fadeOut">
              <img
                onClick={onClickSunsking}
                className={classes.borderThumbnail}
                alt=""
                src={Sunsking}
              />{" "}
            </Grid>
            <Grid class="cnFade7 fadeOut">
              <img
                onClick={onClickCouncil}
                className={classes.borderThumbnail}
                alt=""
                src={Council}
              />
            </Grid>
            <Grid class="cnFade8 fadeOut">
              <img
                onClick={onClickSludgefist}
                className={classes.borderThumbnail}
                alt=""
                src={Sludgefist}
                style={{}}
              />
            </Grid>
            <Grid class="cnFade9 fadeOut">
              <img
                onClick={onClickGenerals}
                className={classes.borderThumbnail}
                alt=""
                src={Generals}
              />
            </Grid>
            <Grid class="cnFade10 fadeOut">
              <img
                onClick={onClickDenathrius}
                className={classes.borderThumbnail}
                alt=""
                src={Denathrius}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container item xs={12} sm={5} md={5} style={{ padding: "10px" }}>
          {BossesSheets.map((b) => (
            <Grid
              class="cnFade1 fadeOut"
              item
              xs={12}
              style={{
                backgroundImage: `url(${b})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "70px",
                boxShadow: "inset 0 0 0 1px #504137",
                marginBottom: "2px",
              }}
            ></Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default VideosPOV;
