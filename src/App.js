import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Contact from './screens/Contact/Contact';
import Projects from './screens/Projects/Projects';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
