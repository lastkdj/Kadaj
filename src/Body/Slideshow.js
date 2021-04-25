import React from "react";
import { Slide } from "react-slideshow-image";
import { makeStyles } from "@material-ui/core";
import Image1 from "../Img/image1.jpg";

const useStyles = makeStyles(() => ({
  eachSlide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "350px",
  },

  eachSlideSpan: {
    padding: "20px",
    fontSize: "20px",
    background: "#efefef",
    textAlign: "center",
  },
}));

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  const classes = useStyles();
  return (
    <Slide {...properties}>
      <div className={classes.eachSlide}>
        <div style={{ backgroundImage: `url(${Image1})` }}>
          <span className={classes.eachSlideSpan}>Slide 1</span>
        </div>
      </div>
      <div className={classes.eachSlide}>
        <div style={{ backgroundImage: `url(${Image1})` }}>
          <span className={classes.eachSlideSpan}>Slide 2</span>
        </div>
      </div>
      <div className={classes.eachSlide}>
        <div style={{ backgroundImage: `url(${Image1})` }}>
          <span className={classes.eachSlideSpan}>Slide 3</span>
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
