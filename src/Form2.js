import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link} from 'react-router-dom';
import './index.css'
import axios from 'axios';

export default class Example extends React.Component {

      
    addToDatabase = (event) => {
        console.log('Im going to send Express a GET request');
        event.preventDefault(); // NO REFRESH
        // console.log(event.target);
        let data = {
            organization: event.target[0].value,
            title:  event.target[1].value,
            description:  event.target[2].value,
            purpose:  event.target[3].value,
            funds:  event.target[4].value,
            date:  event.target[5].value,
            location:  event.target[6].value,
            pic:  event.target[7].value
        };
     
        
        axios.post('http://localhost:4000/addNewEvent', data)
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
      <div id="width2">
      <Form onSubmit={this.addToDatabase}>
        <FormGroup>
          <Label for="Name">Organization</Label>
          <Input type="LastName" name="text" id="text" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Title</Label>
          <Input type="text" name="text" id="text" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input type="text" name="text" id="text" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="City">Purpose</Label>
          <Input type="text" name="text" id="text" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="State">Funds</Label>
          <Input type="text" name="text" id="text" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="Zip">Date</Label>
          <Input type="text" name="text" id="exampleText" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="Text">Location</Label>
          <Input type="text" name="select" id="exampleSelect" placeholder="">  
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Pic</Label>
          <Input type="text" name="select" id="exampleText" placeholder="" />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
      </div>
    );
  }
}
