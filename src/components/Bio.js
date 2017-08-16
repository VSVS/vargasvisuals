import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import dataBio from './data.json';

class Bio extends React.Component{
  constructor(props){
    super(props);
   
  }
  render(){
    return(
        <div>

          <div id="bio">
            {/*Timeline*/}
            <Grid.Row>
              <Grid.Column width={3}>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 387">
                  <path class="st0" d="M17.5 42.6h14.9v299.3H17.5z"/>
                  <circle class="st1" cx="25.1" cy="24.4" r="19.4"/>
                  <circle class="st1" cx="25.3" cy="361.3" r="19.4"/>
                </svg>
              </Grid.Column>
              <Grid.Column width={13}>
                <h2>Graduation</h2>
                <p>I graduated from a small design school called Wood Tobe Coburn where i finished at the top of my class with an Associstaes degree in Graphic Design and was offered multiple positions from the job placement program.</p>
              </Grid.Column>
            </Grid.Row>
          </div>

      </div>
    );
  }
}


export default Bio;
