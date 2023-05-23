import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import TV from '../components/TV';
import { useDispatch, useSelector } from 'react-redux';
import { listTv,listTVSearch } from '../actions/tvActions';
import Pagination from '../components/Pagination';
import { searchData } from '../util/helper';


const HomeTVScreen = ({tvRender}) => {
    const tv = 'tv'
    const dispatch = useDispatch()
    const tvList = useSelector(state => state.tvList)
    const {tvs} = tvList
    const [searchTerm, setSearchTerm] = useState("")
    const [totalResults, setTotalResults] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentTv, setCurrentTv] = useState(tvList)

    console.log(tvRender)
    useEffect(() => {
        dispatch(listTv(tvRender))

    }, [dispatch])

    function handleChange(value) {
        setSearchTerm(value)
    }

    async function search() {
        dispatch(listTVSearch(tv, searchTerm))
        const {results, total_pages, page, total_results} = await searchData(tv, searchTerm);
        setTotalResults(total_results)
        console.log(total_results)
        if(results.length > 1){
            setCurrentTv(results)
        }
    }

    async function nextPage(pageNumber) {
        const {results, total_pages, page, total_results} = await searchData(tv, searchTerm, pageNumber);
        setCurrentTv(results)
        console.log(results)
        setCurrentPage(pageNumber)
        
    }

    const numberPages = Math.floor(totalResults / 20)

    return (
       <>
         <div className='search-flex'>
            <input type="text"
            name="search-term"
            onChange={(e) => handleChange(e.target.value)}
            id="search-term"
            placeholder='Search for a movie...'/>
            <button className='btn' onClick={search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </button>     
       </div>

       {totalResults > 20 ? <Pagination pages ={numberPages} nextPage={nextPage} currentPage={setCurrentTv} /> : null}
        Latest Movies

        <Row>
        {currentTv.length > 1 ?  currentTv.map(tv => (
                <Col key={tv.id} sm={12} md={4} lg={4}xl={3}>
                    <TV tv={tv} />
                </Col>
            )) : 

             tvs.map(tv => (
                <Col key={tv.id} sm={12} md={4} lg={4}xl={3}>
                    <TV tv={tv} />
                </Col>
            ))}

        </Row>
       
       </>
        
        
        );
}
 
export default HomeTVScreen;