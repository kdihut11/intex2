import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as bs from 'react-bootstrap';

class Help extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            email: "",
            response: ''
        }
        this.onHandleChangeQuestion = this.onHandleChangeQuestion.bind(this);
        this.onHandleChangeEmail = this.onHandleChangeEmail.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    render() {
        return(

        <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <bs.Col>
                    <h1>Help</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row noGutters>
                <bs.Col>
                    
                    We're here to help and answer any questions you might have. We look forward to hearing from you <span> </span>
                    <i className="far fa-smile-beam"></i>
                    
                </bs.Col>
            </bs.Row>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Questions:</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={this.onHandleChangeQuestion} value={this.state.question}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.onHandleChangeEmail} value={this.state.email} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
            <Button onClick={this.onHandleSubmit} variant="primary" type="submit">
                Submit
            </Button>
            <p>
                {this.state.response}
            </p>
        </bs.Container>
        )
    }
    onHandleChangeEmail(e) {
        this.setState({
          email: e.target.value,
          response: ''
        });
      }
      onHandleChangeQuestion(e) {
        this.setState({
          question: e.target.value,
          response: ''
        });
      }
    
    
      onHandleSubmit(e) {
        e.preventDefault();
        this.setState({
          email: '',
          question: '',
          response: 'Thank you for your submission!'
        });
    }


    
}
export default Help