import React, {Component} from 'react';
import Home from './pages/home';
import Shop from "./pages/shop";
import Contact from './pages/contact';
import Questions from './pages/QandA';

import "./App.css";
import {BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/Contact' component={Contact}/>
           <Route exact path='/QandA' component={Questions}/> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
