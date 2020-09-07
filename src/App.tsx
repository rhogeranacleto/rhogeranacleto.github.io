import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Curriculum } from './Curriculum/Curriculum';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cv"><Curriculum /></Route>
        <Route><Home /></Route>
      </Switch>
    </Router>
  );
};
