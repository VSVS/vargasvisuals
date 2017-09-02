import React, { Component } from 'react';
import axios from 'axios';
import TransitionGroup from 'react-addons-css-transition-group';


class JobSharks extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            posts: []
        }

    }
    componentDidMount(){
        axios.get('https://www.reddit.com/r/reactjs.json')
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
        });
    }
    render(){
        return(
            <div>
                  <TransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                    >
                <ul>
                {this.state.posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
                </ul>

                </TransitionGroup>
            </div>
        )
    }
}

export default JobSharks