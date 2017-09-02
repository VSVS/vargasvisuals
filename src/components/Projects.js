import React, {Component} from 'react';
import JobSharks from './jobsharks';
import CodeWear from './codewear';
import MyLandlordScore from './mylandlordscore';
import TransitionGroup from 'react-addons-css-transition-group';
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

const Projects = ({match}) => (
  <div>
    <h2>Projects</h2>
    <TransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}
    >
      <Grid columns={3} divided>
        <Grid.Row>

          <Grid.Column>
            <Menu.Item as={Link} to={`${match.url}/jobsharks`} name='jobsharks'>

              <Image src='http://fillmurray.com/300/300'/>
              JobSharks

            </Menu.Item>
          </Grid.Column>

          <Grid.Column>
            <Menu.Item as={Link} to={`${match.url}/mylandlordscore`} name='mylandlordscore'>

              <Image src='http://fillmurray.com/300/300'/>
              MyLandlordScore

            </Menu.Item>

          </Grid.Column>

          <Grid.Column>
            <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>

              <Image src='http://fillmurray.com/300/300'/>
              Codewear

            </Menu.Item>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
   </TransitionGroup>


    <Route path={`${match.url}/mylandlordscore`} component={MyLandlordScore}/>
    <Route path={`${match.url}/codewear`} component={CodeWear}/>
    <Route path={`${match.url}/jobsharks`} component={JobSharks}/>

    <Route
      exact
      path={match.url}
      render={() => (
      <h3>Please select a project.</h3>
    )}/>

     
  </div>
)

export default Projects;
