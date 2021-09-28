import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Pagenotfround from './Components/Pagenotfround/Pagenotfround';
import Friends from './Components/Friends/Friends';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>

      <Route exact path="/" >
        <Home></Home>
        </Route>
        <Route path="/home" >
        <Home></Home>
        </Route>
        <Route path="/about" >
        <About></About>
        </Route>
        <Route path="/friends">
        <Friends></Friends>
        </Route>
        <Route path="/friend/:friendID">
        <FriendDetails></FriendDetails>
        </Route>
        <Route path="/contact" >
        <Contact></Contact>
        </Route>
        <Route path = "*">
        <Pagenotfround></Pagenotfround>
        </Route>


      </Switch>
      </Router>
    </div>
  );
}

export default App;
