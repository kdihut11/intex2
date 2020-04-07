import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SiteIcon from './media/gofundme_logo.png'
import Image from 'react-bootstrap/Image'


//import AppContext from './context'

function HeaderContainer(props) {
    return (
        <bs.Navbar variant="light" expand="lg" >
            <Link to="/">
                <bs.Navbar.Brand className="nav-brand">
                    <Image alt="Site Icon" src={SiteIcon} width="180" height="60" rounded href="#home" />
                    <div className="nav-brand" style={{textAlign:'center'}}>INTEX</div>
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link nav-link-ltr">Home</Link>
                    <Link to="/about" className="nav-link nav-link-ltr">About</Link>
                    <Link to="/help" className="nav-link nav-link-ltr">Help</Link>
                    <Link to="/predict" className="nav-link nav-link-ltr">Predict</Link>
                </bs.Nav>
                <bs.Nav>
                    <bs.NavDropdown title="Welcome, Guest" alignRight >
                        <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}

export default HeaderContainer