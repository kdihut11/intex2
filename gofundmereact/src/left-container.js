import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LeftContainer(props) {
    return (
        <div>
            <h4 className='pl-4 m-2'>
                Sort by
            </h4>
            <div className="flex-column">
                <Link to={'/search/sort/date'} className="nav-link nav-link-ltr" style={{ color: 'black', fontSize: '.79rem'}}>Campaign Date</Link>
                <Link to={'/search/sort/currentAmount'} className="nav-link nav-link-ltr" style={{ color: 'black', fontSize: '.79rem' }}>Current Amount Raised</Link>
                <Link to={'/search/sort/goal'} className="nav-link nav-link-ltr" style={{ color: 'black', fontSize: '.79rem' }}>Donation Goal</Link>
                <Link to={'/search/sort/nosort'} className="nav-link nav-link-ltr" style={{ color: 'black', fontSize: '.79rem' }}>Turn Sorting Off</Link>

            </div>
        </div>
    )  
}

export default LeftContainer