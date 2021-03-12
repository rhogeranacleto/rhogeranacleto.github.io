import { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Background } from './Background/Background';
import { Curriculum } from './curriculum/curriculum';
import { Home } from './Home/Home';
import { Profile } from './profile/profile';

export const App = () => {
  return (
    <Suspense fallback="loadding...">
      <Router>
        <Switch>
          <Route path="/cv">
            <Curriculum />
          </Route>
          <Route path="/bg">
            <Background />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};
