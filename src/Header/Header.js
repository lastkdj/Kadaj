import React from "react";
import "../Body/Styles.css";
import { useEffect, useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles/Header";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

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

  return (
    <Grid container className={scrolled ? classes.sticky : classes.background}>
      <Grid container item xs={12} style={{ margin: "0px 450px" }}>
        <Grid container item xs={3} className={classes.menulist}>
          <Grid container item xs={2}>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <Typography
                className={classes.navbarLogo}
                style={{ color: scrolled ? "#2e2e2e" : "white" }}
              >
                KADAJ
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid container item xs={9} style={{ justifyContent: "flex-end" }}>
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
              <Typography
                className={
                  scrolled ? classes.headerfontSticky : classes.headerfont
                }
              >
                Guides
              </Typography>
            </li>
            <li className={classes.li}>
              <Typography
                className={
                  scrolled ? classes.headerfontSticky : classes.headerfont
                }
              >
                Other
              </Typography>
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
          <Grid item>
            <Button
              stlye={{ margin: "0px 20px" }}
              variant="contained"
              color="primary"
              onClick={onClick}
              style={{
                backgroundColor: "#CF0404",
                borderRadius: "9px",
                "&:hover": {
                  backgroundColor: "#6461B9",
                },
              }}
            >
              Youtube
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
