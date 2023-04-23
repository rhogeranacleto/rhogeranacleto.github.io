import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
  <div id="app" className="grid grid-cols-7 m-auto max-w-screen-lg">
    <aside className="col-span-2">
      <header>
        Rhoger Anacleto
      </header>
    </aside>
    <main className="col-span-5">
      <section>experience</section>
    </main>
  </div>
);

export default App;
