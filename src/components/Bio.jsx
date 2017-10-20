import React, { Component } from 'react'
import TimeLine from './Timeline'
import { Grid, Container, Tab, Menu, Button, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'






class Bio extends React.Component{
  constructor(props){
    super(props);
   
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    
    return(
        <div>

          <div id="bio" className="animated fadeInDown">
         
            <Container>
              
              <TimeLine />
            </Container>

            <Grid>
            
            <Grid.Row centered columns='1'>
              <div className="view-projects">
                <Grid.Column width='8'>
                  <p>View Projects</p>
                  <Button as={Link} to='/projects' color='blue'><Icon name='grid layout'></Icon>View Projects</Button>
                </Grid.Column>
              </div>
            </Grid.Row>
          </Grid>
      
        </div>
        
            
      </div>
    );
  }
}


export default Bio;
