import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "20px 0px",
    opacity: "0.9",
    transition: "0.6s",
  },
  sticky: {
    display: "flex",
    padding: "20px 0px",
    backgroundColor: "white",
    position: "sticky",
    top: "0",
    zIndex: "1",
    transition: "0.6s",
    height: "60px",
    alignContent: "center",
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
    color: "black",
    fontFamily: "Poppins, sans-serif",
    justifyContent: "center",
  },

  navbarLogo: {
    fontSize: "1.4em",
    fontWeight: 700,
    color: "white",
  },

  menulist: {
    display: "flex",
    alignItems: "center",
  },

  ul: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeInTop ease 2s",
    margin: "0",
  },

  li: {
    position: "relative",
    listStyle: "none",
  },
}));

export default useStyles;
