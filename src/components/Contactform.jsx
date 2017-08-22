import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const ContactForm = () => (

  
  <Segment inverted>
    <Form inverted success>
      <Form.Group widths='equal'>
        <Form.Input label='First name' placeholder='First name' />
        <Form.Input label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default ContactForm