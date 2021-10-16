import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import icon from '../../images/ICON/Path 1.png'
const Header = () => {
  return (
    <div>
      <Navbar  fixed="top" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img
            src={logo}
            width="250"
            // height="100" 
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-dark fw-bold fs-5">Home</Nav.Link>
            <Nav.Link href="#features"><img src={icon} alt="" /></Nav.Link>
            <Nav.Link href="#pricing" className="text-dark fw-bold fs-5">Login</Nav.Link>
            <Nav.Link href="#pricing"><button className="btn btn-danger rounded-pill">Sing up</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;