import Header from "./componet/Header";
import Home from "./container/Home";
import { Switch, Route } from "react-router-dom";
import Departments from "./container/Departments/Departments";
import About from "./container/About/About";
import Doctor from "./container/Doctor/Doctor";
import Contact from "./container/Contact/Contact";
import Footer from "./componet/Footer";
import Auth from "./container/Auth/Auth";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Departments"} component={Departments} />
        <Route exact path={"/doctor"} component={Doctor} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Contact"} component={Contact} />
        <Route exact path={"/Auth"} component={Auth} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
