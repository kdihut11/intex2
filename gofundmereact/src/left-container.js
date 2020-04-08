import React from 'react'
import * as bs from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function LeftContainer(props) {
    return (
        <div>
            <h2 className='text-center'>
                Categories
            </h2>
            <bs.Nav className="flex-column">
                <NavLink to={'/search/sort/date'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Campaign Date</NavLink>
                <NavLink to={'/search/sort/currentAmount'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Current Amount Raised</NavLink>
                <NavLink to={'/search/sort/goal'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Donation Goal</NavLink>

            </bs.Nav>
        </div>
    )  
}

export default LeftContainer