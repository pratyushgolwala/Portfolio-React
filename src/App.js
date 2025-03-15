import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from './components/About';


function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
    </>
  );
}

export default App;
