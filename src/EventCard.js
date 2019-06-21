import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

class EventCard extends React.Component {

    render() {
        return (
            <div>
            
            <h1 className = "main-title"> List Of Events </h1>
            <Card>
            <CardImg top width="100%" src={this.props.image} alt="Card image cap"  />
            <CardBody>
                <CardTitle>{this.props.title} {this.props.organization}</CardTitle>
                <CardSubtitle>{this.props.location}</CardSubtitle>
                <CardText>{this.props.purpose}</CardText>
                <Link to = "/Donate">
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