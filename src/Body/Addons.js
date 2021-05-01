import React, { useEffect } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import bolvar from "../Img/nazmir.jpg";
import UI from "../Img/ui.png";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import "./AddonsStyles.css";
import Tooltip from "@material-ui/core/Tooltip";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.1em",
    animation: "fadeInBot ease 1.8s",
    marginTop: "50px",
    marginBottom: "50px",
    textAlign: "center",
    marginTop: "20px",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { fontSize: "1.5em" },

    [theme.breakpoints.up("xl")]: { marginTop: "70px", fontSize: "2.1em" },
  },

  borderThumbnail: {
    backgroundPosition: "center",
    backgroundImage: `url(${bolvar})`,
    backgroundSize: "cover",
    borderTopStyle: "solid",
    borderTopColor: "rgb(28, 28, 28)",
    textShadow: "1px 2px #00000040",
    boxShadow: "inset 0 0 0 1px #504137",
    backgroundColor: "teal",
    padding: "10px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.1em",
    textAlign: "center",
    margin: "20px 0px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },
  subtittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      fontSize: "1.2em",
    },
  },

  subtittletwo: {
    fontWeight: 500,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
  },

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9em",
    textAlign: "justify",
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#B97AF4",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "fit-content",
  },

  rootString: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "fit-content",
    padding: "10px",
    backgroundColor: "rgb(28,28,28)",
  },

  borderui: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "white",

    cursor: "pointer",
  },

  li: {
    listStyle: "none",
  },

  addonitems: {
    flexDirection: "cloumn",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },

    [theme.breakpoints.up("xl")]: {},
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

const banish = "#showtooltip Banish/use [mod:shift,@focus] [] Banish";

