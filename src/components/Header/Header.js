import React from 'react';
import './Header.css'
import { Jumbotron, Button, Navbar, Nav } from 'react-bootstrap';
import call from '../../images/call.png';
import email from '../../images/email.png';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">News</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="ml-5">Home</Nav.Link>
                    <Nav.Link href="#" className="ml-5"><img src={call}/>081-454-0666</Nav.Link>
                    <Nav.Link href="#" className="ml-5"><img src={email}/>Breaking.news@example.com</Nav.Link>
                </Nav>
            </Navbar>
            <Jumbotron>
                <h1>Breaking News!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
            </p>
                <p>
                    <Button variant="danger">Read more</Button>
                </p>
            </Jumbotron>
        </>
    );
};

export default Header;