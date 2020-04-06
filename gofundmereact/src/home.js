import React from 'react';
import * as bs from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {useRouteMatch} from "react-router-dom";


function Home(props) {

    return (
        <bs.Container fluid className="p-0">
            <bs.Row md="0">
                <p>
                    All the campaigns will show up here
                </p>
            </bs.Row>
        </bs.Container>
    )

}
export default Home

