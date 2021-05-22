import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./Styles.css";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
  },

  arrow: {
    color: "white",
  },
}));

const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 76;

      if (isTop === false) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    const proxyEmpty = () => {};
    return () => {
      window.removeEventListener("scroll", proxyEmpty);
    };
  }, []);

  const classes = useStyles();
  return (
    <Grid>
      {scrolled ? (
        <Grid class="fadeInBotDiv">
          <Grid className={classes.button}>
            <ExpandLessIcon className={classes.arrow} />
          </Grid>
        </Grid>
      ) : null}{" "}
    </Grid>
  );
};

export default ScrollToTop;
