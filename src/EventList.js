import React from 'react';
import {Link} from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Nav from './Nav'
import EventCard from './EventCard';
import Axios from 'axios';


//<CardImg top width="50%" src="https://www.bvu.edu/sites/default/files/styles/width_1440/public/content/program/image/a48fb905-99f9-4e44-8eae-c53095d69054.jpg?itok=-4j4P1l7" alt="Card image cap" />

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrEvents: []
    }
  }

  componentDidMount() {
    this.getAllEvents();
  }

  getAllEvents = () => {
    Axios.get('http://localhost:4000/getEvents') 
    .then( res => {
      console.log(res);
      this.setState({arrEvents: res.data});
    })
    .catch( err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
         <h1 className = "main-title"> List Of Events </h1>
        {this.state.arrEvents.map(event => <EventCard {...event} />)}
      </div>

    );
  }
};

export default EventList;