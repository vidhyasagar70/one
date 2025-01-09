import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <div>
       <header>
          <div className="header-content">
            <div className="header-item">
               <img src="/images/phone.png" className="header-image"/>
               <span>9731125090, 9731125090</span>
            </div>
            <div className="header-item">
               <img src="/images/mail.png" className="header-image"/>
               <span className="email">contact@example.com</span>
            </div>
            <div className="header-item">
               <img src="/images/location.png" className="header-image"/> 
               <span className="location">#63/A, E Block, 2nd Stage, Dr.Rajkumar Road, Subramanya Nagar Bangalore-560010</span>
            </div>
            <div className="header-item">
               <img src="/images/social_icon.png" className="header-image"/>
               <img src="/images/Shape.png" className="header-image"/>
               <img src="/images/flag.png" className="header-image flag"/>  
            </div>     
          </div>
       </header>
      
       <Navbar bg="light" expand="lg"> 
        <div className="header-logo-container"> 
          <Navbar.Brand href="#"> 
            <img src="/images/logo.png" alt="unitedbuildpro Logo" className="header-logo-logo" /> 
          </Navbar.Brand> 
        </div> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> 
        <Nav> 
           <Nav.Link href="#home">Home</Nav.Link> 
           <Nav.Link href="#aboutus">About Us</Nav.Link> 
           <NavDropdown title="Services" id="basic-nav-dropdown"> 
           <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item> 
           <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item> 
           <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
           </NavDropdown> <Nav.Link href="#contactus">Contact Us</Nav.Link> 
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        <div>
          <div className='bg-img'>
            
          </div>
        </div>
    </div>  
  );
};

export default Header;
