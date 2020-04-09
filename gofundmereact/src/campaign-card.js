import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CampaignCard(props){ 
    const item = props.item
    let title = item.title
    let image_url = item.campaign_image_url
    
    if (item.title.length > 20)
    {
        title = item.title.slice(0,19)
        title = title + "..."
    } 

    if (item.campaign_image_url === "")
    {
        image_url = "/media/no_image.jpeg"
    }

        return (
            <Card className="my-2 p-0 shadow" 
                    style={{
                        height:"285px",
                        width:"240px"

                    }}>
                <Card.Body className="m-0 p-0">                                          
                    <Card.Img variant="top" className="m-0 p-0" src={image_url} alt="no image"
                                style={{
                                    maxHeight:"160px",
                                    minHeight:"160px",
                                    height:"100%",
                                    width:"100%"
                                }}/>

                    <Card.Subtitle className="mt-2 mx-2 mb-3">{title}</Card.Subtitle>
                    <Card.Text className="px-2 py-0 m-0" style={{fontSize:"13px"}}><b>Raised:</b> ${item.current_amount}</Card.Text>
                    <Card.Text className="px-2 py-0 m-0" style={{fontSize:"13px"}}><b>Donators:</b> {item.donators}</Card.Text>
                    {/* <Link to={'/CampaignDetails/' + item.campaign_id}>
                        <Card.Footer style={{backgroundColor:"#6c757d",height:"5px",textAlign:"center"}}>
                            <span style={{color:"#f8f9fb"}}>More Details</span>
                        </Card.Footer>
                    </Link> */}
                    <Card.Text className="pt-1" style={{textAlign:"center", color:"#001540"}}>
                        <Link to={'/CampaignDetails/' + item.campaign_id}><small className="text-muted"><b>More Details</b></small></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
}
