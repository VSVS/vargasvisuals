import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import InstaFeed from 'react-instafeed'

class MyInstaFeed extends Component {
    render() {
        ////clientId='151d46b9699045208e31834ac6b4cec6'
        
        const instafeedTarget = 'instafeed';
        const instaTemplate =  `<div class="column"><a href='{{link}}' target='_blank' class='instafeed__item'>
                <img class='instafeed__item__background' src='{{image}}' />
                <div class='instafeed__item__overlay'>
                  <div class='instafeed__item__overlay--inner'>
                    <p class='instafeed__item__caption'>{{model.short_caption}}</p>
                    <p class='instafeed__item__location'>{{location}}</p>
                  </div>
                </div>
            </a></div>`
        return (
            <div>
            <Grid>
                <Grid.Row colums='3'id={instafeedTarget}>
                    
                        <InstaFeed
                        limit='9'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-recent'
                        target={instafeedTarget}                
                        template={instaTemplate}
                        userId='1766279933'
                        accessToken='1766279933.151d46b.5981778bd8d345b9afe41b3eeb9e01d4'
                        
                        />
                    
                </Grid.Row>
            </Grid>


            </div>
        );
    }
}

export default MyInstaFeed;