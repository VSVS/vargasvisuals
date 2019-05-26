import React from 'react'
import {
  Button,
  Form,
  Grid,
  Container,
  Icon,
  Image,
  Loader,
  Message
} from 'semantic-ui-react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import classnames from 'classnames'
import qs from 'qs'

import profilePic from '../imgs/profile-pic.png'
const GoogleKey = '6LeRDDIUAAAAADumMmP17GHsfwYAAy4KFpzLSvNq'

const MessagePositive = (props) => (
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
        overFlow:'visible',
        width:'200px',
        opacity:'.75',
        marginRight:'70px',
        marginTop:'30px',
        marginBottom:'10px'
        
      },
      
    }

    const {full_name, email, company, message} = this.state
    return (
      <div className='hire'>
      <Grid >
      <Container>
        <Grid.Row>
          <Grid.Column>
            <MessagePositive hideNotification={this.state.hideNotification}/>
          </Grid.Column>
        </Grid.Row>
      </Container>
        
        <Grid.Row columns="2" centered>
          <Grid.Column width={6} computer='6' mobile='16'>
            
            <div><h1>Book an appointment with me by sharing your project details <Icon name="comment"/></h1></div>
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
                onChange={this.verifyCallback}/>

            </Form>
          </Grid.Column>
        </Grid.Row>

      </Grid>
      </div>
    )
  }

}

export default ContactForm