import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import MovieScreen from './screens/MovieScreen';
import HomeTVScreen from './screens/HomeTVScreen';
import TVScreen from './screens/TVScreen';
import PersonScreen from './screens/PersonScreen';
import PersonDetailsScreen from './screens/PersonDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReviewsScreen from './screens/ReviewsScreen';
function App() {
  return (
    <div>
      
      <Header />
      <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' element={<HomeScreen movieRender={'popular'} />} exact/>
        <Route path='/api/nowPlaying' element={<HomeScreen movieRender={'now_playing'}/>} exact/>
        <Route path='/api/upcoming' element={<HomeScreen movieRender={'upcoming'}/>} exact/>
        <Route path='/api/topRated' element={<HomeScreen movieRender={'top_rated'}/>} exact/>
        <Route path='/movie/:id' element={<MovieScreen />} exact/>
        <Route path='/movie/:id/review' element={<ReviewsScreen />} exact/>
        <Route path='/api/tv/' element={<HomeTVScreen tvRender={'popular'}/>} exact/>
        <Route path='/api/tv/airingToday/' element={<HomeTVScreen  tvRender={'airing_today'} />} exact/>
        <Route path='/api/tv/on-the-air/' element={<HomeTVScreen  tvRender={'on_the_air'} />} exact/>
        <Route path='/api/tv/topRated/' element={<HomeTVScreen  tvRender={'top_rated'} />} exact/>
        <Route path='/api/login/' element={<LoginScreen />} exact/>
        <Route path='/api/register/' element={<RegisterScreen />} exact/>
        <Route path='/api/tv/:id' element={<TVScreen />} exact/>
        <Route path='/api/people/' element={<PersonScreen />} exact/>
        <Route path='/api/people/:id' element={<PersonDetailsScreen />} exact/>
       

        </Routes>

      </Container>



      </main>

      <Footer />
      
     
    </div>
  );
}

export default App;
