import React, { Component } from 'react'
import TimeLine from './Timeline'
import { Grid, Container, Button, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Bio extends Component{
  componentDidMount(){
    window.scrollTo(0, 0);
    
  }
  render(){
    
    return(
        <div>
          <Container className='resume-wrapper'>
            <Grid stackable>
              <div>
                <h1>Bio</h1>
              </div>
            </Grid>
          </Container>
        
          

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
