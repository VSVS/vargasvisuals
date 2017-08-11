import React, { Component } from 'react'
import {Container, Tab} from 'semantic-ui-react';
class Home extends Component {

  render() {
    const style ={
      border: "solid 3px blue"
    }
    const panes = [
    { menuItem: 'Languages', render: () => <Tab.Pane>List of Languages</Tab.Pane> },
    { menuItem: 'Frameworks', render: () => <Tab.Pane>List of Frameworks</Tab.Pane> },
    { menuItem: 'Libraries', render: () => <Tab.Pane>List of Libraries</Tab.Pane> },
    ]
    return (
      
      <div>
        <div className="hero">
          <h5>Robert Vargas</h5>
          <h1>UX Developer</h1>
          <h5>Growth Marketer</h5>
        </div>
        <div className="skills">
          <Tab panes={panes} />
        </div>
      </div>
      
    )
  }
}

export default Home