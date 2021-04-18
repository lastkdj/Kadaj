import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import cn from "../Img/cn.jpg";
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

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
    animation: "fadeInBot ease 1.8s",
    marginTop: "70px",
  },

  borderThumbnail: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "rgb(254, 179, 0)",
    margin: "0 10px 0 10px",
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

  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });

  return (
    <Grid
      container
      item
      xs={12}
      style={{
        height: "90vh",
        backgroundImage: `url(${cn})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      justify="center"
      id="raid"
    >
      <Grid item xs={12} class="fade fadeOut">
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          <span style={{ color: "rgb(254, 179, 0)" }}>Mythic</span> Castle
          Nathria, <span style={{ fontWeight: "400" }}>Warlock POV</span>
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        {!isMobile ? (
          <Grid
            container
            item
            xs={6}
            style={{ paddingLeft: "80px" }}
            class="cnPlayer fadeOut"
          >
            {" "}
            <iframe
              style={{
                borderRadius: "6px",
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: "rgb(254, 179, 0)",
              }}
              width="760"
              height="430"
              src={url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        ) : null}

        <Grid
          container
          item
          xs={6}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ paddingRight: "10px", paddingBottom: "90px" }}
        >
          <Grid class="cnFade1 fadeOut">
            <img
              onClick={onClickShriekwing}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Shriekwing}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade2 fadeOut">
            <img
              onClick={onClickHuntsman}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Huntsman}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade3 fadeOut">
            <img
              onClick={onClickHungering}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Hungering}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade4 fadeOut">
            <img
              onClick={onClickLady}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Lady}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade5 fadeOut">
            <img
              onClick={onClickXymox}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Xymox}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade6 fadeOut">
            <img
              onClick={onClickSunsking}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Sunsking}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />{" "}
          </Grid>
          <Grid class="cnFade7 fadeOut">
            <img
              onClick={onClickCouncil}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Council}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade8 fadeOut">
            <img
              onClick={onClickSludgefist}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Sludgefist}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade9 fadeOut">
            <img
              onClick={onClickGenerals}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Generals}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
          <Grid class="cnFade10 fadeOut">
            <img
              onClick={onClickDenathrius}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Denathrius}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideosPOV;
