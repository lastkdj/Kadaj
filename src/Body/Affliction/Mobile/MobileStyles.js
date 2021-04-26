import { makeStyles } from "@material-ui/core/styles";
import wowBack from "../../../Img/wowback.jpg";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.8em",
    marginTop: "20px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      fontSize: "2.1em",
    },

    [theme.breakpoints.up("xl")]: {},
  },

  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },

    [theme.breakpoints.up("xl")]: {},
  },

  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
  },

  subtittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.6em",
    textAlign: "center",
  },

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.7em",
    textAlign: "justify",
  },

  linkwowhead: {
    fontWeight: 400,
    color: "orange",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.6em",
    textAlign: "justify",
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
    backgroundImage: `url(${wowBack})`,
  },

  statstext: {
    color: "#adb0bb",
    fontSize: "1em",
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    textAlign: "justify",
  },

  infotypo: {
    color: "#adb0bb",
    fontSize: "0.6em",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    textAlign: "justify",
  },
}));

export default useStyles;
