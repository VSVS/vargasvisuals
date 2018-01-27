import React, {Component} from 'react'
import Gallery from 'react-photo-gallery'
import Slider from 'react-slick'
import {Grid, Image, Container, Menu, Icon, Button} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Projects from './Projects'

import Slide1 from '../imgs/projects/jsharks/slide1.png'
import Slide2 from '../imgs/projects/jsharks/slide2.png'
import Slide3 from '../imgs/projects/jsharks/slide3.jpg'

import logo from '../imgs/projects/jsharks/jobsharks-blue.png';
import headerBack from '../imgs/projects/jsharks/header-jsharks.jpg';
import allWeb from '../imgs/projects/jsharks/all-web.jpg';
import search from '../imgs/projects/jsharks/search.jpg';
import branding from '../imgs/projects/jsharks/branding.jpg';
import signUp from '../imgs/projects/jsharks/sign-up.jpg';
import stacked from '../imgs/projects/jsharks/stacked.jpg';







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
            title: 'JobSharks',
            desc:'JobSharks is a web app to help people search multiple job posting sites simultaneously. JobSharks consumes several api\'s including Indeed, Ziprecruiter, Dice and more.',
            source: 'jobsharks-blue.png',
            theme: {
                color: '#2E4B97;'
            }
        }

        const style = {
            fill: '#32AEE6',
            header:{
                background: `url(${headerBack})`,
                backgroundSize:'cover'
            },
            jSharks:{
                background:'#32AEE6'
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
                                <Image src={logo} style={{marginTop:'-30px'}}/>
                            </Grid.Column>
                            <Grid.Column computer='9' mobile='10'>
                                <div>
                                    <p>
                                        {this.props.desc}

                                    </p>
                                    <p>
                                        <span className="tags blue">Javascript</span>
                                        <span className="tags blue">Wordpress</span>
                                        <span className="tags blue">Indeed</span>
                                        <span className="tags blue">PHP</span>
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
                <Grid className="slider" style={style.jSharks}>
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
                                <p className="project-details">I was assigned a project to create a job site to improve internal email marketing efforts and diversify promotions. Since there are an abundance of career search sites, I chose to create a simple application utilizing existing platforms.</p>
                            </Grid.Column>
                            <Grid.Column>
                            <h2><Icon name="user circle" size="large"></Icon>My Role</h2>
                                <p className="project-details">I was in charge of all the designs and development. I designed a unique logo and built this project on top of the Wordpress platform to retain easy blogging capabilities. At completion I was able to integrate 9 job platforms into our search page.</p>
                            </Grid.Column>
                            <Grid.Column>
                                <h2><Icon name="time" size="large"></Icon>Next</h2>
                                <p className="project-details">To improve on this I would strip away wordpress and build this as a Laravel application. I'd utilize the Laravel ecosystem including the login system and easy database migrations to deliver to a ReactJs powered front end client. One core feature would be the ability to save and track applications for several job sites.</p>
                            </Grid.Column>
                        </Grid.Row>
                        
                    </Grid>
                </Container>

                    {/* Collage */}
                    <Grid verticalAlign='middle' className='collage' centered stackable>
                        <Grid.Row columns='2'>
                            <Grid.Column>
                                <img src={allWeb} alt="all web sizes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={search} alt="Search Page"/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns='3'>
                        <Grid.Column>
                            <img src={signUp} alt="JS Form"/>
                        </Grid.Column>
                        <Grid.Column>
                            <img src={stacked} alt="Stacked Web"/>
                        </Grid.Column>
                        <Grid.Column>
                            <img src={branding} alt="Branding"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="project-nav-title" columns='1' centered  padded>
                        <Grid.Column textAlign='centered'>
                            <h2><Icon name="grid layout" size="medium"></Icon >More Projects</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns='2' className='project-nav' stackable>
                        <Grid.Column textAlign='right'>
                           <Button as={Link} to='/projects/grindbeast' ><Icon name="arrow circle outline left" size="large"></Icon>GrindBeast</Button>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                           <Button as={Link} to='/projects/codewear'>CodeWear<Icon name="arrow circle outline right" size="large"></Icon></Button>
                        </Grid.Column>
                    </Grid.Row>    
                </Grid>
                
            </div>
        )
    }

}

export default CodeWear