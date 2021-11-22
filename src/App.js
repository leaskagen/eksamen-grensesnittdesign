import './App.css';
import './SideMenu.css';

// Import responsive breakpoints
import './breakpoints/mobile.css';
import './breakpoints/tablet.css';
import './breakpoints/desktop.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Delivery from './pages/Delivery';
import Error from './pages/Error';

//import { Home, Menu, Contact, Delivery, Error} from './pages';

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
