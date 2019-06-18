import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App'
import DonateForm from './DonateForm'
import Form from './Form'

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/donate" component={DonateForm} />
        <Route path="/form" component={Form} />
      </div>
  </Router>,
  document.getElementById('root')
)