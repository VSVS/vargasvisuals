import React, { Component } from 'react'
import TimeLine from './Timeline'
import { Grid, Container, Tab, Menu, Button} from 'semantic-ui-react'




// languages icons
import html from  '../imgs/html_logo.png';
import css from  '../imgs/css.png';
import javascript from '../imgs/js.png';
import PHP from '../imgs/php.png';

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

class Bio extends React.Component{
  constructor(props){
    super(props);
   
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){

      
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



    const panes = [
    { menuItem: 'Languages', render: () => <Tab.Pane><ul>{ skills.map((i) => {return <div key={i.name}> <li><img src={i.icon} /><span>{i.name}</span></li> </div>}) }</ul></Tab.Pane> },
    { menuItem: 'Frameworks', render: () => <Tab.Pane>{skills.map((i) => {return <div><h1>{i.name}</h1><img src={i.icon} /></div>})}</Tab.Pane> },
    { menuItem: 'Libraries', render: () => <Tab.Pane>{skills.map((i) => {return <div><h1>{i.name}</h1><img src={i.icon} /></div>})}</Tab.Pane> },
    ]
    

    
    return(
        <div>

          <div id="bio">
         
            <Container>
              <div className="skills">
                <h1>Code Skills</h1>
                <div className="tab-wrapper">
                  <Tab panes={panes} />
                </div>
              </div>
              <TimeLine />
              </Container>
            </div>
          
      </div>
    );
  }
}


export default Bio;
