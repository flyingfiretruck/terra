import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Terra</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#about">About Us</Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigation;