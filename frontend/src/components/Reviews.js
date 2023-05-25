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
            <div className="card-top">
                <a href={`/api/people/${review?.id}`}>
                    <CardImg src = {tempAvatar} variant = 'top'/>
                </a>
                <Col>
                    <Card.Title style={{color: 'black'}} as ='div'>
                        <Link to={`/review/${review?.id}`}>

                            A Review by {review.author}
                            <span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                    </svg>
                                </span>
                                <span> {review.author_details.rating}</span>
                            </span>
                        </Link>
                    </Card.Title>
                
                <Card.Text style={{color: 'black'}} as ='h8'>
                        <p>Written by <a href="#">{review?.author}</a> on {review.created_at}</p> 
                </Card.Text>
                </Col>
            </div>
            <Card.Body className="ml-70 card-review">
                
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