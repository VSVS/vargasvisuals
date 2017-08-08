import React from 'react'
import Home from './Home'
import Bio from './Bio'
import Hire from './Hire'
import Resume from './Resume'
import Projects from './Projects'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { visible: false }
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress(this)
  }

  componentWillUpdate(nextProps, nextState) {
    // when the menu becomes visible, setup some handlers so we can close the menu easily
    if (nextState.visible == true) {
      document.addEventListener('keydown', this.handleKeyPress);
      document.querySelector('.pusher').addEventListener('click', this.handleClick);
    }
    else {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.querySelector('.pusher').removeEventListener('click', this.handleClick);
    } 
  }

  handleClick = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  }
  handleKeyPress = (e) => {
    if(e.keyCode === 27 && this.state.visible) {
      this.setState({ visible: false })
    }
  }
  
  toggleVisibility(){
    this.setState({ visible: !this.state.visible })
    console.log('clicked');
  }
  render(){
    const { visible } = this.state
    const style = {
      height: '100vh'
    }
    return(
      
      <Router>

          <div>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='scale down' direction='bottom' visible={visible} inverted>
                <Menu.Item as={Link} to='/' name='home' >
                  <Icon name='home' />
                  Im Home
                </Menu.Item>
                <Menu.Item as={Link} to='/bio' name='gamepad'>
                  <Icon name='gamepad' />
                  Bio
                </Menu.Item>
                <Menu.Item as={Link} to='/projects' name='camera'>
                  <Icon name='camera' />
                  Projects
                </Menu.Item>
                <Menu.Item as={Link} to='/resume' name='resume'>
                  <Icon name='camera' />
                  Resume
                </Menu.Item>
                <Menu.Item as={Link} to='/hire' name='camera'>
                  <Icon name='camera' />
                  Hire Me
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic>
                  <Container className="">
                    <Route exact path="/" component={Home}/>
                    <Route path="/bio" component={Bio}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/hire" component={Hire}/>
                  </Container>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>

      </Router>
    )
  }
}

export default App