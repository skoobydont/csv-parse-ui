import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './pages/LangingPage';
import MonthPage from './pages/MonthPage';
import YearPage from './pages/YearPage';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/:year" component={YearPage} />
        <Route exact path="/:year/:month" component={MonthPage} />
      </Switch>
    </Router>
  )
}

export default App;
