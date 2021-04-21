import React, { useEffect } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import SoulRot from "../../Img/aff/soulrot.png";
import Demonic from "../../Img/aff/demonic.png";
import Demologo from "../../Img/demo.jpg";
import Skull from "../../Img/skull.png";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import "../guideStyles.css";
import { Menu } from "../../Context/DemoMenuContext";
import RotateRightIcon from "@material-ui/icons/RotateRight";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: "#60338A",
    color: "white",
    borderRadius: "9px",
  },

  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
    marginTop: "20px",
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  topMenu: {
    borderRadius: "9px 9px 0px 0px",
  },

  bottomMenu: {
    borderRadius: "0px 0px 9px 9px",
  },
}));

const Demomenu = (props) => {
  const { state, dispatch } = Menu();
  const { stats, lego, covenant, talents, raid } = state;
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

    const fadeElms = document.querySelectorAll(".menu");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  const onClickStats = () => {
    dispatch({ type: "stats", value: stats });
  };

  const onClickLego = () => {
    dispatch({ type: "lego", value: lego });
  };

  const onClickCovenant = () => {
    dispatch({ type: "covenant", value: covenant });
  };

  const onClickTalents = () => {
    dispatch({ type: "talents", value: talents });
  };

  const onClickRaid = () => {
    dispatch({ type: "raid", value: raid });
  };

  return (
    <Grid xs={3}>
      {" "}
      <Grid
        container
        item
        xs={12}
        style={{ height: "100px", marginTop: "70px", marginLeft: "30px" }}
      >
        <Avatar
          className={classes.large}
          src={Demologo}
          style={{
            boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
            margin: "0px 30px 0px 20px",
          }}
        ></Avatar>
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          DEMONOLOGY
        </Typography>
      </Grid>
      <Grid
        class="menu fadeOut"
        container
        item
        xs={12}
        style={{
          marginTop: "50px",
          marginLeft: "30px",
          borderRadius: "5px",
          maxHeight: 360,
        }}
      >
        <List className={classes.root} disablePadding={true}>
          <ListItem
            button
            onClick={onClickStats}
            className={classes.topMenu}
            style={stats ? { backgroundColor: "#F58900" } : null}
          >
            <ListItemAvatar>
              <Avatar
                style={{
                  backgroundColor: "darkblue",
                  boxShadow: "inset 10px 10px 5px 0px rgba(0,0,0,0.27)",
                }}
              >
                {" "}
                <LocalHospitalIcon />
              </Avatar>
            </ListItemAvatar>
            <Typography style={{ fontSize: "1em" }}> Stats</Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            button
            onClick={onClickLego}
            style={lego ? { backgroundColor: "#F58900" } : null}
          >
            <ListItemAvatar>
              <Avatar
                src={Demonic}
                style={{ boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)" }}
              ></Avatar>
            </ListItemAvatar>
            <Typography style={{ fontSize: "1em" }}> Legendaries</Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            button
            onClick={onClickCovenant}
            style={covenant ? { backgroundColor: "#F58900" } : null}
          >
            <ListItemAvatar>
              <Avatar
                src={SoulRot}
                style={{
                  boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                }}
              ></Avatar>
            </ListItemAvatar>
            <Typography style={{ fontSize: "1em" }}>Covenant</Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            button
            onClick={onClickTalents}
            style={talents ? { backgroundColor: "#F58900" } : null}
          >
            <ListItemAvatar>
              <Avatar
                src={Demologo}
                style={{
                  boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Talents" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            button
            onClick={onClickRaid}
            style={raid ? { backgroundColor: "#F58900" } : null}
          >
            <ListItemAvatar>
              <Avatar
                src={Skull}
                style={{
                  boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Raid Setup" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button className={classes.bottomMenu}>
            <ListItemAvatar>
              <Avatar
                style={{
                  boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  backgroundColor: "#750C3A",
                }}
              >
                <RotateRightIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Rotation" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Demomenu;
