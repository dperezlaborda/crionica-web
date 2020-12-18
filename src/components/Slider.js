import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider1 from '../img/slider1.jpg';
import Slider2 from '../img/slider2.jpg';
import Slider3 from '../img/slider3.jpg';
import Slider4 from '../img/slider4.jpg';
import '../style/slider.css';

const Slider = () => {
    const items = [
        {
            img: Slider1,
            name: 'Rodolfo',
            bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
        },
        {
            img: Slider4,
            name: 'Maria',
            bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
        },
        {
            img: Slider3,
            name: 'Francisco',
            bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
        },
        {
            img: Slider2,
            name: 'Otro',
            bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
        },
    ];

    return (
        <Carousel className="mt-5">
            {items.map(item => (
                <Carousel.Item>
                    <img
                        className="carousel-img w-100"
                        src={item.img}
                        alt={`foto de ${item.name}`}
                    />
                    <h3>{item.name}</h3>
                    <p>{item.bio}</p>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}



export default Slider;