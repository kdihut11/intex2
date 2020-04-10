import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CampaignCard(props){ 
    const item = props.item
    let title = item.title
    let image_url = item.campaign_image_url
    let scoreColor = 'black'
    
    if (item.title.length > 19)
    {
        title = item.title.slice(0,18)
        title = title + "..."
    } 

    if (item.campaign_image_url === "")
    {
        image_url = "/media/no_image.jpeg"
    }

    if(item.days_created === "Excellent"){
        scoreColor = 'green'
    }
    else if(item.days_created === "Good"){
        scoreColor = 'orange'
    }
    else if(item.days_created === "Poor"){
        scoreColor = 'red'
    }
      
        return (
            <Card className="my-2 p-0 shadow" 
                    style={{
                        height:"310px",
                        width:"230px"

                    }}>
                <Card.Body className="m-0 p-0">                                          
                    <Card.Img variant="top" className="m-0 p-0" src={image_url} alt="no image"
                                style={{
                                    maxHeight:"175px",
                                    minHeight:"175px",
                                    height:"100%",
                                    width:"100%"
                                }}/>

                    <Card.Subtitle className="mt-2 mx-2 mb-3">{title}</Card.Subtitle>
                    <Card.Text className="px-2 py-0 m-0" style={{fontSize:"13px"}}><b>Rating:</b> <span style={{color:scoreColor}}>{item.days_created}</span></Card.Text>
                    <Card.Text className="px-2 py-0 m-0" style={{fontSize:"13px"}}><b>Current Amount:</b> ${item.current_amount}</Card.Text>
                    <Card.Text className="px-2 py-0 m-0" style={{fontSize:"13px"}}><b>Goal Amount:</b> ${item.category}</Card.Text>
                    <Card.Text className="pt-1" style={{textAlign:"center", color:"#001540"}}>
                        <Link to={'/CampaignDetails/' + item.campaign_id} ><small className="text-muted"><b>More Details</b></small></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
}
