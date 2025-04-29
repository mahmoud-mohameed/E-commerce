import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'; 
import { useSelector } from "react-redux";

const Navs = () => {
  const cart =useSelector(state => state.products.cart)
  const wishList =useSelector(state => state.products.wishList)
    return (
        
      <Navbar expand="lg">
      <Container className="div-container" >
        <Navbar.Brand><Link className="cart" to ="/Cart">Cart -{cart.length} < FaShoppingCart/></Link></Navbar.Brand>
        <Navbar.Brand><Link className="wishlist" to ="/Wishlist">Wishlist -{wishList.length} <FaHeart/></Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto">
          
         <Link to="/Home" className="link active Nav.Link">Home</Link>
          <Link to="/Mobiles" className="link Nav.Link">Mobiles</Link>
          <Link to="/Laptops" className="link Nav.Link">Laptops</Link>
          <Link to="/Appliances" className="link Nav.Link">Home Appliances</Link>
          <Link to="/Games" className="link Nav.Link">Games</Link>
          <Link to="/Perfumes" className="link Nav.Link">Perfumes</Link>
           
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navs;



