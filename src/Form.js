import React from "react"
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form2 from './Form2';
import Nav from './Nav'


class Form extends React.Component {

    something = (event) => {
        console.log('Im going to send Express a GET request');
        event.preventDefault(); // NO REFRESH
         
        

        axios.get('http://localhost:4000/getEvents')
        .then( res => {
            console.log('got it!');
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        })

        console.log('On its way!');
    }

    render() {
        return (
            <div>
 
               <Form2 />

            </div>
    )
}
}

export default Form