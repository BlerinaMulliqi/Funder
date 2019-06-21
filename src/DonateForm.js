import React from "react"
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form1 from './Form1';
import Nav from './Nav';

class DonateForm extends React.Component {

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
        console.log(this.props.match.params.id);
        return (
            <div>
                <form onSubmit={this.something}>
                <Form1 id={this.props.match.params.id}/>

                </form>

            </div>
        )
    }
}

export default DonateForm