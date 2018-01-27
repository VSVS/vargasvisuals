import React, {Component} from 'react'
import Gallery from 'react-photo-gallery'
import Slider from 'react-slick'
import {Grid, Image, Container, Menu, Icon, Button} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Projects from './Projects'

import Slide1 from '../imgs/projects/gb/slide1.png'
import Slide2 from '../imgs/projects/gb/slide2.png'
import Slide3 from '../imgs/projects/gb/slide3.jpg'

import logo from '../imgs/projects/gb/logo.png';
import headerBack from '../imgs/projects/gb/header-bk.jpg';
import productOne from '../imgs/projects/gb/product1.jpg';
import productTwo from '../imgs/projects/gb/product2.jpg';
import stacked from '../imgs/projects/gb/stacked.jpg';
import responsive from '../imgs/projects/gb/responsive.jpg';
import fullPage from '../imgs/projects/gb/fullpage.jpg'





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
            title: 'GrindBeast',
            desc: 'GrindBeast is an ecommerce store for fitness apparel. This store was built on top of the Shopify platform to allow me to focus more on design and marketing.',
            theme: {
                color: '#A3AEB8;'
            }
        }

        const style = {
            fill: '#A3AEB8',
            header:{
                background: `url(${headerBack})`,
                backgroundSize:'cover'
            },
            gb:{
                background:'#A3AEB8'
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
                                        <span className="tags blue">Shopify</span>                            
                                        <span className="tags blue">Liquid</span>
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
                <Grid className="slider" style={style.gb}>
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
                                <p className="project-details">I wanted to build something with <b>Shopify</b> after seeing former collegeaus find success on this platform. This would allow me to expand my services, experience and create a profiltable website as a bonus.</p>
                            </Grid.Column>
                            <Grid.Column>
                            <h2><Icon name="user circle" size="large"></Icon>My Role</h2>
                                <p className="project-details">Managing multiple websites can quickly become time consuming so instead of building another site that would require heavy maintenace and slow progression, I chose <b>Shopify</b> to focus on design and marketing which are my strong suits.</p>
                            </Grid.Column>
                            <Grid.Column>
                                <h2><Icon name="time" size="large"></Icon>Next</h2>
                                <p className="project-details">Im currently working on building the <b>grindbeast</b> email list, A/B testing Facebook Ads campaigns and building a social media presence.</p>
                            </Grid.Column>
                        </Grid.Row>
                        
                    </Grid>
                </Container>

                    {/* Collage */}
                    <Grid verticalAlign='middle' className='collage' centered stackable>
                        <Grid.Row columns='2'>
                            <Grid.Column>
                                <img src={responsive} alt="Responsive Mockup"/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={fullPage}alt="Full Page"/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns='3'>
                        <Grid.Column>
                            <img src={productOne} alt="High Selling Product"/>
                        </Grid.Column>
                        <Grid.Column>
                            <img src={stacked} alt="Web Stacked"/>
                        </Grid.Column>
                        <Grid.Column>
                        <img src={productTwo} alt="High Selling Product"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="project-nav-title" columns='1' centered  padded>
                        <Grid.Column textAlign='centered'>
                            <h2><Icon name="grid layout" size="medium"></Icon >More Projects</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns='2' className='project-nav' stackable>
                        <Grid.Column textAlign='right'>
                           <Button as={Link} to='/projects/codewear' ><Icon name="arrow circle outline left" size="large"></Icon>CodeWear</Button>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                           <Button as={Link} to='/projects/jobsharks'>JobSharks<Icon name="arrow circle outline right" size="large"></Icon></Button>
                        </Grid.Column>
                    </Grid.Row>    
                </Grid>
                
            </div>
        )
    }

}

export default CodeWear