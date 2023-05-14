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
function App() {
  return (
    <div>
      
      <Header />
      <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' element={<HomeScreen/>} exact/>
        <Route path='/movie/:id' element={<MovieScreen />} exact/>
        <Route path='/api/tv/' element={<HomeTVScreen />} exact/>
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
