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
   <Nav />


     <header className="App-header">

       <div>
       <div className = "box">
       <h1>Funder.EDU</h1>
       <h2> Welcome To Our Landing Page </h2>
       <div className = "hi">
      <Link to="/form">
       <button className="der" > Make Event </button>
       </Link>


       <Link to="/EventList">
       <button className="der"> View Listed Events </button>
       </Link>
       </div>
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
// export default App








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
