import Header from "./componet/Header";
import Home from "./container/Home";
import Footer from "./componet/Footer";
import Department from "./container/Department/Department";
import Doctor from "./container/Doctor/Doctor";
import About form "./container/About/About";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
   
      <Switch>
      <Header/>
        <Route exact path={"/"} component={"home"} ></Route>
        <Route exact path={"/Department"} component={"Department"}></Route>
        <Route exact path={"/Doctor"} component={"Doctor"}></Route>
        <Route exact path={"/About"} component={"About"}></Route>
        <Route exact path={"/Contact"} component={"Contact"}></Route>
        <Footer />
      </Switch>
    
    </>
  );
}

export default App;
