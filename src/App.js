import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Home from './Components/Home';
import { HashRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Components/About';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
