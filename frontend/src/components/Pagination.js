import React from 'react';
import {Card, CardImg, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Pagination = (props) => {
 let pageLinks = []
 console.log(props)
    for(let i=1; i<=props.pages + 1; i++){
        let active = props.currentPage == i ? 'active' : '';
        pageLinks.push(<li style={{paddingRight:'10px'}} className={`waves-effect ${active}`} key={i} onClick={()=> props.nextPage(i)}><a href='#'>{i}</a> </li>)
    }

    return (
            <div className='container'>
                <div className='row'>
                        <ul className='pagination' >
                            {props.currentPage > 1 ? (
                                <li style={{paddingRight: '10px' }}
                                className={'waves-effect'}
                                onClick={() => props.nextPage(props.currentPage - 1)} ><a href="#">Prev
                                </a> 
                                </li>) : ''}
                                {pageLinks}
                                {props.currentPage < props.pages + 1 ? ( <li className={`waves-effect`} onClick={()=> props.nextPage(props.currentPage + 1)}> 
                                <a href='#'>Next</a>
                                </li>) : ''}

                        </ul>
                </div>

            </div>
           
     
        
        );
}
 
export default Pagination;