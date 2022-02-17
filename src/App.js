import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Contact from './screens/Contact/Contact';
import Projects from './screens/Projects/Projects';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
