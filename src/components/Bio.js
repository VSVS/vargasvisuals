import React, { Component } from 'react';
import dataBio from './data.json';

class Bio extends React.Component{
  constructor(props){
    super(props);
   
  }
  render(){
    return(
        <div>

      <div className="container">
          <div className="row" id="bio">
            <div className="col s12">
              <h2>Bio</h2>
         
          <div className="row">
            <div className="col s12">
              <p>This is a story about how i made it to where i am today. It started off in 2009 When i graduated college with a degree in Graphic Design. I called it the career starter kit.</p>
            </div>
          </div>
          {/*Timeline*/}
          <div className="row">
            <div className="col s12">
              
            <div className="row">
              <div className="col s3 m3">
                <h3>2010</h3>
                </div>
                <div className="col s9 m9">
                  <h3>Graduation</h3>
                </div>
            </div>

            <div className="row">
              <div className="col s3 m3">
                <h3>2011</h3>
                </div>
                <div className="col s9 m9">
                  <h3>Hired as print designer at DUGGAL</h3>
                </div>
            </div>

            <div className="row">
              <div className="col s3 m3">
                <h3>2012</h3>
                </div>
                <div className="col s9 m9">
                  <h3>Started Web design internship at Starchefs</h3>
                </div>
            </div>


            <div className="row">
              <div className="col s3 m3">
                <h3>2013</h3>
                </div>
                <div className="col s9 m9">
                  <h3>Hired as prepress tech at Visual Graphic Solutions</h3>
                </div>
            </div>


            <div className="row">
                <div className="col s3 m3">
                    <h3>2014</h3>
                    </div>
                    <div className="col s9 m9">
                      <div>
                      <h5>January</h5>
                      <h3>Joined Developer Bootcamp</h3>
                    </div>
                    <div>
                      <h5>April</h5>
                      <h3>First front end position at SBG Media</h3>
                    </div>
                    <div>
                      <h5>September</h5>
                      <h3>Accepted front end developer role at MyLandlordScore</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s3 m3">
                  <h3>2015</h3>
                  </div>
                  <div className="col s9 m9">
                    <h3>New position at Flex</h3>
                  </div>
          
            </div>
            
            <div className="row">
                <div className="col s3 m3">
                  <h3>2017</h3>
                  </div>
                  <div className="col s9 m9">
                    <h3>Placed 2nd place in the <b>Code In the Dark</b> front end competition</h3>
                  </div>
            </div>

          </div>
      </div>

      </div>
      </div>
      </div>
      </div>
    );
  }
}


export default Bio;
