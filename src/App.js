import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link} from 'react-router-dom'
import Form from './Form';
import DonateForm from'./DonateForm';
//import Notfound from './Notfound'
//import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'



function App() {
 return (

   <div className="App">
     <header className="App-header">
       <div>
       <h1>Funder.EDU</h1>
       <h2> Welcome To Our Landing Page </h2>
       <div className = "hi">
      <Link to="/form">
       <button className="der" > Make Event </button>
       </Link>


       <Link to="/donate">
       <button className="der"> View Listed Events </button>
       </Link>
       </div>
       </div>
       
     </header>
   </div>


 );
}
export default App;






// // import React, { Component } from 'react';
// import Form from './Form';
// import DonateForm from'./DonateForm';



// class App extends Component {
//   render() {
//     return (
//     <div className="App">
//         <Form />
//         <DonateForm />
      
//     </div>
//     );
//     }
//   }
// export default App;
