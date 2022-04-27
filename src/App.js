import Header from "./componet/Header";
import Home from "./container/Home";
import { Switch, Route } from "react-router-dom";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Footer from "./componet/Footer";
import Appoinment from "./container/Appoinment/Appoinment";
import Departments from "./container/Departments/Departments";
import Doctor from "./container/Doctor/Doctor";

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
        <Route exact path={"/Appoinment"} component={Appoinment} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