const Addons = () => {
  const [open, setOpen] = React.useState(false);
  const [tooltip, setTooltip] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const classes = useStyles();

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInLeftFast");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElmswa = document.querySelectorAll(".wa");
    const fadeElmsaddons = document.querySelectorAll(".addons");
    const fadeElmsinterface = document.querySelectorAll(".interface");
    const fadeElmsmacros = document.querySelectorAll(".macros");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElmswa.forEach((el) => observer.observe(el));
    fadeElmsaddons.forEach((el) => observer.observe(el));
    fadeElmsinterface.forEach((el) => observer.observe(el));
    fadeElmsmacros.forEach((el) => observer.observe(el));
  }, []);

  const myBanish = () => {
    /* Get the text field */

    /* Select the text field */
    var copyText = document.getElementById("myInputBanish");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand("copy");
    setTooltip(true);

    setTimeout(function () {
      setTooltip(false);
    }, 1000);
    /* Alert the copied text */
  };

  const mySoulstone = () => {
    /* Get the text field */

    /* Select the text field */
    var copyText = document.getElementById("myInputSoulstone");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand("copy");
    setTooltip(true);

    setTimeout(function () {
      setTooltip(false);
    }, 1000);
    /* Alert the copied text */
  };

  const myDot = () => {
    /* Get the text field */

    /* Select the text field */
    var copyText = document.getElementById("myInputDot");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand("copy");
    setTooltip(true);

    setTimeout(function () {
      setTooltip(false);
    }, 1000);
    /* Alert the copied text */
  };

  const myCircle = () => {
    /* Get the text field */

    /* Select the text field */
    var copyText = document.getElementById("myInputCircle");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand("copy");
    setTooltip(true);

    setTimeout(function () {
      setTooltip(false);
    }, 1000);
    /* Alert the copied text */
  };

  const myInterrupt = () => {
    /* Get the text field */

    /* Select the text field */
    var copyText = document.getElementById("myInputInterrupt");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand("copy");
    setTooltip(true);

    setTimeout(function () {
      setTooltip(false);
    }, 1000);
    /* Alert the copied text */
  };

  return (
    <Grid container className={classes.borderThumbnail} id="Addons">
      {" "}
      <Grid item xs={12}>
        <Typography className={classes.spec}>Addons - UI</Typography>
      </Grid>
      <Grid item container xs={12} className={classes.addonitems}>
        <Grid
          item
          xs={12}
          lg={3}
          style={{ padding: "10px" }}
          class="wa fadeOut"
        >
          <Typography className={classes.tittle}> Addons</Typography>

          <ul>
            <a
              href="https://docs.google.com/document/d/1eo349uS-_HAA78AQDPl2TrNpvhEzVXp9GGcy52CDAn8/edit?usp=sharing"
              style={{ textDecoration: "none" }}
            >
              <li className={classes.li}>
                <Typography className={classes.subtittle}>Elvui</Typography>
              </li>
            </a>
            <li className={classes.li}>
              <Typography className={classes.subtittle}>WeakAuras</Typography>
            </li>
            <li className={classes.li}>
              <Typography className={classes.subtittle}>Opie</Typography>
            </li>
            <li className={classes.li}>
              <Typography className={classes.subtittle}>Bigwigs</Typography>
            </li>
            <a
              href="https://pastebin.com/tjcHkQbS"
              style={{ textDecoration: "none" }}
            >
              <li className={classes.li}>
                <Typography className={classes.subtittle}>Details</Typography>
              </li>
            </a>
            <a
              href="https://pastebin.com/B5Mj1H0L"
              style={{ textDecoration: "none" }}
            >
              <li className={classes.li}>
                <Typography className={classes.subtittle}>Plater</Typography>
              </li>
            </a>
          </ul>
          <Typography className={classes.info}>
            {" "}
            To replicate my profile, just click on the addon you need and copy
            the string, you can then import it into the respective addon in game
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} class="addons fadeOut">
          <Typography className={classes.tittle}> WeakAuras</Typography>
          <ul style={{ color: "white" }}>
            <li className={classes.li}>
              {" "}
              <Typography className={classes.subtittletwo}>
                Luxthos Warlock Set
              </Typography>
            </li>
            <li className={classes.li}>
              {" "}
              <Typography className={classes.subtittletwo}>
                Soulstone Reminder
              </Typography>
            </li>
            <li className={classes.li}>
              {" "}
              <Typography className={classes.subtittletwo}>
                Demonic Consumtion
              </Typography>
            </li>
            <li className={classes.li}>
              {" "}
              <Typography className={classes.subtittletwo}>
                Quantum Device
              </Typography>
            </li>
            <li className={classes.li}>
              {" "}
              <Typography className={classes.subtittletwo}>
                Shadowlands Trinkets
              </Typography>
            </li>
            <li className={classes.li}>
              {" "}
              <Typography className={classes.subtittletwo}>
                Castle Nathria
              </Typography>
            </li>
            <li className={classes.li}>
              {" "}
              <Typography className={classes.subtittletwo}>
                Spiteful Fixate
              </Typography>
            </li>
          </ul>
          <Typography className={classes.info} style={{ padding: "10px" }}>
            {" "}
            You can find all these Weakauras{" "}
            <a
              href="https://wago.io/"
              style={{
                textDecoration: "none",
                color: "chartreuse",
                fontWeight: 400,
              }}
            >
              {" "}
              here
            </a>
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          item
          xs={12}
          lg={3}
          class="interface fadeOut"
        >
          <Grid xs={12}>
            <Typography className={classes.tittle}>Interface</Typography>
          </Grid>
          <Grid container justify="center" xs={12}>
            <img
              alt="ui"
              width="300px"
              height="150px"
              src={UI}
              onClick={handleOpen}
              className={classes.borderui}
            />
          </Grid>
          <Grid xs={12}>
            <Typography
              className={classes.info}
              style={{ marginTop: "10px", textAlign: "center" }}
            >
              {" "}
              Click to enlarge{" "}
            </Typography>
          </Grid>

          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
              classes: { root: classes.root },
            }}
          >
            <img
              alt="ui"
              width="1280px"
              height="720px"
              src={UI}
              className={classes.borderui}
            />
          </Dialog>
        </Grid>
        <Grid item xs={12} lg={3} class="macros fadeOut">
          <Typography
            className={classes.tittle}
            style={{ textAlign: "center" }}
          >
            {" "}
            Macros
          </Typography>
          <ul style={{ color: "white" }}>
            <li className={classes.li}>
              <Grid container>
                <Typography
                  style={{ marginRight: "20px" }}
                  className={classes.subtittle}
                >
                  Banish Focus
                </Typography>

                <FileCopyIcon
                  onClick={myBanish}
                  style={{ cursor: "pointer", margin: "0px 20px" }}
                />
              </Grid>
            </li>

            <li className={classes.li}>
              <Grid container>
                <Typography className={classes.subtittle}>
                  Soulstone Mouseover
                </Typography>
                <FileCopyIcon
                  onClick={mySoulstone}
                  style={{ cursor: "pointer", margin: "0px 20px" }}
                />
              </Grid>
            </li>
            <li className={classes.li}>
              <Grid container>
                <Typography className={classes.subtittle}>
                  DoT Mouseover
                </Typography>

                <FileCopyIcon
                  onClick={myDot}
                  style={{ cursor: "pointer", margin: "0px 20px" }}
                />
              </Grid>
            </li>
            <li className={classes.li}>
              <Grid container>
                <Typography className={classes.subtittle}>
                  Demonic Circle
                </Typography>
                <FileCopyIcon
                  onClick={myCircle}
                  style={{ cursor: "pointer", margin: "0px 20px" }}
                />
              </Grid>
            </li>

            <li className={classes.li}>
              <Grid container>
                <Typography className={classes.subtittle}>
                  Interrupt Mouseover
                </Typography>
                <FileCopyIcon
                  onClick={myInterrupt}
                  style={{ cursor: "pointer", margin: "0px 20px" }}
                />
              </Grid>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Addons;
