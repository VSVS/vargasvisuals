import React, { Component } from 'react';


const Hire = () => (
  <div>

    <div className="row">
      <div className="col s12">
      <h2>Hire</h2>
      </div>
    </div>

    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12 m6 offset-m3">
          <i className="material-icons prefix">account_circle</i>
          <input id="full_name" type="text" className="validate" />
          <label for="full_name">Full Name</label>
        </div>
        <div className="input-field col s12 m6 offset-m3">
          <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
     
        <div className="input-field col s12 m6 offset-m3">
          <i className="material-icons prefix">business</i>
          <input id="full_name" type="text" className="validate" />
          <label for="full_name">Company</label>
        </div>
        
        <div className="input-field col s12 m6 offset-m3">
        <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Type</a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!">Full time</a></li>
          <li><a href="#!">Part time</a></li>
          <li><a href="#!">Freelance</a></li>
          <li><a href="#!">General</a></li>
        </ul>
        </div>

        <div className="input-field col s12 m6 offset-m3">
          <i className="material-icons prefix">message</i>
         <textarea id="message" className="materialize-textarea"></textarea>
          <label for="textarea1">How can I help you?</label>
        
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
        <i className="material-icons right">send</i>
      </button>
     
    </form>
  </div>

  </div>
)


export default Hire;
