import React, {Component} from 'react'
import Gallery from 'react-photo-gallery'
import Slider from 'react-slick'
import {Grid, Image, Container, Menu, Icon, Button} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Projects from './Projects'

import Slide1 from '../imgs/projects/cw/slide1.png'
import Slide2 from '../imgs/projects/cw/slide2.png'
import Slide3 from '../imgs/projects/cw/slide3.jpg'

import logo from '../imgs/projects/cw/codewear-white.png';
import headerBack from '../imgs/projects/cw/header-bk.jpg';
import webDev from '../imgs/projects/cw/web-dev-tshirt.jpg';
import engineer from '../imgs/projects/cw/engineer-tshirt.jpg';
import allWeb from '../imgs/projects/cw/all-web.jpg';
import jsKing from '../imgs/projects/cw/js-is-king.jpg';
import noPlace from '../imgs/projects/cw/no-place-like-home.jpg';



class CodeWear extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
            prevArrow: document.querySelector('.prev'),
            nextArrow:document.querySelector('.next'),
            responsive: [
                {
                    breakpoint: 470,
                    settings: {
                        // adaptiveHeight:true
                    }
                }
            ]
        };

        this.props = {
            title: 'CodeWear',
            desc: `CodeWear is an ecommerce store catered to developers and designers. What was meant to be
                    a fun project, developed into a business where I could enjoy complete creative control. `,
            source: 'https://codewear.me/wp-content/uploads/2017/05/codewear-white-logo-2017.png',
            theme: {
                color: '#2E4B97;'
            }
        }

        const style = {
            fill: '#2E4B97',
            header:{
                background: `url(${headerBack})`,
                backgroundSize:'cover'
            }
        }

        return (
            <div>
                <div className='project-header' style={style.header}>
                <Container>
                    {/* Header */}
                    <Grid padded className='project-intro' stackable >
                        
                        <Grid.Row columns='2' centered >
                            <Grid.Column computer='7' mobile='2' >
                                <Image src={logo}/>
                            </Grid.Column>
                            <Grid.Column computer='9' mobile='10'>
                                <div>
                                    <p>
                                        {this.props.desc}

                                    </p>
                                    <p>
                                        <span className="tags blue">Wordpress</span>
                                        <span className="tags blue">WooCommerce</span>
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
                </div>

                {/* Slider */}
                <Grid className="slider">
                    <Container>
                        <Grid.Row columns="1">
                            <Grid.Column width='16'>
                                <div>
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

                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Container>
                </Grid>

                {/* Wave */}
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 219.2">
                    <path
                        style={style}
                        d="M1920 0v141.4s-579.3 160.8-960 0c-492.1-207.9-960 0-960 0V0h1920z"/>
                </svg>

                {/* Soemthing */}

                <Container>
                    <Grid stackable>
                        
                        <Grid.Row columns='3' className='project-details-wrapper' >
                            
                            <Grid.Column>
                                <h2><Icon name="question circle" size="large"></Icon>Problem</h2>
                                <p className="project-details">This is not the first ecommerce store of it's kind. Sites that I was a customer of failed to update their products after a year of shopping. I decided to build my own with a variety of original ideas to bring to the market.</p>
                            </Grid.Column>
                            <Grid.Column>
                            <h2><Icon name="user circle" size="large"></Icon>My Role</h2>
                                <p className="project-details">This was a side project I built from the ground up. It started off with an idea that led to an a logo and an all out ecommerce store. I had complete creative, technical and marketing control of this site which is where i excel. </p>
                            </Grid.Column>
                            <Grid.Column>
                                <h2><Icon name="time" size="large"></Icon>Next</h2>
                                <p className="project-details">I continue to maintain this store and Im currently working on designing more products such as mugs, posters, hoodies and tank tops. The potential is unlimited and the fan base continues to grow.</p>
                            </Grid.Column>
                        </Grid.Row>
                        
                    </Grid>
                </Container>

                    {/* Collage */}
                    <Grid verticalAlign='middle' className='collage' centered stackable>
                        <Grid.Row columns='2'>
                            <Grid.Column>
                                <img src={webDev} alt="web devleoper"/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={engineer}alt="engineer"/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns='3'>
                        <Grid.Column>
                            <img src={noPlace} alt="No Place Like Home"/>
                        </Grid.Column>
                        <Grid.Column>
                            <img src={jsKing} alt="JavaScript is King"/>
                        </Grid.Column>
                        <Grid.Column>
                            <img src={allWeb} alt="all web sizes"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="project-nav-title" columns='1' centered  padded>
                        <Grid.Column textAlign='centered'>
                            <h2><Icon name="grid layout" size="medium"></Icon >More Projects</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns='2' className='project-nav' stackable>
                        <Grid.Column textAlign='right'>
                           <Button as={Link} to='/projects/JobSharks' ><Icon name="arrow circle outline left" size="large"></Icon>JobSharks</Button>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                           <Button as={Link} to='/projects/grindbeast'>GrindBeast<Icon name="arrow circle outline right" size="large"></Icon></Button>
                        </Grid.Column>
                    </Grid.Row>    
                </Grid>
                
            </div>
        )
    }

}

export default CodeWear