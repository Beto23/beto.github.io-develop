// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components(Pages)
import App from './components/App';
import Home from './pages/Home';
import Contact from './pages/Contact';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
