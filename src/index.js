import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App'
import DonateForm from './DonateForm'
import Form from './Form'

//install "npm install --save reactstrap react react-dom"
import Nav from './Nav'
import EventList from './EventList';

ReactDOM.render(
  <Router>
      <div>
        <Nav />
        <Route exact path="/" component={App} />
        <Route path="/donate/:id" component={DonateForm} />
        <Route path="/form" component={Form} />
        <Route path="/EventList" component={EventList} />
      </div>
  </Router>,
  document.getElementById('root')
)