import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "20px 0px",
    opacity: "0.9",
  },

  headerfont: {
    margin: "0px 20px",
    display: "flex",
    color: "white",
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
