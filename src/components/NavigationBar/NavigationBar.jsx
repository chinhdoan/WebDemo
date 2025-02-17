import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from '../Home/Home'
import './NavigationBar.css'
import Services from '../Services/Services'
import About from '../About/About'
import {useState} from 'react'
export default function NavigationBar() {
    const [tag,setTag] = useState();

    const pageTransition = () => {
        const element = document.getElementById(tag);
        console.log(element)
        element.scrollIntoView({behavior: 'smooth'});
    } 
return (
<>

{/*        
        <div class="row py-4">
            <div class="col-lg-9">
                <span class="ml-lg-2 text-white">Công ty TNHH Kỹ thuật Công nghệ điện tự động Biển Đông</span>
            </div>
            <div class="col-lg-3">
                <span class="ml-lg-2 text-white">Giải pháp quản lý năng lượng</span>
            </div>
        </div> */}
    
    

        <Navbar expand="lg" className="sticky-top bg-body-tertiary">
        <Container class="menuBar">
            <Navbar.Brand class="logo" href="#home">DEMO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={function(event) {setTag("home"); pageTransition()}} href="#home">Home</Nav.Link>
                <Nav.Link onClick={function(event) {setTag("services"); pageTransition()}} href="#services">Services</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Product A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Product B
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Product C</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <div id="home"> <Home/></div>
        <div id="services"><Services/></div>
        <div><About/></div>

</>
);
}

