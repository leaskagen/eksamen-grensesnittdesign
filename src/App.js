  import './App.css';


// Import responsive breakpoints
import './css/mobile.css';
import './css/tablet.css';
import './css/desktop.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Delivery from './pages/Delivery';
import Error from './pages/Error';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
