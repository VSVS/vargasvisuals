import React, { Component } from 'react';
import { Responsive, Sidebar, Menu, Grid, Container, Icon, Button, Segment } from 'semantic-ui-react';
import { Link} from 'react-router-dom';

class Navigation extends Component {
    state = {
        visible: false,
        menuIcon: 'ellipsis vertical icon',
        hover: false,
        style: {
          background: ''
        }
    }
    componentWillUpdate(nextProps, nextState) {
        // when the menu becomes visible, setup some handlers so we can close the menu
        // easily
        if (nextState.visible === true) {
          document.addEventListener('keydown', this.handleKeyPress);
          document
            .querySelector('.pusher')
            .addEventListener('click', this.toggleVisibility);
        } else {
          document.removeEventListener('keydown', this.handleKeyPress);
          document
            .querySelector('.pusher')
            .removeEventListener('click', this.toggleVisibility);
        }
      }
   
    toggleVisibility = () => {

        this.setState({
          visible: !this.state.visible
        });
    
        if (this.state.menuIcon === 'ellipsis vertical icon') {
          this.setState({menuIcon: 'remove'})
        } else {
          this.setState({menuIcon: 'ellipsis vertical icon'})
        }
    
        console.log('clicked');
    }
    
    render() {
        const {visible} = this.state
        const { children } = this.props
        const stylez = {
            layout: {
                display: "flex", flex: 1, minHeight: "100vh", flexDirection: "column", backgroundColor: '#E5E5E5'
            }
        }
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar.Pusher>
                        <header>
                            <Container>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Menu.Item as={Link} to="/" position='left'>
                                            <h1>VSVS</h1>
                                        </Menu.Item>
                                        <Menu.Item position='right'>
                                            <Button style={{zIndex:'9999'}} className='main-menu' onClick={this.toggleVisibility}><Icon name={this.state.menuIcon}/></Button>
                                        </Menu.Item>
                                    </Grid.Column>
                                </Grid.Row>
                            </Container>
                        </header>

                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            direction='right'
                            width='thin'
                            visible={visible}
                            icon='labeled'
                            vertical
                            inverted
                            
                            >

                            
                            <Menu.Item as={Link} to='/' name='home'><Icon name='home'/>Home</Menu.Item>
                            <Menu.Item as={Link} to='/bio' name='bio'><Icon name='user circle'/>Bio</Menu.Item>
                            <Menu.Item as={Link} to='/projects' name='projects'><Icon name='grid layout'/>Projects</Menu.Item>
                            <Menu.Item as={Link} to='/resume' name='resume'><Icon name='file text outline'/>Resume</Menu.Item>
                            <Menu.Item as={Link} to='/hire' name='hire'><Icon name='thumbs outline up'/>Hire Me</Menu.Item>
                            

                        </Sidebar>
                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                
                
            </div>
        );
    }
}

export default Navigation;