import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ProductCard(props){ 
    const item = props.item

        return (
            <Card className="my-2 p-0 shadow" 
                    style={{
                        height:"300px",
                        width:"200px"

                    }}>
                <Card.Body className="m-0 p-0">                                          
                    <Card.Img variant="top" className="m-0 p-0" src={item.campaign_image_url}
                                style={{
                                    maxHeight:"150px",
                                    minHeight:"150px",
                                    height:"100%",
                                }}/>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.donators}</Card.Text>
                    <Link to={'/CampaignDetails/' + item.campaign_id} className=""
                            style={{
                                position:"absolute",

                            }}>
                        <Button variant="outline-secondary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
}
