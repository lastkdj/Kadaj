import React from "react";
import Particles from "./Particles";
import { makeStyles, Grid } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import twitch from "./Socials/twitch.svg";
import youtube from "./Socials/youtube.svg";
import fb from "./Socials/fb.svg";
import Avatar from "@material-ui/core/Avatar";
import asset from "../Img/wowback.jpg";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "60vh",
    boxShadow: "inset 0 0 0 1px #504137",
    paddingBottom: "20px",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },

    [theme.breakpoints.up("xl")]: {
      height: "106vh",
    },
  },

  small: {
    width: "15px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { width: "30px" },

    [theme.breakpoints.up("xl")]: {},
  },
  large: {
    backgroundColor: "white",
    boxShadow: "inset 10px 10px 28px -16px rgba(0,0,0,0.75)",
    margin: "0px 5px",
    width: theme.spacing(3),
    height: theme.spacing(3),

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      margin: "0px 10px",
      width: theme.spacing(6),
      height: theme.spacing(6),
    },

    [theme.breakpoints.up("xl")]: {},
  },

  fb: {
    width: "9px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { width: "18px" },

    [theme.breakpoints.up("xl")]: {},
  },
}));

const Banner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 960px)" });

  const classes = useStyles();
  return (
    <Grid container alignItems="flex-end" className={classes.banner}>
      <Particles isMobile={isMobile} />
      <Grid xs={12} container justify="center">
        <Avatar sizes="large" className={classes.large}>
          {" "}
          <img src={twitch} alt="" className={classes.small} />
        </Avatar>
        <Avatar className={classes.large}>
          {" "}
          <img src={youtube} alt="" className={classes.small} />
        </Avatar>
        <Avatar className={classes.large}>
          {" "}
          <img src={fb} alt="" className={classes.fb} />
        </Avatar>
      </Grid>
    </Grid>
  );
};

export default Banner;
