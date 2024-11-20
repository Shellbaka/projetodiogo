import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navb() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/inicio">Reciclub</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/score">Score</Nav.Link>
          <Nav.Link as={NavLink} to="/sobre">Sobre nós</Nav.Link>
          <Nav.Link as={NavLink} to="/conta">Criar conta</Nav.Link>
          <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
