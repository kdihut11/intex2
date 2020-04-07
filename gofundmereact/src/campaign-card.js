import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AppContext from "./context.js";

export default function ProductCard(props){ 
    const context = React.useContext(AppContext);


        return (
            <Card variant = "top" className="my-2">
                <Card.Body>
                        
                            <Link to={'/CampaignDetails/' + props.item.id} 
                            className="float-right">
                                <Button>Details</Button>
                                </Link>
                            
                        
                    <Card.Img src={`${process.env.PUBLIC_URL}/media/product_images/${props.item.filename}-1.png`}/>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>${props.item.price}</Card.Text>
                </Card.Body>
            </Card>
        );
}
