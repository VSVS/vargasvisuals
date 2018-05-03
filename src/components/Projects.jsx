import React, {Component, Render} from 'react';
import JobSharks from './jobsharks';
import CodeWear from './codewear';
import GrindBeast from './GrindBeast';
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


import JS from '../imgs/projects/jsharks/slide1.png'
import GB from '../imgs/projects/gb/slide1.png'
import CW from '../imgs/projects/cw/slide1.png'

import lp1 from '../imgs/drone.png'
import lp2 from '../imgs/wheel.png'
import lp3 from '../imgs/jetblue.png'

import Devices from '../imgs/devices.png'
import Circuit from '../imgs/circuit.png'
import CircuitBlue from '../imgs/circuit-blue.png'

import graphicOne from '../imgs/graphic-design/glass-card.jpg'
import graphicTwo from '../imgs/graphic-design/anime-portriat.jpg'
import graphicThree from '../imgs/graphic-design/mso.jpg'
import graphicFour from '../imgs/graphic-design/catchyfreebies.jpg'
import graphicFive from '../imgs/graphic-design/wpv.jpg'
import graphicSix from '../imgs/graphic-design/nook.jpg'
import graphicSeven from '../imgs/graphic-design/brochure.jpg'
import graphicEight from '../imgs/graphic-design/expressfreebies.jpg'
import graphicNine from '../imgs/graphic-design/mls-app.jpg'



class Projects extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {

    const {match} = this.props
    const style = {
      header: {
        backgroundImage:`url(${Circuit})`,
        backgroundSize:'575px',
        backgroundPosition:'-40% -10%',
        backgroundRepeat: 'no-repeat'
      }
    }

    return (
      <div>

        <Route
          exact
          path={match.url}
          render={() => (
          
        <div>
          <div style={style.header} id="projects-header" className="title">
         
            <img src={Devices} /><h1>Projects</h1>
       
        </div>

          <div className='web animated fadeInDown'>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column className="js">
                  <Menu.Item as={Link} to={`${match.url}/jobsharks`} name='jobsharks'>

                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src={JS} />
                        </Grid.Column>
                      </Grid.Row>
                    
                  </Menu.Item>
                </Grid.Column>
                <Grid.Column className="project-explore js" textAlign='centered'>
                  <h1>JobSharks</h1>
                  <Button as={Link} to={`${match.url}/jobsharks`}>Explore</Button>
                 
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2} reversed="computer">
              <Grid.Column className="gb">
                  <Menu.Item as={Link} to={`${match.url}/grindbeast`} name='grindbeast'>

                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src={GB} />
                        </Grid.Column>
                      </Grid.Row>
                    
                  </Menu.Item>
                </Grid.Column>
                <Grid.Column className="project-explore gb" textAlign='centered'>
                  <h1>Grindbeast</h1>
                  <Button as={Link} to={`${match.url}/grindbeast`}>Explore</Button>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
              <Grid.Column className="cw">
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>

                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src={CW} />
                        </Grid.Column>
                      </Grid.Row>
                    
                  </Menu.Item>
                </Grid.Column>
                <Grid.Column className="project-explore cw" textAlign='centered'>
                  <h1>CodeWear</h1>
                  <Button as={Link} to={`${match.url}/codewear`}>Explore</Button>
                </Grid.Column>
              </Grid.Row>

              

<Grid.Row columns='3'>
              <Grid.Column>
                <Image src={graphicOne} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicTwo} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicThree} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicFour} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicFive} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicSix} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicSeven} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicEight} />
              </Grid.Column>
              <Grid.Column>
                <Image src={graphicNine} />
              </Grid.Column>
            </Grid.Row>







              <Grid.Row columns={3}>
                 <Grid.Column>
                  <a href='https://demo.vargasvisuals.com/drone' name='drone'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column >
                          <Image fluid src={lp1} />
                        </Grid.Column>
                        <Grid.Column textAlign='centered'>
                          <h1>Drone</h1>
                          
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </a>
                </Grid.Column>
                <Grid.Column>
                  <a href='https://demo.vargasvisuals.com/wheel' name='wheel'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered >
                        <Grid.Column>
                          <Image fluid src={lp2}/>
                        </Grid.Column>
                        <Grid.Column textAlign='centered'>
                          <h1>Spin The Wheel</h1>
                          
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </a>
                </Grid.Column>
                <Grid.Column>
                  <a href='https://demo.vargasvisuals.com/jetblue' name='JetBlue'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src={lp3}/>
                        </Grid.Column>
                        <Grid.Column textAlign='centered'>
                          <h1>Jet Blue</h1>
                         
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </a>
                </Grid.Column>
              </Grid.Row>
         </Grid>
            </div>



          
          <Grid stackable id='graphics'>
           
            
         
          </Grid>
          </div>

        )}/>

        <Route path={`${match.url}/grindbeast`} component={GrindBeast}/>
        <Route path={`${match.url}/codewear`} component={CodeWear}/>
        <Route path={`${match.url}/jobsharks`} component={JobSharks}/>

      </div>
    )
  }
}

export default Projects;
