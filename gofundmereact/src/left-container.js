import React from 'react'
import * as bs from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function LeftContainer(props) {
    return (
        <div>
            <h4 className='text-center m-2'>
                Categories
            </h4>
            <bs.Nav className="flex-column">
                <NavLink to={'/search/sort/date'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Campaign Date</NavLink>
                <NavLink to={'/search/sort/currentAmount'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Current Amount Raised</NavLink>
                <NavLink to={'/search/sort/goal'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Donation Goal</NavLink>
                <NavLink to={'/search/sort/nosort'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Turn Sorting Off</NavLink>

            </bs.Nav>
        </div>
    )  
}

export default LeftContainer