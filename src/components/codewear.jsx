import React, {Component} from 'react'
import Gallery from 'react-photo-gallery'
import Slider from 'react-slick'
import {Grid, Image, Container, Menu, Icon} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Projects from './Projects'

import Slide1 from '../imgs/projects/cw/slide1.jpg'
import Slide2 from '../imgs/projects/cw/slide2.jpg'
import Slide3 from '../imgs/projects/cw/slide3.jpg'

class ProjectTemplate extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row></Grid.Row>

                </Grid>
            </div>
        );
    }

}

class CodeWear extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite:false,
            responsive:[
                {
                    breakpoint:470,
                    settings:{
                        adaptiveHeight:true
                    }
                }
            ]
        };

        this.props = {
            title: 'CodeWear',
            desc: 'CodeWear is an online ecommerce store catered to developers and designers. Thi started off as an expriment to test the coder market for dev tshirts. It has since grown to be integrated with a woocommerce backend tied with automated drip campaigns and pixel tracking.',
            source: 'https://codewear.me/wp-content/uploads/2017/05/codewear-white-logo-2017.png',
            theme: {
                color:'#2E4B97;',
            }
        }

        const style = {
            fill:'#2E4B97'
        }

        return (
            <div>
                <Container>
                    <Grid>
                        <Grid.Row columns="2">
                            <Grid.Column width="6">
                                <Image src={Slide1}/>
                            </Grid.Column>
                            <Grid.Column width="10">
                                <div className="project-intro">
                                    <h1>{this.props.title}</h1>
                                    <p>
                                        {this.props.desc}

                                    </p>
                                    <p>
                                        <span className="tags blue">Wordpress</span>
                                        <span className="tags blue">PHP</span>
                                        <span className="tags blue">Javascript</span>
                                        <span className="tags blue">HTML</span>
                                        <span className="tags blue">CSS</span>
                                    </p>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>


                <div className="slider">
                <Container>
                    <Grid>
                        <Grid.Row columns="1">
                            <Grid.Column>
                            <Slider {...settings}>
                                <div>
                                    <Image src={Slide1}/>
                                    
                                </div>
                                <div>

                                    <Image src={Slide2}/>

                                </div>
                                <div>
                                    <Image src={Slide3}/>
                                </div>
                            </Slider>
                           
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
 
                </div>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 219.2">
                                <path style={style} d="M1920 0v141.4s-579.3 160.8-960 0c-492.1-207.9-960 0-960 0V0h1920z"/>
                            </svg>

               


                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Image src='http://fillmurray.com/500/500'/>
                        </Grid.Column>

                        <Grid.Row centered columns={4}>
                            <Grid.Column>
                                <Image src='http://fillmurray.com/500/500'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='http://fillmurray.com/500/500'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='http://fillmurray.com/500/500'/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row centered columns={4}>
                            <Grid.Column>
                                <Image src='http://fillmurray.com/500/500'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='http://fillmurray.com/500/500'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='http://fillmurray.com/500/500'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='http://fillmurray.com/500/500'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>


                
                

               
            </div>
        )
    }

}

export default CodeWear