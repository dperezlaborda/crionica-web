import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider1 from '../img/slider1.jpg';
import Slider2 from '../img/slider2.jpg';
import Slider3 from '../img/slider3.jpg';
import Slider4 from '../img/slider4.jpg';

const items = [
    {
        img: Slider1,
        name: 'Rodolfo',
        bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
    },
    {
        img: Slider2,
        name: 'Maria',
        bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
    },
    {
        img: Slider3,
        name: 'Francisco',
        bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
    },
    {
        img: Slider4,
        name: 'Otro',
        bio: 'Etiam vulputate odio sed porta vehicula. Etiam interdum fringilla ex, sed lobortis tellus volutpat nec. Praesent sapien erat, sagittis sit amet diam at, viverra sagittis diam. Nulla eu mauris eget diam condimentum faucibus. Suspendisse est lectus, fermentum quis fermentum pulvinar, venenatis a diam.'
    },
];

const Slider = () => {
    const slides = items.map((item, car) => {
        return (
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption img={item.img} name={item.name} bio={item.bio} />
                </Carousel.Item>
            </Carousel>
        );
    });
}



export default Slider;