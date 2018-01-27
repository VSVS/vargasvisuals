import React, { Component } from 'react'
import TimeLine from './Timeline'
import { Grid, Container, Tab, Menu, Button, Icon, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


import headerBio from '../imgs/bio-header.jpg'


class Bio extends React.Component{
  constructor(props){
    super(props);
   
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    
  }
  render(){
    const style = {
      header:{
        backgroundImage: `url(${headerBio})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'350px'
      }
    }
    
    return(
        <div>
          <div style={style.header} id="bio-header" className="title">
              <div>
                <h1>Bio</h1>
              </div>
            </div>
          

          <div id="bio" className="animated fadeInDown">
         
            <Container>
              
              <TimeLine />
              
                
            </Container>

            <Grid>
            
            <Grid.Row centered columns='1'>
              <div className="view-projects">
                <Grid.Column width='8'>
                  <Button as={Link} size='large' to='/projects' color='blue'><Icon name='grid layout'></Icon>View Projects</Button>
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
