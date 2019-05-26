import React, { Component } from 'react';
import { Container, Grid, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>

                  <Container>
                    <Grid>
                      <Grid.Row centered columns={3}>
                        <Grid.Column width={2} mobile='3'>
                        <a href="https://github.com/VSVS">
                          <Segment>
                            
                              <Icon name="github" size="huge"></Icon>
                            
                          </Segment>
                          </a>
                        </Grid.Column>
                        <Grid.Column width={2} mobile='3'>
                        <a href='https://linkedin.com/in/robertvargas'>
                          <Segment>
                            
                              <Icon name="linkedin square" size="huge"></Icon>
                            
                          </Segment>
                          </a>

                        </Grid.Column>
                        <Grid.Column width={2} mobile='3'>
                      <Link to='/hire' name='hire'>
                          <Segment >
                            
                              <Icon name="mail" size="huge"></Icon>
                            
                          </Segment>
                      </Link>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row centered columns={1}>
                        <Grid.Column><h1>&copy; VargasVisuals.com 2019</h1></Grid.Column>
                      </Grid.Row>

                    </Grid>
                  </Container>

                </footer>
        );
    }
}

export default Footer;