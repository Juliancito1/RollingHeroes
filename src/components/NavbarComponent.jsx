import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const NavbarComponent = ({setHeroePublisher}) => {
    return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"} onClick={() => setHeroePublisher("")} className='text-light'>Rolling Heroes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link onClick={() => setHeroePublisher("DC Comics")}  className='nav-link text-light'>DC</Link>
            <Link onClick={() => setHeroePublisher("Marvel Comics")}  className='nav-link text-light'>Marvel</Link>
            <Link className='nav-link text-light' to={'/search'}>Buscar</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavbarComponent;