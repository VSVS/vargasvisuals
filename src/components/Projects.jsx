import React, { Component } from 'react';
import JobSharks from './jobsharks';
import CodeWear from './codewear';
import GrindBeast from './GrindBeast';
import { Route, Link } from 'react-router-dom'
import {
  Button,
  Menu,
  Image,
  Grid
} from 'semantic-ui-react'

import JS from '../imgs/projects/jsharks/slide1.png'
import GB from '../imgs/projects/gb/slide1.png'
import CW from '../imgs/projects/cw/slide1.png'

import Devices from '../imgs/devices.png'
import Circuit from '../imgs/circuit.png'

import graphicOne from '../imgs/graphic-design/glass-card.jpg'
import graphicTwo from '../imgs/graphic-design/anime-portriat.jpg'
import graphicThree from '../imgs/graphic-design/mso.jpg'
import graphicFour from '../imgs/graphic-design/catchyfreebies.jpg'
import graphicFive from '../imgs/graphic-design/wpv.jpg'
import graphicSix from '../imgs/graphic-design/nook.jpg'
import graphicSeven from '../imgs/graphic-design/brochure.jpg'
import graphicEight from '../imgs/graphic-design/expressfreebies.jpg'
import graphicNine from '../imgs/graphic-design/mls-app.jpg'



class Projects extends Component {
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
            <img alt="Projects" src={Devices} /><h1>Projects</h1>
          </div>

          <div className='projects animated fadeInDown'>
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
                  <Grid.Column className="project-explore js" textAlign='center'>
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
                  <Grid.Column className="project-explore gb" textAlign='center'>
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
                  <Grid.Column className="project-explore cw" textAlign='center'>
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
              </Grid>
            </div>
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
