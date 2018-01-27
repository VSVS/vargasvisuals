import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class TimeLine extends React.Component{
  constructor(props){
    super(props);
   
  }
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
                <p>I graduated from a small design school called Wood Tobe Coburn where i finished at the top of my class with an Associstaes degree in Graphic Design and was offered multiple positions from the job placement program.</p>
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
                    professional career. During my time at duggal i learned advanced
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
                <p>During this time the print industry began decline with the web dominating advertising worldwide. I decided to pivot and  learn new skills to remain competative. Here i learned the basics of html css and introduced to content managment systems. (Drupal, Wordpress).</p>
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
                <p>As i still needed more experience in web development to completly transition mediums i accepted an offer from another printing company while i prepared to join a developer bootcamp in the coming months. During this stage i trained some of the machine operators on how to push creative production to its limit. I demonstrated how to engrave with lasers by installing new software and providing prepped photoshop files and how to use routing machines to build props.</p>
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
                    <p>I started 2014 strong by deep diving into coding by joining a 3 month long part time bootcamp led by Mike De’shazer, a software enginner and seriel entrepreneur. At the time this was lamp stack focused and I became more logical about my designs.</p>
                </div>
                <div>
                    <p className="month">April</p>
                    <h2>First front end position at SBG Media</h2>
                    <p>After completing this bootcamp i landed a position at a marketing company working on wordpress sites and lead capture pages. My work here was focused on user growth and lead generation delivering targeted ads based on surveys.</p>
                </div>
                <div>
                    <p className="month">September</p>
                    <h2>Accepted offer at MyLandlordScore</h2>
                    <p>MyLandlordScore was an early stage startup where people could search and rate landlords based on a set of categories we provided. The biggest challenge i faced here as a front end developer was bulding a mobile app on iOS. I managed to complete this using web technologies and multiple Apple reviews. This is where i learned the true meaning of being a developer and problem solving when facing the unknown.</p>
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
                <p>FLEX is where i’ve spent most of my dev career. Here i was given the chance to use many of my skills that i’ve built up over the years. I was designing, developing and scaling internal build systems. I was able to refine my craft but also fortunate enough to learn the depths of running a businsess as a bonus. Given the liberty of working independently and mananging remote engineers i gained the competency of working on any project and putting together a plan of action.</p>
              </div>
              </Grid.Column>
            </Grid.Row>




            <Grid.Row>
              <Grid.Column mobile="3" computer="3">
              <div className='string-wrapper'>
                <h1>2017</h1>
              </div>
              </Grid.Column>
              <Grid.Column mobile="13" computer="13">
                <h2>Code in the Dark Hackathon</h2>
                <p>I participated in the Code In the Dark front end competition in which i placed 2nd. The rules were simply to build a web page based off a screenshot of a random website with out using any libraries  and without previewing your code. After 15 minutes the crowd would vote for the winner of that round until the final round.</p>
              </Grid.Column>
            </Grid.Row>



            </Grid>
         </div>

      </div>
    );
  }
}


export default TimeLine;
