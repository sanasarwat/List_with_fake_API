import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Create from './pages/Create.js'
import Detail from './pages/Detail.js'
import List from './pages/List.js'
import Search from './pages/Search.js'
import Update from './pages/Update.js'
import ListArray from './pages/ListArray.js'



function App() {
  return (
    <Router>
    <div>
     <Route exact path='/'  component ={Home} />
     <Route exact path='/About'  component ={About} />
     <Route exact path='/List'  component ={List} />
     <Route exact path='/Detail'  component ={Detail} />
     <Route exact path='/Serach'  component ={Search} />
     <Route exact path='/Update'  component ={Update} />
     <Route exact path='/Create'  component ={Create} />
    </div>
    </Router>


    //<ListArray/>
    
  );
}

export default App;
