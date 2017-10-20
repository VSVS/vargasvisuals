import React from 'react'
import {Button, Form, Segment, Grid, Icon} from 'semantic-ui-react'
import ReCAPTCHA from 'react-google-recaptcha'
import GoogleKey from '../GoogleKey'
import axios from 'axios'

// function onChange() {   return <Button type='submit'
// color="blue">Submit</Button> } function handleFormSubmission(e, val){
// e.preventDefault();   if(val){     onChange();     allowSubmission =  true;
// } }

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      recaptchaInstance: false
    }

    this.verifyCallback = this
      .verifyCallback
      .bind(this)

  }

  verifyCallback() {
    axios
      .get('https://dev.idevelop.nyc/process_form.php')
      .then(res => {
        if (res) {
          this.setState({recaptchaInstance: true});
          console.log(res)
        } else {
          console.log("couldnt verify recaptcha");
        }
      });

  }

  handleFormSubmission(e) {
    e.preventDefault();
    if (this.state.recaptchaInstance) {
      axios.post('https://dev.idevelop.nyc/send_message.php', {
        full_name: this.full_name.value,
        email: this.email.value,
        company: this.company.value,
        position: this.position.value,
        message: this.message.value
      })
      .then(res => {
        // PLACE RESPONSE HERE FROM SERVER
      })
      
    }
      
  }

  render() {

    const options = [
      {
        value: 'Temporary',
        text: 'Temp'
      }, {
        value:'Freelance', 
        text: 'Freelance'
      }, {
        value:'Part Time',
        text: 'Part time'
      }, {
        value:'Full Time',
        text: 'Full time'
      }
    ]

    return (

      <Grid>

        <Grid.Row columns="1" centered>
          <Grid.Column width="6" computer="4" mobile="14">
            <Form
              inverted
              success
              onSubmit={this
              .handleFormSubmission
              .bind(this)}>

              <Form.Input type='text' label='Full Name' placeholder='Full Name' required name='full_name'/>
              <Form.Input type='email' label='Email' placeholder='Email' required name='email'/>
              <Form.Input type='text' label='Company Name' placeholder='Company' name='company'/>
              <Form.Dropdown
                name='position'
                label='Position Type'
                fluid
                selection
                placeholder="Position Type"
                options={options}
                required
                />
              <Form.TextArea label='Message' placeholder="Enter message" required name='message'></Form.TextArea>
              <Button type='submit' color='blue' size='big'>
                <Icon name='send outline'></Icon>Submit</Button>
              <br/>

              <ReCAPTCHA
                sitekey={GoogleKey}
                ref='recaptcha'
                render="explicit"
                onChange={this.verifyCallback}/>

            </Form>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }

}

export default ContactForm