import React from 'react';
import Card from "react-bootstrap/Card";
import Titi from "./titi_pic.jpg";

function gitHubCard () {
    return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Titi} />
      <Card.Body>
        <Card.Title>tnfo222</Card.Title>
        <Card.Text>
          Titi travelling the world!
        </Card.Text>
        <Button variant="primary">About Me</Button>
      </Card.Body>
    </Card>
  );
}

export default gitHubCard;
