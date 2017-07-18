import React from 'react'
import Home from './Home'
import Bio from './Bio'
import Hire from './Hire'
import Projects from './Projects'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bio">Bio</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/hire">Hire</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/bio" component={Bio}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/hire" component={Hire}/>
    </div>
  </Router>
)
export default App