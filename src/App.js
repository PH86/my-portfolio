import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import Projects from './components/Pages/Projects';



function App() {
  return (
    <>
    <Router>
    <Navbar />

    <Switch>
      <Route path='/my-portfolio' exact component={Home} />
      <Route path='/my-portfolio/about' component={About} />

      <Route path='/my-portfolio/projects' component={Projects} />
      <Route path='/my-portfolio/contact' component={Contact}/>
    </Switch>
<Footer />

    </Router>
     
   

    </>
  );
}

export default App;
