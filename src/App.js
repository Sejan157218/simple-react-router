import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Pagenotfround from './Components/Pagenotfround/Pagenotfround';
import Friends from './Components/Friends/Friends';
// import { BrowserRouter,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Friends></Friends>


      {/* <BrowserRouter>
      <Switch>
        <Route path="/home" >
        <Home></Home>
        </Route>
        <Route path="/about" >
        <About></About>
        </Route>
        <Route path="/contact" >
        <Contact></Contact>
        </Route>
        <Route exact path="/" >
        <Home></Home>
        </Route>
        <Route>
        <Pagenotfround></Pagenotfround>
        </Route>
      </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
