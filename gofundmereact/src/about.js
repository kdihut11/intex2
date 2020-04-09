import React from 'react';
import * as bs from 'react-bootstrap';

function About(props) {
    return (
        <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <bs.Col>
                    <h1>About</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row noGutters>
                <bs.Col>
                    <bs.Row className="mb-3">
                        <bs.Col>
                        At gofundme analytics, we strive to offer the best solutions to current and future gofundme campaign creators and collaborators. We seek to use the best technology and the best methods in order to achieve the most outstanding results. 
                        </bs.Col>
                    </bs.Row>  
                    <bs.Row className="mb-3">
                        <bs.Col>
                        Our predictor, created by Luke Forthman, can predict the amount of donors, money raised and overall quality of any gofundme campaign given only a few parameters.
                        </bs.Col>
                    </bs.Row>
                    <bs.Row className="mb-2">
                        <bs.Col>
                        Searching and sorting current and past campaigns has also been made possible through our state-of-the-art search engine.
                        </bs.Col>
                    </bs.Row>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}
export default About