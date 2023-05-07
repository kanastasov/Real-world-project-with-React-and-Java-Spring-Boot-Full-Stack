import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import MovieScreen from './screens/MovieScreen';
function App() {
  return (
    <div>
      
      <Header />
      <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' element={<HomeScreen/>} exact/>
        <Route path='/movie/:id' element={<MovieScreen />} exact/>
        </Routes>

      </Container>



      </main>

      <Footer />
      
     
    </div>
  );
}

export default App;
