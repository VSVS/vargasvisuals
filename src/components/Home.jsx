import React, {Component} from 'react'
import {
  Container,
  Grid,
  Button,
  Image,
  Icon
} from 'semantic-ui-react'
import WorkStation from './WorkStation'
import { Link } from 'react-router-dom'


import swoosh from '../imgs/swoosh.png'
import profile from '../imgs/profile2.jpg'


class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
        <div className="hero" style={{backgroundImage: `url(${swoosh})` }}>
          <Container>
            <Grid columns="2" stackable>
              <Grid.Column>
                <h5>Robert Vargas</h5>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 248">
                  <text
                    transform="translate(20.922 -198.13)"
                    fontFamily="Montserrat-Bold"
                    fontSize="225.213">
                    UX Developer
                  </text>
                  <path
                    d="M178.6 134.7c0 41.7-27.7 68-71.8 68-44.4 0-72.7-26.4-72.7-68V43.2h40.1v91.4c0 21.4 13.7 34.5 32.9 34.5 18.9 0 31.8-13.1 31.8-34.5V43.2h39.9v91.5zM492.7 43.2c49.5 0 83.8 32 83.8 78.8 0 46.6-34.7 78.8-85.4 78.8H425V43.2h67.7zM465 168.9h28.6c24.5 0 42.1-18.9 42.1-46.6 0-27.9-18.5-47.1-43.9-47.1H465v93.7zM711.9 150.6h-85.4c3.8 14.4 14.2 22.5 28.6 22.5 10.6 0 20.9-4.3 29.1-12.4l20.5 20c-12.4 13.5-30.6 21.4-52.9 21.4-39.6 0-64.4-24.8-64.4-61.7 0-37.6 25.7-62.4 63.3-62.4 42.7.1 63.9 28.3 61.2 72.6zm-37.4-20.9c0-14.9-9.5-24.5-23.4-24.5-13.5 0-22.7 9.9-25.2 24.5h48.6zM758 200.9L712.3 79.5h40.1l26.1 85.8 26.4-85.8h38.7l-45.7 121.4H758zM967.9 150.6h-85.4c3.8 14.4 14.2 22.5 28.6 22.5 10.6 0 20.9-4.3 29.1-12.4l20.5 20c-12.4 13.5-30.6 21.4-52.9 21.4-39.6 0-64.4-24.8-64.4-61.7 0-37.6 25.7-62.4 63.3-62.4 42.8.1 63.9 28.3 61.2 72.6zm-37.3-20.9c0-14.9-9.5-24.5-23.4-24.5-13.5 0-22.7 9.9-25.2 24.5h48.6zM990.2 200.9V33.8h39v167.1h-39zM1183.9 140.1c0 37.4-26.6 62.2-66.2 62.2-39.9 0-66.4-24.8-66.4-62.2 0-37.4 26.6-61.9 66.4-61.9 39.6-.1 66.2 24.5 66.2 61.9zm-93.4.4c0 18.9 11 31.5 27.3 31.5 16 0 27-12.6 27-31.5 0-18.7-11-31.5-27-31.5-16.3 0-27.3 12.8-27.3 31.5zM1338.2 140.7c0 36.9-22.1 61.5-56.1 61.5-15.8 0-28.6-6.3-37.2-17.6v59.9h-39v-165h39v16c8.6-11 20.9-17.3 36.3-17.3 34.2-.1 57 24.9 57 62.5zm-39.2-1.1c0-18.5-11-31.5-27.3-31.5-15.8 0-26.8 13.1-26.8 31.5 0 18.9 11 31.8 26.8 31.8 16.3 0 27.3-13.1 27.3-31.8zM1473.5 150.6h-85.4c3.8 14.4 14.2 22.5 28.6 22.5 10.6 0 20.9-4.3 29.1-12.4l20.5 20c-12.4 13.5-30.6 21.4-52.9 21.4-39.6 0-64.4-24.8-64.4-61.7 0-37.6 25.7-62.4 63.3-62.4 42.8.1 63.9 28.3 61.2 72.6zm-37.3-20.9c0-14.9-9.5-24.5-23.4-24.5-13.5 0-22.7 9.9-25.2 24.5h48.6zM1533.7 100c8.3-14.2 22.1-22.1 39.4-22.3v35.1c-22.5-2-37.4 8.6-39.4 25.7v62.4h-39V79.5h39V100z"/>
                  <g className='path-wrap'>
                    <path
                      ref={(ref) => this.path = ref}
                      className='path'
                      d="M355.4 200.9h-48l-34-50.2-57 85.4h-46.6l79.3-115.8-52.7-77H243l30.4 45.9L327.8 10h47.1l-76 108.4 56.5 82.5z"/>
                  </g>
                </svg>

                <h5>Design &amp; Marketing</h5>
              </Grid.Column>

              <Grid.Column>
                <WorkStation/>
              </Grid.Column>

            </Grid>

          </Container>

        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 189.3">
          <path
            style={{
            fill: "#333333"
          }}
            d="M0,189.9L0,48.6c0,0,401.5-79.6,960,0c613.6,87.4,960,0,960,0v141.4H0z"/>
        </svg>

        <div className="intro">
          <Container>
            <Grid centered stackable>

              <Grid.Row columns={1}>
                <Grid.Column computer='10' mobile='16'>
                  <Image className='profile' src={profile} />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column >
                  <Button size='large' floated='right' as={Link} to='/bio'><Icon name='user circle'></Icon>Read Bio</Button>
                </Grid.Column>
                <Grid.Column >
                  <Button size='large' floated='left' as={Link} to='/projects'><Icon name='grid layout'></Icon>View Projects</Button>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Container>
        </div>

      </div>

    )
  }
}

export default Home