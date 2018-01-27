import React from 'react'
import {
  Button,
  Form,
  Segment,
  Grid,
  Container,
  Icon,
  Image,
  Loader,
  Message
} from 'semantic-ui-react'
import ReCAPTCHA from 'react-google-recaptcha'
import GoogleKey from '../GoogleKey'
import axios from 'axios'
import classnames from 'classnames'
import qs from 'qs'

import profilePic from '../imgs/profile-pic.png'
import geometric from '../imgs/geometric.png'

const MessageExamplePositive = (props) => (
  <Message className='animated fadeInDown' positive hidden={props.hideNotification}>
    <Message.Header><h1>Thanks!</h1></Message.Header>
    <p>I've received your <b>message</b> and will get back to you asap.</p>
  </Message>
)




class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      recaptchaInstance: false,
      loading: false,
      hideNotification: true,
      full_name: '',
      email: '',
      company: '',
      //position: '',
      message: ''

    }

    this.verifyCallback = this
      .verifyCallback
      .bind(this)

    this.handleOnChange = this
      .handleOnChange
      .bind(this)

  }

  verifyCallback() {
    axios
      .get('https://vargasvisuals.com/process_form.php')
      .then(res => {
        if (res) {
          this.setState({recaptchaInstance: true})
        } else {
          console.log("couldnt verify recaptcha")
        }
      });

  }
  handleOnChange(e) {

    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);

  }

  handleFormSubmission(e) {
    e.preventDefault()
    if (this.state.recaptchaInstance) {
      this.setState({loading: true})
      axios
        .post('https://vargasvisuals.com/send_message.php', qs.stringify({
        full_name: this.state.full_name,
        email: this.state.email,
        company: this.state.company,
        position: this.state.position,
        message: this.state.message
      }))
      .then(res => {
        this.setState({
          loading: false,
          hideNotification: false,
          full_name: '',
          email: '',
          company: '',
          position: '',
          message: '',
        
        })
      })
      .catch(function (error) {
        console.log(error)
      });
    } else {
      alert('Please Complete Form Requirements')
    }
       
  }

  render() {
    const style = {
      pic:{
        borderRadius:'100%',
        borderBottom:'6px solid #1f4071',
        borderRight:'6px solid #1f4071',
        overFlow:'visible'
        
      }
    }
    const options = [
      {
        value: 'Temporary',
        text: 'Temp'
      }, {
        value: 'Freelance',
        text: 'Freelance'
      }, {
        value: 'Part Time',
        text: 'Part time'
      }, {
        value: 'Full Time',
        text: 'Full time'
      }
    ]
    const {full_name, email, company, position, message} = this.state
    return (
      
      <Grid className='hire'>
      <Container>
        <Grid.Row>
          <Grid.Column>
            <MessageExamplePositive hideNotification={this.state.hideNotification}/>
          </Grid.Column>
        </Grid.Row>
      </Container>
        
        <Grid.Row columns="2" stackable>
          <Grid.Column only='computer'>
            <Image style={style.pic} floated='right' src={profilePic}/>
          </Grid.Column>
          <Grid.Column width="6" computer="5" mobile="16">

            <Loader/>
            <Form
              inverted
              success
              onSubmit={this
              .handleFormSubmission
              .bind(this)}
              className={classnames({'loading': this.state.loading})}>

              <Form.Input
                onChange={this.handleOnChange}
                value={full_name}
                label='Full Name'
                placeholder='Full Name'
                required
                name='full_name'type='text'/>
              <Form.Input
                onChange={this.handleOnChange}
                value={email}
                label='Email'
                placeholder='Email'
                required
                name='email'type='email'/>
              <Form.Input
                onChange={this.handleOnChange}
                value={company}
                label='Company Name'
                placeholder='Company'
                name='company'type='text'/>
              {/* <Form.Dropdown
                onChange={this.handleOnChange}
                name='position'
                label='Position Type'
                fluid
                selection
                placeholder="Position Type"
                options={options}
                required
                value={position}/> */}
              <Form.TextArea
                onChange={this.handleOnChange}
                value={message}
                label='Message'
                placeholder="Enter message"
                required
                name='message'></Form.TextArea>
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