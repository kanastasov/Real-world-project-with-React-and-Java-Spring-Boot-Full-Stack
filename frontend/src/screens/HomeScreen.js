import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import Movies from '../components/Movies';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies, listMovieSearch } from '../actions/movieActions';
import { searchData } from '../util/helper';
import Pagination from '../components/Pagination';
const HomeScreen = ({movieRender}) => {
    let movie = 'movie'
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movieList)
    const {movies} = movieList
    const [searchTerm, setSearchTerm] = useState("")
    const [totalResults, setTotalResults] = useState(0)
    const [ setCurrentPage] = useState(1)
    const [currentMovies, setCurrentMovies] = useState(movieList)
    useEffect(() => {
        dispatch(listMovies(movieRender))


    }, [dispatch, movieRender])

    function handleChange(value) {
        setSearchTerm(value)
    }

    async function search() {
        dispatch(listMovieSearch(movie, searchTerm))
        const {results, total_results} = await searchData(movie, searchTerm);
        setTotalResults(total_results)
        console.log(total_results)
        if(results.length > 1){
            setCurrentMovies(results)
        }
    }

    async function nextPage(pageNumber) {
        const {results} = await searchData(movie, searchTerm, pageNumber);
        setCurrentMovies(results)
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

       {totalResults > 20 ? <Pagination pages ={numberPages} nextPage={nextPage} currentPage={currentMovies} /> : null}
        Latest Movies

        <Row>
            {currentMovies.length > 1 ?  currentMovies.map(movie => (
                <Col key={movie.id} sm={12} md={4} lg={4}xl={3}>
                    <Movies movie={movie} />
                </Col>
            )) : 
            movies.map(movie => (
                <Col key={movie.id} sm={12} md={4} lg={4}xl={3}>
                    <Movies movie={movie} />
                </Col>
            ))
            
            }

        </Row>
       
       </>
        
        
        );
}
 
export default HomeScreen;