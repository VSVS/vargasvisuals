import React from 'react'
import {Grid, Container, Button, Icon, Image, Tab} from 'semantic-ui-react'
import { Github } from 'react-social-github'
import Slider from 'react-slick'

// Slides
import Service1 from '../imgs/service1.jpg'
import Service2 from '../imgs/service2.jpg'

import Slide1 from '../imgs/projects/cw/slide1.jpg'
import Slide2 from '../imgs/projects/cw/slide2.jpg'
import Slide3 from '../imgs/projects/cw/slide3.jpg'

// languages icons
import html from  '../imgs/html_logo.png';
import css from  '../imgs/css.png';
import javascript from '../imgs/js.png';
import PHP from '../imgs/php.png';



class Resume extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive:[
          {
              breakpoint:470,
              settings:{
                  
              }
          }
      ]
  }



  const skills = [
    {name:'HTML5',icon: html},
    {name:'CSS3',icon:css},
    {name:'JavaScript',icon:javascript},
    {name:'PHP',icon:PHP}
  ]
  
  // const frameworks = [
  //   {name:'Wordpress',icon: wordpress},
  //   {name:'Node.js',icon: nodejs},
  //   {name:'Angualar.js',icon: ng},
  //   {name:'Express.js', icon: express}
  // ]
  
  // const libraries = [
  //   {name:'jQuery',icon: jQuery},
  //   {name:'React.js',icon: ReactLogo},
  //   {name:'GreenSock',icon: wordpress},
  //   {name:'Foundation',icon: Foundation},
  //   {name:'Bootstrap',icon: Bootstrap},
  //   {name:'Semantic Ui',icon: SemanticUI},
  // ]


// framework icons
// import wp from '../imgs/wordpress.png';
// import nodejs from '../imgs/node.png';
// import ng from '../imgs/ng.png';
// import express from '../imgs/express.png';

// // libraries icons
// import jQuery from '../imgs/jq.png';
// import ReactLogo from '../imgs/react.png';
// import GreenSock from '../imgs/greensock.png';
// import Foundation from '../imgs/foundation.png';
// import Bootstrap from '../imgs/bootstrap.png';

  

  
  const panes = [
    { menuItem: 'Languages', render: () => <Tab.Pane><ul>{ skills.map((i) => {return <div key={i.name}> <li><img src={i.icon} /><span>{i.name}</span></li> </div>}) }</ul></Tab.Pane> },
    { menuItem: 'Frameworks', render: () => <Tab.Pane>{skills.map((i) => {return <div><h1>{i.name}</h1><img src={i.icon} /></div>})}</Tab.Pane> },
    { menuItem: 'Libraries', render: () => <Tab.Pane>{skills.map((i) => {return <div><h1>{i.name}</h1><img src={i.icon} /></div>})}</Tab.Pane> },
    ]




    return (
      <div>

        <Container className='resume-wrapper'>
          <Grid stackable='true' >
            <h1>Resume</h1>
            <Grid.Row columns='2' centered>
              <Grid.Column computer='5' tablet='7'>
                <Github type="widget" fab={false} fabCorner="" iconColor="" iconWidth="" iconHeight="" linkText="" tooltipOnHover={true} user="VSVS" ></Github>
              </Grid.Column>
              <Grid.Column computer='10' tablet='9'>
                <div className="resume">
                
                  <div className="experience">
                    <h1>Experience</h1>
                    <div>
                      <h2>Flex Marketing Group - NY, NY</h2>
                      <h5>Design and Devolpment</h5>
                      <p>Responsible for the design and development of digital advertisements.
                        Specializing in front end development and mobile optimization. Daily tasks
                        includes requirements such as designing and building landing pages, A/B testing,
                        ux design, market research, responsive design, interactive programming and
                        translating solutions between design and development teams.</p>
                    </div>
                    <div>
                      <h2>MyLandlordScore - NY, NY</h2>
                      <h5>Front end developer</h5>
                      <p>Created a new web ui and design for an existing beta web app. Worked with a
                        backend developer and graphic designer to bring together Mylandlordscore.com.
                        This was built using HTML5, CSS3, jQuery, MySQL and PHP for the backend along
                        with Google maps api.</p>
                    </div>
                    <div>
                      <h2>SBG Media inc. - Brooklyn, NY</h2>
                      <h5>Front end developer</h5>
                      <p>Developed new web applications focusing on user conversions and advertising.
                        Designed graphics for new and existing websites. Utilizing tools on a daily
                        basis such as Wordpress, Sequel Pro, Git, Transmit, Adobe CC suite and more.</p>
                    </div>
                    <div>
                      <h2>Flex Marketing Group - NY, NY</h2>
                      <h5>Design and Devolpment</h5>
                      <p>Responsible for the design and development of digital advertisements.
                        Specializing in front end development and mobile optimization. Daily tasks
                        includes requirements such as designing and building landing pages, A/B testing,
                        ux design, market research, responsive design, interactive programming and
                        translating solutions between design and development teams.</p>
                    </div>
                  </div>
                </div>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>


      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
   
                <div className="skills">
                <h1>Code Skills</h1>
                <div className="tab-wrapper">
                  <Tab panes={panes} />
                </div>
              </div>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>


        <Container>
          <Grid>
            <Grid.Row columns="1" centered padded className='recommendations'>
              <Grid.Column width='8'>
                <h1>Recommendations</h1>
              
                <Slider {...settings}>
                    <div>
                    <h5>Roger Castle</h5>
                    <blockquote>
                      "Robert is a very creative and skilled designer. He has a clear, direct way of
                      working with clients that keeps them at ease and engaged even when they don't
                      work in a design/creative environment. He excels at bridging the gap from
                      digital concept to printed reality in all formats. He is a pleasure to work with
                      - highly recommended!"
                    </blockquote>
                        
                    </div>
                    <div>

                    <h5>Cynthia Bowers</h5>
                    <blockquote>
                      "Working with Robert was a pleasure. His creative direction was professional and
                      specific. A true visionary with great design taste. He did not confuse us with
                      multi media vocabulary. Very personable and highly recommended."
                    </blockquote>

                    </div>
                    <div>
                    <h5>Kirk Clarke</h5>
                    <blockquote>
                      "Robert is a quick learner and a great thinker. Constantly pushing his
                      boundaries as he searches for new design challenges."
                    </blockquote>
                    </div>
                </Slider>
              </Grid.Column>
             

            </Grid.Row>
          </Grid>
        </Container>
        
        <Grid>
          
          <Grid.Row centered columns='1'>
            <div className="download-resume">
              <Grid.Column width='8'>
                <p>Download PDF Version</p>
                <Button color='orange'><Icon name='download'></Icon>Download Resume</Button>
              </Grid.Column>
            </div>
          </Grid.Row>
        </Grid>

      </div>
    )
  }

}

export default Resume;
