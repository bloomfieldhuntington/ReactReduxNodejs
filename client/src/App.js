// MARK:- Imports
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Example object
var nothingSpecial = () => {};
// MARK:- Components


const App = () => {
  store.dispatch(nothingSpecial);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* PLACE ROUTES HERE */}
          <Fragment>Hello</Fragment>
          
        </Switch>
      </Router>
    </Provider>
  )

}


export default App;
