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
            centerMode: true,
            infinite: false,
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
            desc: 'CodeWear is an online ecommerce store catered to developers and designers. Thi s' +
                    'tarted off as an expriment to test the coder market for dev tshirts. It has sinc' +
                    'e grown to be integrated with a woocommerce backend tied with automated drip cam' +
                    'paigns and pixel tracking.',
            source: 'https://codewear.me/wp-content/uploads/2017/05/codewear-white-logo-2017.png',
            theme: {
                color: '#2E4B97;'
            }
        }

        const style = {
            fill: '#2E4B97'
        }

        return (
            <div>
                <Container>
                <Grid padded className='project-intro'>
                    <Grid.Row columns='2' centered>
                        <Grid.Column computer='6' mobile='2'>
                            <Image src={Slide1}/>
                        </Grid.Column>
                        <Grid.Column computer='10' mobile='10'>
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

                <Grid className="slider" padded>
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

                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 219.2">
                    <path
                        style={style}
                        d="M1920 0v141.4s-579.3 160.8-960 0c-492.1-207.9-960 0-960 0V0h1920z"/>
                </svg>

            </div>
        )
    }

}

export default CodeWear