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
    }

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