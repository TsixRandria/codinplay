import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Home from './Pages/Home/Home.page'
import About from './Pages/About/About.page'
import Portfolio from "./Pages/Portfolio/Portfolio.page";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/" component={ Home}/>
          <Route exact path="/about" component={ About}/>
          <Route exact path="/portfolio" component={ Portfolio}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
