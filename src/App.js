import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Carte from './Carte';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/carte'>
            <Carte/>
          </Route>
        </Switch>
      </Router>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
