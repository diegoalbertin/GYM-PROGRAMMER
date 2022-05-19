import './Home.css';
import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import gym_training from './img/gym_training.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage(props) {
  return (
    <>
    <div>
      <div className='home col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1'>
      <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={gym_training}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gym_training}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gym_training}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </div>
       <div className='ciao col-sm-4 col-md-4 col-lg-4'>
       <Card className='card1'>
        <Card.Img variant="top" src={gym_training} alt='problem' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          ciaoooo
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </div>
    </div>
    </>
  )
}

export default HomePage;