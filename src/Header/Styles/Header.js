import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "0px 0px",
    opacity: "0.9",
    transition: "all 0.5s ease-in-out",
    height: "70px",
    position: "absolute",
    zIndex: "1000",

    [theme.breakpoints.up("md")]: {
      padding: "20px 0px",
      opacity: "0.9",
      transition: "all 0.5s ease-in-out",
      height: "70px",
      position: "absolute",
      zIndex: "1000",
    },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },
  sticky: {
    display: "flex",
    padding: "20px 0px",
    backgroundColor: "rgb(28, 28, 28)",
    position: "fixed",
    top: "0",
    zIndex: "5000",
    transition: "all 0.3s ease-in-out",
    height: "60px",
    alignContent: "center",
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.1)",
    borderColor: "#DADADA",
    borderBottomStyle: "solid",
    borderWidth: "3px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  headerfont: {
    margin: "0px 20px",
    display: "flex",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    justifyContent: "center",
  },

  headerfontSticky: {
    margin: "0px 20px",
    display: "flex",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    justifyContent: "center",
  },

  navbarLogo: {
    backgroundPosition: "center",
    fontSize: "1.4em",
    fontWeight: 700,
    color: "white",
    cursor: "pointer",
  },

  menulist: {
    display: "flex",
    alignItems: "center",
  },

  ul: {
    display: "none",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeInTop ease 1s",
    margin: "0",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  li: {
    position: "relative",
    listStyle: "none",
    cursor: "pointer",
  },

  header: {
    margin: "0px 20px",

    [theme.breakpoints.up("md")]: {
      margin: "0px 50px",
    },

    [theme.breakpoints.up("lg")]: {
      margin: "0px 200px",
    },

    [theme.breakpoints.up("xl")]: { margin: "0px 400px" },
  },

  youtube: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      display: "block",
    },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  speclogo: {
    borderRadius: "40px",
    width: "40px",
    margin: "0px 10px",

    [theme.breakpoints.up("md")]: {
      width: "50px",
      marginLeft: "0px",
    },

    [theme.breakpoints.up("lg")]: { width: "40px" },

    [theme.breakpoints.up("xl")]: {},
  },
}));

export default useStyles;
