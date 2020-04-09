import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SiteIcon from './media/goFundMe.png'
import Image from 'react-bootstrap/Image'


//import AppContext from './context'

function HeaderContainer(props) {
    return (
        <bs.Navbar variant="dark" expand="lg" className="color-white">
            <Link to="/">
                <bs.Navbar.Brand className="nav-brand">
                    <Image alt="Site Icon" src={SiteIcon} width="180" height="60" rounded href="/home" />
                    <div className="nav-brand" style={{textAlign:'center', color:"#00B964",letterSpacing:"2px"}}>- analytics -</div>
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link nav-link-ltr color-white" style={{color:"white"}}>Home</Link>
                    <Link to="/about" className="nav-link nav-link-ltr" style={{color:"white"}}>About</Link>
                    <Link to="/help" className="nav-link nav-link-ltr" style={{color:"white"}}>Help</Link>
                    <Link to="/predict" className="nav-link nav-link-ltr" style={{color:"white"}}>Predict</Link>
                </bs.Nav>
                <bs.Nav style={{color:"white"}}>
                    {/* <bs.NavDropdown style={{color:"#f8f9fb"}} title="Sign Out" alignRight >
                        <bs.NavDropdown.Item >My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown> */}
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}

export default HeaderContainer