
import './style/App.css';
import { Header } from './components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dota2Hero from './pages/dota2-Hero';
import Proplayer from './pages/pro-player';
import HomePages from './pages/homepages';

function App() {
 return (
    <Router>
      <div>
        <nav>
          <Header/>
        </nav>

        <Switch>
          <Route path="/Dota2Hero">
            <Dota2Hero/>
          </Route>
          <Route path="/ProPlayer">
            <Proplayer />
          </Route>
          <Route path="/">
            <HomePages/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
