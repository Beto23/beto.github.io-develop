// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components(Pages)
import App from './components/App';
import Home from './views/Home';
import Contact from './views/Contact';
import Portafolio from './views/Portafolio'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/portafolio" component={Portafolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
