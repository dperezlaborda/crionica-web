import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style/cardSlide.css';
import imagen from '../img/slider1.jpg';

const CardSlide = () => {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Img src={imagen} />
                <Card.Title className="mt-2">Marta</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardSlide;