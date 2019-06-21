import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import App from './App.css'
class EventCard extends React.Component {

    render() {
        return (
            <div>
            
           
            <Card>
            <CardTitle><h2>{this.props.title} by {this.props.organization}</h2></CardTitle>
            <CardImg src={this.props.image} alt="Card image cap" className= "image"/>
            <CardBody>
                
                <CardSubtitle><h2>The event will be at {this.props.location} in {this.props.date}</h2></CardSubtitle>
                <CardText><h2>Goal Amount: $1000</h2></CardText>
                <CardText><h2>{this.props.purposes}</h2></CardText>
                <CardText><h2>{this.props.description}</h2></CardText>
                <CardText><h2>Fund for ${this.props.funds}</h2></CardText>
                <Link to ={"/Donate/"+this.props.id}>
                <Button>Donate</Button> 
                </Link>
                <Button>Delete</Button>
            </CardBody>
            </Card>
        </div>
        );
    }
}

export default EventCard;