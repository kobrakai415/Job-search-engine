import { Navbar, Nav } from 'react-bootstrap'
import {link } from "react-router-dom"

const MyNavBar = () => {

  return <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand className="ms-3" href="/"><img height="50" src="https://i.pinimg.com/originals/18/18/88/18188820e5da19a3908aeb18af5246b5.jpg" alt="Store logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

}

export default MyNavBar