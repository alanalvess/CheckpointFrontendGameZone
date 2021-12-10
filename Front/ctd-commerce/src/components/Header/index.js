import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/gameszone.svg';
import { BsBagFill } from 'react-icons/bs';
import './style.scss';

export default function Header() {
  return (
    // <Navbar expand="md" className="border-bottom border-1 border-dark">
    <Navbar expand="md">
      <Container>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/consoles" className="nav-item">Console</Link>
            <Link to="/jogos" className="nav-item">Jogos</Link>
            <Link  to="/carrinho" className="nav-item">
              <BsBagFill className="bag-in" size={22}/>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/carrinho" className="nav-item">
          <BsBagFill className="bag-out" size={22}/>
        </Link>
      </Container>
    </Navbar>
  );
}