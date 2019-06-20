import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Nav from './Nav'

//<CardImg top width="50%" src="https://www.bvu.edu/sites/default/files/styles/width_1440/public/content/program/image/a48fb905-99f9-4e44-8eae-c53095d69054.jpg?itok=-4j4P1l7" alt="Card image cap" />

const Example = (props) => {
  return (

     <div>
     <Nav />
     <h1 className = "main-title"> List Of Events </h1>
      <Card>
        <CardImg top width="100%" src="https://www.bvu.edu/sites/default/files/styles/width_1440/public/content/program/image/a48fb905-99f9-4e44-8eae-c53095d69054.jpg?itok=-4j4P1l7" alt="Card image cap"  />
        <CardBody>
          <CardTitle>Art Therapy</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Event to get students excited about a new afterschool program that'll help kids tap into their inner artistic side</CardText>
          
          <Button>Donate</Button> 
         
          <Button>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;