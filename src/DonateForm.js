import React from "react"
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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
        return (
            <div>

                <form onSubmit={this.something}>
                <h2>Paypal </h2>
        
                <input required type="text" placeholder="" /><br />
                <label>Location</label><br />
                <input required type="text"  placeholder="" /><br />
                <label>Time</label><br></br>
                <input required type="text" placeholder="" /><br />
                <label>Add picture</label> <br></br>
                <input required type="text" placeholder="" /><br />
                
                <button>Post</button>



                </form>
                

            </div>

        )
    }
}

export default DonateForm