import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Homepage from "./components/pages/Homepage";
import Products from "./components/pages/Products";
import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/Services";
import Download from "./components/pages/Download";
import ContactUs from "./components/pages/ContactUs";
import PopUpChat from "./components/pages/PopUpChat";
import Footer from "./components/Footer";
import Scrolltop from "./Scrolltop";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Homepage" component={Homepage} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Services" component={Services} />
          <Route path="/Products" component={Products} />
          <Route path="/Download" component={Download} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/PopUpChat" component={PopUpChat} />
        </Switch>
        <Scrolltop />
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
