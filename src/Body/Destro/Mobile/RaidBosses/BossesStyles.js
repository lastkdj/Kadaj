import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em",
    },

    [theme.breakpoints.up("xl")]: {},
  },

  subtittle: {
    marginTop: "20px",
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "center",
  },

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "justify",
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
  },

  imgBorder: {
    boxShadow: "inset 0 0 0 1px #504137",
    width: "inherit",
    borderStyle: "double",
    borderColor: "black",
  },

  imgPhone: {
    width: "230px",
    height: "40px",
  },

  justify: {
    justifyContent: "center",
  },

  aligned: {
    padding: "10px",
    alignItems: "center",
  },
}));

export default useStyles;
