import React, { Component } from 'react';
import JobSharks from './jobsharks';
import CodeWear from './codewear';
import MyLandlordScore from './mylandlordscore';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'


// const Projects = ({ match }) => (
//   <div>
//     <h2>Projects</h2>

//     {/* <ul>
//       <li>
//         <Link to={`${match.url}/jobsharks`}>
//           JobSharks
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/mylandlordscore`}>
//           MyLandlordScore
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/codewear`}>
//           CodeWear
//         </Link>
//       </li>
//     </ul> */}


//       {/* <Sidebar as={Menu} animation='scale down' direction='bottom' visible={visible} inverted> */}
        
  
//       {/* </Sidebar> */}


//   </div>
// )








class Projects extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      doTransform: false,
      position: null,
      color: null,
    };
  }

  onTransitionWillStart(data) {
    if (!data.clickedItemData) {
      // Default animate position if user goto this page directly
      this.setState({
        doTransform: true,
        position: { top: 0, left: 0, height: '100%', width: 10 },
        color: 'gray',
      });
      return;
    }
    this.setState({
      doTransform: true,
      position: data.clickedItemData.position,
      color: data.clickedItemData.color,
    });
  }

  onTransitionDidEnd() {
    // Do your stuff here
    
  }

  transitionManuallyStart() {
    this.setState({
      position: {
        top: 0,
        height: '100%',
        left: 0,
        right: 0,
      },
      doTransform: true,
    });
  }

  transitionManuallyStop() {
    this.setState({
      doTransform: false,
    });
  }




  render() {
    const styles = {

      back: {
        background:'#333',
        color:'#fff',
        padding:'5px',
        borderRadius: '5px',
        textUnderline: 'none'
      }
      
    }
    return (
  
    <div>
      <Menu.Item as={Link} to={`${match.url}/jobsharks`} name='jobsharks' >
          <Icon name='home' />
          jobsharks
        </Menu.Item>
        <Menu.Item as={Link} to={`${match.url}/mylandlordscore`} name='mylandlordscore'>
          <Icon name='gamepad' />
        mylandlordscore
        </Menu.Item>
        <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
          <Icon name='camera' />
          codewear
        </Menu.Item>
          <Route path={`${match.url}/mylandlordscore`} component={MyLandlordScore}/>
          <Route path={`${match.url}/codewear`} component={CodeWear}/>
          <Route path={`${match.url}/jobsharks`} component={JobSharks}/>

          <Route exact path={match.url} render={() => (
            <h3>Please select a project.</h3>
          )}/>

      <div style={{
          transform: this.state.doTransform ?
            `translate3d(0, ${this.state.position.top}px, 0)` :
              undefined,
          height: this.state.doTransform ?
            this.state.position.height : null,
          left: this.state.doTransform ?
            this.state.position.left : null,
          right: this.state.doTransform ?
            this.state.position.left : null,
          backgroundColor: this.state.color,
        }}
        className="transition-item detail-page">

        <Link to="/">
          <span style={styles.back}>Back</span>
        </Link>
        <div>
             {this.props.params.itemId} 
        </div>
      </div>
    </div>
    );
  }
}



export default Projects;
