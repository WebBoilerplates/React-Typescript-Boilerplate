import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Example from './pages/Example';

const ClientRouter = (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Example} />
      </Switch>
    </Router>
  </>
);

export default ClientRouter;
