import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Songs from './components/Songs';
import Artists from './components/Artists';
import Writers from './components/Writers';

function App() {
  return (
    <div>
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/writers" component={Writers} />
          <Route exact path="/songs" component={Songs} />
        </Router>
    </div>
  );
}

export default App;