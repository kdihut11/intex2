import React from 'react'
import * as bs from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import AppContext from './context'

function LeftContainer(props) {
    const context = React.useContext(AppContext)
    const campaigns = context.campaigns
    const sortedDateCampaigns = campaigns.slice().sort((a, b) => b.launch_date - a.launch_date)
    const sortedGoalCampaigns = campaigns.slice().sort((a,b) => b.goal - a.goal)

    return (
        <div>
            <h2 className='text-center'>
                Categories
            </h2>
            <bs.Nav className="flex-column">
                <NavLink key={sortedDateCampaigns.launch_date} to={'/sort/date'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Campaign Date</NavLink>
                <NavLink key={sortedGoalCampaigns.goal} to={'/sort/goal'} className="nav-link nav-link-ltr" style={{ color: 'black' }}>Sort By Donation Goal</NavLink>
            </bs.Nav>
        </div>
    )  
}

export default LeftContainer