import React from 'react';
import Show from './data.js';
import './App.css';
import Logup from './loginup.js'; 
import Logout from './logout.js'; 
import Adding from './addproduct.js';  
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom'




function App() {
  return (
     <Router>
    
    <div className="App">
      <Switch>
         <Route path='/add' component={Adding} />
        <Route path='/Logout' component={Logout} />
        <Route path='/check' component={Logup} />
        <Route path='/' component={Show} />
      </Switch>
         
      
    </div>
  </Router>
  );
}

export default App;
