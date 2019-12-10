import * as React from "react";

import { Switch, Route, Link } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import { Home } from "./Home";
import { Other } from "./Other";

export const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/other">Other</Link>
        </li>
      </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/other">
        <Other />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);
