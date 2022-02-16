import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import ChangePassword from "./views/ChangePassword/ChangePassword"



function App() {

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{margin : "0% 1%", paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/home" component={Auth(LandingPage, null)} />
          <Route exact path="/" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/change" component={Auth(ChangePassword, null)} />



        </Switch>
      </div>
      <Footer />
    
    </Suspense>
  );
}

export default App;
