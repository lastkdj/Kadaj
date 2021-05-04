import React from "react";
import "../Body/Styles.css";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles/Header";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import SimpleMenu from "./Menu";
import aff from "../Img/aff.jpg";
import demo from "../Img/demo.jpg";
import destro from "../Img/destro.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();

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

  const onClick = () => {
    window.open("https://www.youtube.com/user/darkkadaj11");
  };

  const isMobile = useMediaQuery({ query: "(max-width: 959px)" });

  return (
    <Grid container className={scrolled ? classes.sticky : classes.background}>
      <Grid className={classes.header} container item xs={12}>
        {!isMobile ? (
          <Grid container item xs={3} className={classes.menulist}>
            <Grid container item xs={6}>
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                <Typography className={classes.navbarLogo}>KADAJ</Typography>
              </Link>
            </Grid>
          </Grid>
        ) : null}
        <Grid
          container
          item
          xs={12}
          md={9}
          style={!isMobile ? { justifyContent: "flex-end" } : null}
        >
          {isMobile ? (
            scrolled ? (
              <Grid container item xs={10}>
                <Link
                  activeClass="active"
                  to="affGuide"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1500}
                >
                  <Grid item>
                    {" "}
                    <img src={aff} alt="aff" className={classes.speclogo} />
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
                  <Grid item>
                    {" "}
                    <img src={demo} alt="aff" className={classes.speclogo} />
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
                  <Grid item>
                    {" "}
                    <img src={destro} alt="aff" className={classes.speclogo} />
                  </Grid>
                </Link>
              </Grid>
            ) : null
          ) : null}
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link
                activeClass="active"
                to="Specs"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1000}
              >
                <Typography
                  className={
                    scrolled ? classes.headerfontSticky : classes.headerfont
                  }
                >
                  Specs
                </Typography>
              </Link>
            </li>
            <li className={classes.li}>
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1000}
              >
                <Typography
                  className={
                    scrolled ? classes.headerfontSticky : classes.headerfont
                  }
                >
                  About
                </Typography>
              </Link>
            </li>
            <li className={classes.li}>
              <Link
                activeClass="active"
                to="raid"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                <Typography
                  className={
                    scrolled ? classes.headerfontSticky : classes.headerfont
                  }
                >
                  Raid
                </Typography>
              </Link>
            </li>
            <li className={classes.li}>
              <Link
                activeClass="active"
                to="Guides"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                <Typography
                  className={
                    scrolled ? classes.headerfontSticky : classes.headerfont
                  }
                >
                  Guides
                </Typography>
              </Link>
            </li>
            <li className={classes.li}>
              <Link
                activeClass="active"
                to="Addons"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                <Typography
                  className={
                    scrolled ? classes.headerfontSticky : classes.headerfont
                  }
                >
                  Addons
                </Typography>{" "}
              </Link>
            </li>
            <li className={classes.li}>
              <Typography
                className={
                  scrolled ? classes.headerfontSticky : classes.headerfont
                }
              >
                Info
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
