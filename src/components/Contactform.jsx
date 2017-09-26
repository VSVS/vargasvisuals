import React from 'react'
import { Button, Form, Segment, Dropdown, Grid } from 'semantic-ui-react'
import ReCAPTCHA from 'react-google-recaptcha'
import GoogleKey from '../GoogleKey'


function onChange(value) {
  console.log("Captcha value:", value);
}

class ContactForm extends React.Component{


  render(){

    const options = [
      {
        text:'Temp'
      },
      {
        text:'Freelance'
      },
      {
        text:'Part time'
      },
      {
        text:'Full time'
      }
    ]

    return(
      <Grid>

        <Grid.Row columns="1" centered>
          <Grid.Column width="6">
            <Form inverted success>
              
                <Form.Input label='Full Name' placeholder='Full Name' />
                <Form.Input label='Email' placeholder='Email' />
                <Form.Input label='Company Name' placeholder='Company' />
                <Dropdown placeholder="Subject of inquiry" options={options}/>
                <textarea placeholder="Message"></textarea>
              
              <Button type='submit'>Submit</Button>
              <ReCAPTCHA
                ref="recaptcha"
                sitekey={GoogleKey}
                onChange={onChange}
              />
            </Form>
          </Grid.Column>
        </Grid.Row>

    </Grid>
    )
  }
  
  
}

export default ContactForm