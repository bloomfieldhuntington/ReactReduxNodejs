// MARK:- Imports
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';

// MARK:- Components
import ExampleComponent from './components/ExampleComponent';
import Landing from './components/landing/Landing';

// Example object, ignore for now
var nothingSpecial = () => {};



const App = () => {
  store.dispatch(nothingSpecial);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* PLACE ROUTES HERE */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/example" component={ExampleComponent} />
        </Switch>
      </Router>
    </Provider>
  )

}


export default App;
