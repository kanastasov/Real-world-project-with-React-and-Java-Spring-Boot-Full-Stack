import React from 'react';
import {Card, CardImg, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ShowMoreText from "react-show-more-text";

const Reviews = ({review}) => {

    function executeOnClick() {
        console.log('executeOnClick')
    }
    if(review?.author_details?.avatar_path != null){
        var tempAvatar = review?.author_details?.avatar_path.substring(1);

    }
console.log(tempAvatar)
    return (
        
        <Card className='my-3 p-3 rounded'>
            <a href={`/api/people/${review?.id}`}>
        <CardImg 
        src = {tempAvatar} variant = 'top'/>
            </a>

    <Card.Body>
        <Col>
            <Link to={`/review/${review?.id}`}>
                <Card.Title style={{color: 'black'}} as ='div'>
                    <strong>A Review by {review.author}</strong> <span> {review.author_details.rating}</span>

                </Card.Title>
            
            </Link>
        
        </Col>
   
               
     

        <Card.Text style={{color: 'black'}} as ='h4'>


        <p>Written by {review?.author} on {review.created_at}</p> 
        </Card.Text>
        <Card.Text style={{color: 'grey'}} as ='h5'>

        <ShowMoreText
                /* Default options */
                lines={5}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick}
                expanded={false}
                width={880}
                truncatedEndingComponent={"... "}
            >
                 <p>{review.content}</p>

            </ShowMoreText>
                
        {/* <p>{review.content}</p> */}
        </Card.Text>
      

    </Card.Body>
        </Card>
        
        
        );
}
 
export default Reviews;