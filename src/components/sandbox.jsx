import React, { Component } from 'react';
import '../bw/materialize/dist/css/materialize.css';

class Sandbox extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div>
        <a id="menu" className="waves-effect waves-light btn btn-floating" ><i className="material-icons">menu</i></a>

        <div className="tap-target" data-activates="menu">
            <div className="tap-target-content">
            <h5>Title</h5>
            <p>A bunch of text</p>
            </div>
        </div>
    </div>
    );
  }
}

export default Sandbox;
