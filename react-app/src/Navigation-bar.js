import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Navbar, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile';
import './Navigation-bar.css';
import { Link } from 'react-router-dom';

function Navigation_bar(){
    /*const [contatore,setContatore]=useState(0);
    const element=(<div>
        <Profile profname="jhonny"/>
    </div>)
    const goToProfile = () => {
        if(contatore===0){
            render(element);
            setContatore(contatore+1);  
        }
    }*/
    return(
        <>
        <Row>
        <Navbar bg="light" expand="lg" className='navbar'>
            <Container fluid className='container'>
                <Link to="" className='home-Link  Link-decoration'>
                    <Navbar.Brand href="" className='first-col col-md-6 col-lg-6'><h3>GYM-SCHEDULER</h3></Navbar.Brand>
                </Link>
                <Link to="/profile" className='prof-Link Link-decoration'>
                    <Navbar.Brand href='#profile' className='third-col col-md-3 col-lg-3'><h6>profile</h6></Navbar.Brand>
                </Link>
                <Link to="/Option" className='option-Link Link-decoration'>
                    <Navbar.Brand href='#options' className='second-col col-md-3 col-lg-3'><h6>options</h6></Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
        </Row>
        </>
    )
}

export default Navigation_bar;