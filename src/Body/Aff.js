import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import SoulRot from "../Img/aff/soulrot.png";
import Demonic from "../Img/aff/demonic.png";
import Afflogo from "../Img/aff.png";
import Skull from "../Img/skull.png";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#60338A",
    color: "white",
    borderRadius: "5px",
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
}));

const Aff = () => {
  const classes = useStyles();
  return (
    <Grid>
      {" "}
      <Grid
        container
        item
        xs={12}
        style={{ height: "100px", marginTop: "70px", marginLeft: "30px" }}
      >
        <Avatar
          className={classes.large}
          src={Afflogo}
          style={{
            boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
            margin: "0px 30px 0px 20px",
          }}
        ></Avatar>
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          AFFLICTION
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        Hola
      </Grid>
      <Grid
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
        <List className={classes.root}>
          <ListItem button>
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
            <ListItemText primary="Stats" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                src={Demonic}
                style={{ boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)" }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Legendaries" style={{ color: "orange" }} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                src={SoulRot}
                style={{
                  boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Covenant, Conduits & SoulBind" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                src={Afflogo}
                style={{
                  boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Talents" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem button>
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
        </List>
      </Grid>
    </Grid>
  );
};

export default Aff;
