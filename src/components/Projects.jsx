import React, {Component, Render} from 'react';
import JobSharks from './jobsharks';
import CodeWear from './codewear';
import MyLandlordScore from './mylandlordscore';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Container,
  Grid
} from 'semantic-ui-react'

class Projects extends React.Component{
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){

  const { match } = this.props

  return(
  <div>
 
   <Route
      exact
      path={match.url}
      render={() => (
      
        <Container className="animated fadeInDown">
            
            <h2>Projects</h2>
            
            
              <Grid columns={1} divided>
                <Grid.Row>

                  <Grid.Column width="16" className="project">
                    <Menu.Item as={Link} to={`${match.url}/jobsharks`} name='jobsharks'>
                      <Grid>
                      <Grid.Row columns="2" centered>
                        <Grid.Column width="5">
                          <Image size="medium" src='http://fillmurray.com/300/300'/>
                        </Grid.Column>
                        <Grid.Column width="11">
                          <h1>JobSharks</h1>
                        </Grid.Column>
                      </Grid.Row>
                      </Grid>
                    </Menu.Item>
                  </Grid.Column>

                    <Grid.Column width="16" className="project">
                      <Menu.Item as={Link} to={`${match.url}/mylandlordscore`} name='mylandlordscore'>
                        <Grid>
                        <Grid.Row columns="2" centered>
                          <Grid.Column width="5">
                            <Image size="medium" src='http://fillmurray.com/300/300'/>
                          </Grid.Column>
                          <Grid.Column width="11">
                            <h1>MyLandlordScore</h1>
                          </Grid.Column>
                        </Grid.Row>
                        </Grid>
                      </Menu.Item>
                    </Grid.Column>

                    <Grid.Column width="16" className="project">
                      <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                      <Grid>
                        <Grid.Row columns="2" centered>
                          <Grid.Column width="5">
                            <Image size="medium" src='http://fillmurray.com/300/300'/>
                          </Grid.Column>
                          <Grid.Column width="11">
                            <h1>CodeWear</h1>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Menu.Item>
                  </Grid.Column>
                  
                </Grid.Row>
                
                </Grid>
        </Container>

    )}/>
    

    <Route path={`${match.url}/mylandlordscore`} component={MyLandlordScore}/>
    <Route path={`${match.url}/codewear`} component={CodeWear}/>
    <Route path={`${match.url}/jobsharks`} component={JobSharks}/>
   


    

     
  </div>
  )
  }
}

export default Projects;








