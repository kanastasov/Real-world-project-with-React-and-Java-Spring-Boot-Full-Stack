import axios from 'axios';

export const localObj={
    currentPage: window.location.pathname,
    search:{
        term:'',
        type:'',
        page:1,
        totalPages:1,
        totalResults:0,
    },
    api:{
        key: '134394aa4ce3b3f13628fa60f2f17bfe',
        url: 'https://api.themoviedb.org/3/'
    },

    backend: {
        url: 'http://localhost:8081/api/'
    },

}

// const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=134394aa4ce3b3f13628fa60f2f17bfe';
export async function fetchData(endpoint){
    const key=  localObj.api.key;
    const url = localObj.api.url;

    console.log(`${url}${endpoint}?api_key=${key}&language=en-Us`)
    const response = await fetch(`${url}${endpoint}?api_key=${key}&language=en-Us`);
    const data = await response.json();
    return data
}


export async function searchData(movie, searchTerm, pageNumber =1){
    const key=  localObj.api.key;
    const url = localObj.api.url;


    const response = await fetch(`${url}search/${movie}?api_key=${key}&language=en-Us&query=${searchTerm}&page=${pageNumber}`);
    console.log(`${url}search/${movie}?api_key=${key}&language=en-Us&query=${searchTerm}&page=${pageNumber}`)
    const data = await response.json();
    return data
}





// http://localhost:8081/api/movies
export async function backEndCall(endpoint, tempObj){
    const url = localObj.backend.url;

    console.log(`${url}${endpoint}`)



    // const response = await fetch(`${url}${endpoint}`);
    const response = axios.post(`${url}${endpoint}`, tempObj)
    console.log(response)

    const data = await response.json();
    return data

}