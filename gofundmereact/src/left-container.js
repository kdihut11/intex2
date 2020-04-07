import React from 'react'
import * as bs from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function LeftContainer(props) {
    return (
        <div className="mt-4">
            <bs.Nav className="flex-column">
                <NavLink to="/" className="nav-link nav-link-ltr" style={{ color: 'black' }}>Categories to Search by</NavLink>
            </bs.Nav>
        </div>
    )  
}

export default LeftContainer