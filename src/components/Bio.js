import React, { Component } from 'react';
import TimeLine from './Timeline';
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
            <TimeLine />
          </div>

      </div>
    );
  }
}


export default Bio;
