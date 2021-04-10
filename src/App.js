import "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Spec from "./Body/Spec";
import About from "./Body/About";
import Youtube from "./Body/Youtube";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid id="Home">
      <Header />
      <Body />
      <Spec />
      <About />
      <Youtube />
    </Grid>
  );
}

export default App;
