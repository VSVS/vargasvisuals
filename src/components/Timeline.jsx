import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class TimeLine extends Component{
  render(){
    return(
        <div>

          {/*Timeline*/}
          <div className="timeline">
            <Grid columns={2}>

              <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                  <div className='string-wrapper'>
                    <h1>2010</h1>
                    <span className="connection"></span>
                    <div className="string"></div>
                    <span className="connection end"></span>
                  </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                  <h2>Graduation</h2>
                  <p>I graduated from a small design school called Wood Tobe Coburn where I finished at the top of my class with an Associates degree in Graphic Design and was offered multiple positions from the job placement program.</p>
                </Grid.Column>
              </Grid.Row>




              <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                <div className='string-wrapper'>
                  <h1>2011</h1>
                  <span className="connection"></span>
                  <div className="string"></div>
                  <span className="connection end"></span>
                  </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                <div className='string-wrapper'>
                  <h2>Hired as Print Designer at Duggal</h2>
                  <p>This was my first job after graduation and the beginning of my 
                      professional career. During my time at <a href="http://duggal.com/" target="_blank" rel="noopener noreferrer">Duggal</a> I learned advanced
                      photo retouching and color matching techniques. I operated wide
                      format print machines (16ft) as well as prepping files for production and vector files for laser cutting machines.</p>
                </div>
                </Grid.Column>
              </Grid.Row>



              <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                <div className='string-wrapper'>
                  <h1>2012</h1>
                  <span className="connection"></span>
                  <div className="string"></div>
                  <span className="connection end"></span>
                </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                  <h2>Started web design internship at StarChefs</h2>
                  <p>During this time the print industry began decline with the web dominating advertising worldwide. I decided to pivot and  learn new skills to remain competative. Here I learned the basics of html css and introduced to content managment systems. (Drupal, Wordpress).</p>
                </Grid.Column>
              </Grid.Row>



                <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                <div className='string-wrapper'>
                  <h1>2013</h1>
                  <span className="connection"></span>
                  <div className="string"></div>
                  <span className="connection end"></span>
                </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                  <h2>Prepress technician at VGS</h2>
                  <p>As I still needed more experience in web development to completly transition mediums I accepted an offer from another printing company while I prepared to join a developer bootcamp in the coming months. During this stage in my career at <a href="https://www.vgsonline.com/" target="_blank" rel="noopener noreferrer">VGS</a> I trained some of the machine operators on how to push creative production to its limit. I demonstrated how to engrave with lasers by installing new software and providing prepped photoshop files and how to use routing machines to build props.</p>
                </Grid.Column>
              </Grid.Row>



            <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                <div className='string-wrapper'>
                  <h1>2014</h1>
                  <span className="connection"></span>
                  <div className="string"></div>
                  <span className="connection end"></span>
                </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                  <div>
                      <p className="month">January</p>
                      <h2>Joined Developer Bootcamp</h2>
                      <p>I started 2014 strong by deep diving into coding by joining a 3 month long part time bootcamp led by <a href="https://twitter.com/itsdeshazer" target="_blank" rel="noopener noreferrer">Mike De’shazer</a>, a software enginner and seriel entrepreneur. At the time this was <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank" rel="noopener noreferrer">lamp stack</a> focused and I became more logical about my designs.</p>
                  </div>
                  <div>
                      <p className="month">April</p>
                      <h2>First front end position at SBG Media</h2>
                      <p>After completing this bootcamp I landed a position at a marketing company working on wordpress sites and lead capture pages. My work here was focused on user growth and lead generation delivering targeted ads based on surveys.</p>
                  </div>
                  <div>
                      <p className="month">September</p>
                      <h2>Accepted offer at MyLandlordScore</h2>
                      <p><a href="https://twitter.com/MyLandlordScore/status/631572580147793920" target="_blank" rel="noopener noreferrer">MyLandlordScore</a> was an early stage startup where people could search and rate landlords based on a set of categories we provided. The biggest challenge I faced here as a front end developer was bulding a mobile app on iOS. I managed to complete this using web technologies and multiple Apple reviews. This is where I learned the true meaning of being a developer and problem solving when facing the unknown.</p>
                  </div>
                </Grid.Column>
              </Grid.Row>

            

              <Grid.Row>
                <Grid.Column mobile="3" computer="3">
              <div className='string-wrapper'>
                  <h1>2015</h1>
                  <span className="connection"></span>
                  <div className="string"></div>
                  <span className="connection end"></span>
                </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
              <div className='string-wrapper'>
                  <h2>FLEX</h2>
                  <p>At <a href="http://flexmg.com/" target="_blank" rel="noopener noreferrer">FLEX</a> i’ve spent most of my dev career. Here I was given the chance to use many of my skills that i’ve built up over the years. I was designing, developing and scaling internal build systems. I was able to refine my craft but also fortunate enough to learn the depths of running a businsess as a bonus. Given the liberty of working independently and mananging remote engineers I gained the competency of working on any project and putting together a plan of action.</p>
                </div>
                </Grid.Column>
              </Grid.Row>




              <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                <div className='string-wrapper'>
                  <h1>2017</h1>
                  <span className="connection"></span>
                  <div className="string"></div>
                  <span className="connection end"></span>
                </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                  <h2>Code in the Dark Hackathon</h2>
                  <p>I participated in the <a href="https://www.meetup.com/NY-JavaScript/events/236589552/" target="_blank" rel="noopener noreferrer">Code In the Dark</a> front end competition in which I placed 2nd. The rules were simply to build a web page based off a screenshot of a random website without using any libraries  and without previewing your code. After 15 minutes the crowd would vote for the winner of that round until the final round.</p>
                </Grid.Column>
              </Grid.Row>


              <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                <div className='string-wrapper'>
                  <h1>2018</h1>
                  <span className="connection"></span>
                  <div className="string"></div>
                  <span className="connection end"></span>
                </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                  <h2>Iterative Capital</h2>
                  <p>As one of the first hires at this cryptocurrency based hedge fund, I joined <a href="https://iterative.capital" target="_blank" rel="noopener noreferrer">Iterative Capital</a> as a <strong>Front End Developer</strong>. I currently hold this position and have transitioned into a senior role building out <strong>Full Stack JavaScript</strong> applications.</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column mobile="3" computer="3">
                <div className='string-wrapper'>
                  <h1>Now</h1>
                </div>
                </Grid.Column>
                <Grid.Column mobile="13" computer="13">
                  <h2>What's New?</h2>
                  <p>Today im focusing on building out content and sharing my knowledge for all digital creators; ranging from marketers to developers. One of my goals are to become a <a href="https://developers.google.com/programs/experts/">Google Developer Expert</a> in Web Technologies.</p>
                </Grid.Column>
              </Grid.Row>

            </Grid>
        </div>

      </div>
    );
  }
}


export default TimeLine;
