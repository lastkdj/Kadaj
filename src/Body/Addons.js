import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

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

const Addons = () => {
  const classes = useStyles();
  return <div>Addons</div>;
};

export default Addons;
