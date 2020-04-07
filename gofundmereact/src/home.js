import React from 'react';
import * as bs from 'react-bootstrap';
import {useRouteMatch} from "react-router-dom";
import CampaignCard from './campaign-card.js'
import AppContext from "./context.js";


function Home(props) {
    const context = React.useContext(AppContext);
    let campaigns = Object.values(context.campaigns);

    console.log(context.campaigns)

    const match = useRouteMatch('/category/:campaign_id')
    if(match)
    {
        campaigns = campaigns.filter(item =>
                item.campaign_id == match.params.campaign_id
        )
    }
    return (
        <bs.Container fluid className="p-0">
            <bs.Row md="0">
                { campaigns.map(item =>
                <bs.Col md='3' >
                    <CampaignCard item={item}/>
                </bs.Col>
                )} 
            </bs.Row>
        </bs.Container>
    )
}
export default Home

