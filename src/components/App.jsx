import React from 'react'
import Home from './Home'
import Bio from './Bio'
import Hire from './Hire'
import Resume from './Resume'
import Projects from './Projects'
import NotFound from './NotFound'
import Navigation from './Navigation';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Container,
  Grid,
  List,
  Sticky,
  Rail
} from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  handleClick = () => {
    if (this.state.visible) {
      this.setState({visible: false});
    }
  }
  handleKeyPress = (e) => {
    if (e.keyCode === 27 && this.state.visible) {
      this.setState({visible: false})
    }
  }
  onMouseEnterHandler = () => {
    this.setState({hover: true});
    console.log('enter');
  }
  onMouseLeaveHandler = () => {
    this.setState({hover: false});
    console.log('leave');
  }
  
  

  render() {
  
    return (
        <Router>
          <div> 
            <Navigation>

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/bio" component={Bio}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/hire" component={Hire}/>
                <Route component={NotFound}/>
              </Switch>
            
              <Footer/>
            </Navigation>

          </div>
        </Router>
    )
  }
}

export default App