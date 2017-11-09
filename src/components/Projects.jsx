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

class Projects extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {

    const {match} = this.props

    return (
      <div>

        <Route
          exact
          path={match.url}
          render={() => (
          <Container className="animated fadeInDown">
            <h2>Projects</h2>
            {/* 3 Across */}
            <Grid stackable>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Menu.Item as={Link} to={`${match.url}/jobsharks`} name='jobsharks'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column >
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                        <Grid.Column >
                          <h1>JobSharks</h1>
                          <p>Job Search Listings</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>
                <Grid.Column>
                  <Menu.Item as={Link} to={`${match.url}/mylandlordscore`} name='mylandlordscore'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                        <Grid.Column>
                          <h1>MyLandlordScore</h1>
                          <p>Landlord reviews</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>
                <Grid.Column>
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                        <Grid.Column>
                          <h1>CodeWear</h1>
                          <p>
                            Ecommerce Store
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            {/* 4 Across */}
            <Grid>
              <Grid.Row columns={4}>
                <Grid.Column computer={4} mobile={8}>
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                        <Grid.Column>
                          <h1>CodeWear</h1>
                          <p>
                            Ecommerce Store
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>

                <Grid.Column computer={4} mobile={8}> 
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                        <Grid.Column>
                          <h1>CodeWear</h1>
                          <p>
                            Ecommerce Store
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>

                <Grid.Column computer={4} mobile={8}>
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                        <Grid.Column>
                          <h1>CodeWear</h1>
                          <p>
                            Ecommerce Store
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>

                <Grid.Column computer={4} mobile={8}>
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                        <Grid.Column>
                          <h1>CodeWear</h1>
                          <p>
                            Ecommerce Store
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>




            {/* 5 Across */}
            <Grid centered>
              <Grid.Row columns={5}>
              
                <Grid.Column >
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                       
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>

                <Grid.Column >
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                       
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>

                <Grid.Column >
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                      
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>

                <Grid.Column >
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
                        </Grid.Column>
                       
                      </Grid.Row>
                    </Grid>
                  </Menu.Item>
                </Grid.Column>

                <Grid.Column>
                  <Menu.Item as={Link} to={`${match.url}/codewear`} name='codewear'>
                    <Grid className="project">
                      <Grid.Row columns="1" centered>
                        <Grid.Column>
                          <Image fluid src='http://fillmurray.com/600/600'/>
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
