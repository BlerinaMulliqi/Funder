import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Link} from 'react-router-dom'
import Form from './Form';
import DonateForm from'./DonateForm';
import Nav from './Nav';
import EventList from './EventList'
//import Notfound from './Notfound'
//import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'



function App() {

return (

  <div className="App">


    <header className="App-header">

      <div>
      <div className = "box">
      <h1>Funder.EDU</h1>
      <div className = "mini-box">
      <h3>Welcome to our platform where you can help donate to local youth-based events around your area! </h3>
      </div>

      </div>
      </div>

    </header>
  </div>


);
}
export default App;