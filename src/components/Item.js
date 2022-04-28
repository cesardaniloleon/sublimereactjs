import React from 'react';
import {Card} from 'react-bootstrap';

const Item = ({ name, thumbnail, price, id, stock }) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={thumbnail}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {price}
      </Card.Text>
      <Card.Text>
        {stock}
      </Card.Text>
    </Card.Body>
  </Card>
  );
};

export default Item;