import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<h1>HOME</h1>} />
        <Route path='/projects' element={<h1>Projects</h1>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
