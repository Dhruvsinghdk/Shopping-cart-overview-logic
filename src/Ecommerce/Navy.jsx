
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';


const Navy = ()=>{
  const cartitem = useSelector((state)=> state.cart);

    
    return(
        <>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="Show">Show {cartitem.qty}</Nav.Link>
            <Nav.Link as={Link} to="Home">Home </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet/>
        </>
    );
}
export default Navy;