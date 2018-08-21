import * as React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact={true} component={BurgerBuilder} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
