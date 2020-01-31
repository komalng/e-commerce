import React from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Card from './components/Card';
import Default from './components/Default';




function App() {
  return (
    /**allows us to stimulate the html tag*/
    <React.Fragment>
      <NavBar />
      {/*  Switch tage will  return only one matching route */}

      <Switch>
        {/* Route will shown component based on matching a path to a URL. */}

        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/card' component={Card} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
