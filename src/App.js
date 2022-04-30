import Header from "./componet/Header";
import Home from "./container/Home";
import { Switch, Route } from "react-router-dom";
import Departments from "./container/Departments/Departments";
import About from "./container/About/About";
import Doctor from "./container/Doctor/Doctor";
import Contact from "./container/Contact/Contact";
import Appoinment from "./container/Appoinment/Appoinment";
import Footer from "./componet/Footer";
import Auth from "./container/Auth/Auth";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route  path={"/Departments"} component={Departments} />
        <Route  path={"/doctor"} component={Doctor} />
        <Route  path={"/About"} component={About} />
        <Route  path={"/Contact"} component={Contact} />
        <Route  path={"/Appoinment"} component={Appoinment} />
        <Route  path={"/Auth"} component={Auth} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
