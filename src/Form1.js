import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link} from 'react-router-dom';
import './index.css'
import axios from 'axios';

export default class Example extends React.Component {

  
  addToDatabase = (event) => {
    console.log('Im going to send Express a GET request');
    event.preventDefault(); // NO REFRESH
    console.log(event.target);
    let data = {
      organization: '',
      title: '',
      description: '',
      purpose: '',
      funds: '',
      date: '',
      location: '',
      pic: ''
    };
    
    axios.post('http://localhost:4000/getEvents', data)
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
      <div id="widthtype"> 
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="FirstName">FirstName</Label>
              <Input type="email" name="email" id="FirstName" placeholder="FirstName" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="LastName">LastName</Label>
              <Input type="text" name="text" id="text" placeholder="LastName" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="FirstName">Address</Label>
              <Input type="email" name="email" id="Address" placeholder="Address" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="LastName">City</Label>
              <Input type="text" name="text" id="text" placeholder="City" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Address">State</Label>
              <Input type="address" name="address" id="address" placeholder="State" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="City">Zip</Label>
              <Input type="text" name="text" id="City" placeholder="Zip" />
            </FormGroup>
            
            <Row form>
          
        </Row>
          </Col>
        </Row>
        <FormGroup>
          
          <Label for="exampleAddress">Card Number</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="Credit Card Number"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">CVV</Label>
          <Input type="3digit" name="" id="" placeholder="CVV"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Expiration Date</Label>
              <Input type="text" name="city" id="exampleCity" placeholder=""/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleCity">How much money $</Label>
              <Input type="text" name="city" id="exampleCity" placeholder=""/>
            </FormGroup>
        
          </Col>
          <Col md={6}>
            
          </Col>
        </Row>
        <FormGroup check>
          
        </FormGroup>
        <Button onClick={this.addToDatabase}>Submit</Button>

      
      </Form>
      </div>
    
    );
  }
}