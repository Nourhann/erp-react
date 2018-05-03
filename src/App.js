import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactUS from './components/ContactUs'
import Biography from './components/Biography'
import CallMedia from './components/CallMedia'


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar img="/res/Logo.png" dots="/res/Dots.png"/>

      
        <Switch>
          <Route exact path='/' render={() => <div>Home</div>}/>
          <Route exact path='/biography' component={Biography}/>
          <Route exact path='/contact' component={ContactUS}/>
          <Route exact path='/media' component={CallMedia}/>
        </Switch>

          
        

        <Footer/>
       
      </div>
    );
  }
}

export default App;
