import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Asset from "../Img/addonswall3.jpg";
import UI from "../Img/ui.png";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
    animation: "fadeInBot ease 1.8s",
  },

  borderThumbnail: {
    backgroundImage: `url(${Asset})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderTopStyle: "solid",
    borderTopColor: "rgb(28, 28, 28)",
    borderWidth: "5px",
  },

  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
  },
  subtittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.2em",
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
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

const Addons = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.borderThumbnail}
      style={{ height: "500px", backgroundColor: "teal", padding: "10px" }}
    >
      {" "}
      <Grid item xs={12}>
        <Typography
          className={classes.spec}
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          Addons - UI
        </Typography>
      </Grid>
      <Grid item xs={3} style={{ marginLeft: "30px" }}>
        <Typography className={classes.tittle}> Addons list</Typography>
        <ul style={{ color: "white" }}>
          <a
            href="https://docs.google.com/document/d/1eo349uS-_HAA78AQDPl2TrNpvhEzVXp9GGcy52CDAn8/edit?usp=sharing"
            style={{ textDecoration: "none" }}
          >
            <li>
              <Typography className={classes.subtittle}>Elvui</Typography>
            </li>
          </a>
          <li>
            <Typography className={classes.subtittle}>WeakAuras</Typography>
          </li>
          <li>
            <Typography className={classes.subtittle}>Opie</Typography>
          </li>
          <li>
            <Typography className={classes.subtittle}>Bigwigs</Typography>
          </li>
          <a
            href="https://pastebin.com/tjcHkQbS"
            style={{ textDecoration: "none" }}
          >
            <li>
              <Typography className={classes.subtittle}>Details</Typography>
            </li>
          </a>
          <a
            href="https://pastebin.com/B5Mj1H0L"
            style={{ textDecoration: "none" }}
          >
            <li>
              <Typography className={classes.subtittle}>Plater</Typography>
            </li>
          </a>
        </ul>
        <Typography className={classes.info}>
          {" "}
          To replicate my profile, just click on the addon you need and copy the
          string, you can then import it into the respective addon in game
        </Typography>
      </Grid>
      <Grid item xs={4} style={{ marginLeft: "30px" }}>
        <Typography className={classes.tittle}> WeakAuras</Typography>
        <ul style={{ color: "white" }}>
          <li>
            {" "}
            <Typography className={classes.subtittletwo}>
              Luxthos Warlock Set
            </Typography>
          </li>
          <li>
            {" "}
            <Typography className={classes.subtittletwo}>
              Soulstone Reminder
            </Typography>
          </li>
          <li>
            {" "}
            <Typography className={classes.subtittletwo}>
              Demonic Consumtion
            </Typography>
          </li>
          <li>
            {" "}
            <Typography className={classes.subtittletwo}>
              Quantum Device
            </Typography>
          </li>
          <li>
            {" "}
            <Typography className={classes.subtittletwo}>
              Shadowlands Trinkets
            </Typography>
          </li>
          <li>
            {" "}
            <Typography className={classes.subtittletwo}>
              Castle Nathria
            </Typography>
          </li>
          <li>
            {" "}
            <Typography className={classes.subtittletwo}>
              Spiteful Fixate
            </Typography>
          </li>
        </ul>
        <Typography className={classes.info}>
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
      <Grid item xs={3} style={{ marginLeft: "30px" }}>
        <Typography className={classes.spec}>Interface</Typography>
        <img
          alt="ui"
          width="300px"
          height="150px"
          src={UI}
          onClick={handleOpen}
          className={classes.borderui}
          style={{ marginTop: "20px", cursor: "pointer" }}
        />

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
    </Grid>
  );
};

export default Addons;
