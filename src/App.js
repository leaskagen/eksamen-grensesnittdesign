import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Delivery from './pages/Delivery';
import Error from './pages/Error';

function App() {  
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
