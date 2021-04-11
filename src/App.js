import "./App.css";
import Header from "./Header/Header";
import Banner from "./Body/Banner";
import Spec from "./Body/Spec";
import About from "./Body/About";
import Covenant from "./Body/Covenant";
import Affliction from "./Body/Affliction";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid id="Home">
      <Header />
      <Banner />
      <Spec />
      <About />
      <Covenant />
      <Affliction />
    </Grid>
  );
}

export default App;
