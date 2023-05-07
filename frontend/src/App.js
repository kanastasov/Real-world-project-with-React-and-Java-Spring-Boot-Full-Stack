import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div className="App">
      <>
      <Header />
      <HomeScreen />

      <Footer />
      
      </>
    </div>
  );
}

export default App;
