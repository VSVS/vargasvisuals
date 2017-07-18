import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../css/Projects.css';



const Project = ({ match }) => (
  <div>
    <h3>{match.params.projectId}</h3>
  </div>
)

const Projects = ({ match }) => (
  <div>
    <h2>Projects</h2>
    <ul>
      <li>
        <Link to={`${match.url}/jobsharks`}>
          JobSharks
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/mylandlordscore`}>
          MyLandlordScore
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/codewear`}>
          CodeWear
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:projectId`} component={Project}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a project.</h3>
    )}/>
  </div>
)

export default Projects;
