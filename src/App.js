import Header from "./componet/Header";
import Home from "./container/Home";
import { Switch, Route } from "react-router-dom";
import Departments from "./container/Departments/Departments";
import About from "./container/About/About";
import Doctor from "./container/Doctor/Doctor";
import Appoinment from "./container/Appoinment/Appoinment"
import Contact from "./container/Contact/Contact";
import Footer from "./componet/Footer";
import Auth from "./container/Auth/Auth";
import Medicine from "./container/Medicine/Medicine";
import PrivateRoute from "./Route/PrivateRoute";
import PublicRoute from "./Route/PublicRoute";
import BookAppoinment from "./container/Appoinment/BookAppoinment";
import ListAppoinment from "./container/Appoinment/ListAppoinment";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/Departments"} component={Departments} />
        <PublicRoute exact path={"/doctor"} component={Doctor} />
        <PublicRoute exact path={"/About"} component={About} />
        <PublicRoute exact path={"/BookAppoinment"} component={BookAppoinment} />
        <PublicRoute exact path={"/ListAppoinment"} component={ListAppoinment} />
        <PrivateRoute exact path={"/Medicine"} component={Medicine} />
        <PublicRoute exact path={"/Contact"} component={Contact} />
        <PrivateRoute exact path={"/Appoinment"} component={Appoinment }/>
        <PublicRoute restricted={true} exact path={"/Auth"} component={Auth} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
