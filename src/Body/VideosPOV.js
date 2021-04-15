import React from "react";
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
  const [url, setUrl] = React.useState(
    "https://www.youtube.com/embed/bgSebA5bTNs"
  );

  const classes = useStyles();

  const onClickFirst = () => {
    setUrl("https://www.youtube.com/embed/wxnBOpmZAY4");
  };

  const onClickSecond = () => {
    setUrl("https://www.youtube.com/embed/2FK1yQLDAK8");
  };

  return (
    <Grid
      container
      xs={12}
      style={{
        height: "90vh",
        backgroundColor: "rgb(14, 24, 34)",
        backgroundImage: `url(${cn})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      justify="center"
    >
      <Grid item xs={!2}>
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          Castle Nathria, <span style={{ fontWeight: "400" }}>Warlock POV</span>
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={6} style={{ paddingLeft: "80px" }}>
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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>

        <Grid container item xs={6} item>
          <Grid item container>
            <img
              onClick={onClickFirst}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Shriekwing}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
            <img
              onClick={onClickSecond}
              className={classes.borderThumbnail}
              alt="tumb"
              src={Huntsman}
              style={{ width: "210px", height: "118px", cursor: "pointer" }}
            />
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Hungering}
              style={{ width: "210px", height: "118px" }}
            />
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Lady}
              style={{ width: "210px", height: "118px" }}
            />
          </Grid>
          <Grid item container>
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Xymox}
              style={{ width: "210px", height: "118px" }}
            />
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Sunsking}
              style={{ width: "210px", height: "118px" }}
            />{" "}
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Council}
              style={{ width: "210px", height: "118px" }}
            />
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Sludgefist}
              style={{ width: "210px", height: "118px" }}
            />
          </Grid>

          <Grid item container>
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Generals}
              style={{ width: "210px", height: "118px" }}
            />
            <img
              className={classes.borderThumbnail}
              alt="tumb"
              src={Denathrius}
              style={{ width: "210px", height: "118px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideosPOV;
