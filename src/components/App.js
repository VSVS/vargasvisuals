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
    this.state = { 
      visible: false, 
      menuIcon: 'ellipsis vertical icon',
      hover: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
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
  responsiveMenu(){
    // update state for the screen size 
    // use props to use this state to change
    // the animation prop for <Sidebar>
  }
  onMouseEnterHandler() {
    this.setState({hover: true});
    console.log('enter'); 
  }
  onMouseLeaveHandler(){
    this.setState({hover: false});
    console.log('leave');
  }
  toggleVisibility(){
    this.setState({ 
      
      visible: !this.state.visible,
    });

    if(this.state.menuIcon == 'ellipsis vertical icon' ){
      this.setState({ menuIcon: 'window close outline' })
    } else {
      this.setState({ menuIcon: 'ellipsis vertical icon' })
    }

    console.log('clicked');
  }
  render(){
    const { visible } = this.state
    const style = {
      height: '100vh',
      sidebar: {
        width:'20px',
        height:'100vh',
        position:'fixed',
        top:'0px',
        right:'-1px',
        background:'#333'
      }
    }
    return(
      
      <Router>
          <div>

            <Button className='main-menu' onClick={this.toggleVisibility}><Icon name={this.state.menuIcon} /></Button>

            {/* Main Body */}
            <Sidebar.Pushable as={Segment}>
              
              <Sidebar as={Menu} onMouseOut={this.toggleVisibility} animation='overlay' direction='right' width='thin' visible={visible} icon='labeled' vertical inverted>
                
                <Menu.Item as={Link} to='/' name='home' ><Icon name='home' />Home</Menu.Item>
                <Menu.Item as={Link} to='/bio' name='bio'><Icon name='user circle' />Bio</Menu.Item>
                <Menu.Item as={Link} to='/projects' name='projects'><Icon name='grid layout' />Projects</Menu.Item>
                <Menu.Item as={Link} to='/resume' name='resume'><Icon name='file text outline' />Resume</Menu.Item>
                <Menu.Item as={Link} to='/hire' name='hire'><Icon name='thumbs outline up' />Hire Me</Menu.Item>

              </Sidebar>
              
              {/* Left Sidebar Menu */}
              <Sidebar.Pushable as={Segment}>
                <Sidebar.Pusher>
                  <Segment basic>
                    <Container className="">
                      <Route exact path="/" component={Home}/>
                      <Route path="/bio" component={Bio}/>
                      <Route path="/projects" component={Projects}/>
                      <Route path="/resume" component={Resume}/>
                      <Route path="/hire" component={Hire}/>
                      <div style={style.sidebar} onMouseOver={this.toggleVisibility}></div>
                    </Container>
                    <footer></footer>
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>


            </Sidebar.Pushable>

          </div>
      </Router>
    )
  }
}

export default App