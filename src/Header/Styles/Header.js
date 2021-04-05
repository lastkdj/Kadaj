import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "20px 0px",
    opacity: "0.9",
    transition: "all 0.5s ease-in-out",
    height: "70px",
    position: "absolute",
  },
  sticky: {
    display: "flex",
    padding: "20px 0px",
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    zIndex: "1",
    transition: "all 0.3s ease-in-out",
    height: "60px",
    alignContent: "center",
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.1)",
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
    color: "#2e2e2e",
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
    animation: "fadeInTop ease 1s",
    margin: "0",
  },

  li: {
    position: "relative",
    listStyle: "none",
  },
}));

export default useStyles;
