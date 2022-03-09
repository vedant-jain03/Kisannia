import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Home from './Components/Home';
import { HashRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Components/About';
import Blog from './Components/Blog';
import { useState } from 'react';
import { createContext } from 'react';
export const currentDescription = createContext(null);
function App() {
  const [description, setdescription] = useState();
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <currentDescription.Provider value={{description, setdescription}} >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
          </currentDescription.Provider>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
