import React from 'react'
import {Grid, Container, Button, Icon } from 'semantic-ui-react'
import { Github } from 'react-social-github'

class Resume extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {

    return (
      <div>

        <Container className='resume-wrapper'>
          <Grid stackable>
            <h1>Resume</h1>
            <Grid.Row columns='2' centered>
              <Grid.Column computer='5' tablet='7'>
                <Github type="widget" fab={false} fabCorner="" iconColor="" iconWidth="" iconHeight="" linkText="" tooltipOnHover={true} user="VSVS" ></Github>
              </Grid.Column>
              <Grid.Column computer='10' tablet='9'>
                <div className="resume">
                
                  <div className="experience">

                    <div>
                      <h2>Iterative Capital Management - NY, NY</h2>
                      <h5>Senior Front End Developer</h5>
                      <p>Since joining Iterative Capital in 2018 i have transitioned into a senior position with more responsibilities. Some of the tasks include building and managing AWS infrastructure for hosting web applications, developing ReactJs based applications, improving the company's news site and building out funnels for readers and investors.</p>
                    </div> 
                    <div>
                      <h2>Flex Marketing Group - NY, NY</h2>
                      <h5>Lead Designer / Developer</h5>
                      <p>Responsible for the design and development of digital advertisements.
                        Specializing in front end development and mobile optimization. Daily tasks
                        includes requirements such as designing and building landing pages, A/B testing,
                        ux design, market research, responsive design, interactive programming and
                        translating solutions between design and development teams.</p>
                    </div>
                    <div>
                      <h2>MyLandlordScore - NY, NY</h2>
                      <h5>Front End Developer</h5>
                      <p>Created a new web ui and design for an existing beta web app. Worked with a
                        backend developer and graphic designer to bring together Mylandlordscore.com.
                        This was built using HTML5, CSS3, jQuery, MySQL and PHP for the backend along
                        with Google maps api.</p>
                    </div>
                    <div>
                      <h2>SBG Media inc. - Brooklyn, NY</h2>
                      <h5>Front End Developer</h5>
                      <p>Developed new web applications focusing on user conversions and advertising.
                        Designed graphics for new and existing websites. Utilizing tools on a daily
                        basis such as Wordpress, Sequel Pro, Git, Transmit, Adobe CC suite and more.</p>
                    </div>
                    <div>
                      <h2>Six22 LLC - Sunnyside, NY</h2>
                      <h5>Graphic Web Designer</h5>
                      <p>Participated in the collaboration of re-branding Long Island home care facilities. Developed new websites for clients using Wordpress. Responsible for the design and development of e-mail marketing.</p>
                    </div>
                  </div>
                </div>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>

        
        <Grid>
          
          <Grid.Row centered columns='1'>
            <div className="download-resume">
              <Grid.Column width='8'>
                <a href='https://adobe.ly/2Ew52PW'><Button color='orange' size='large'><Icon name='download'></Icon>Download Extended Resume</Button></a>
              </Grid.Column>
            </div>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default Resume;
