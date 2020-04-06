import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as bs from 'react-bootstrap';

function Help(props) {
    return (
        <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <bs.Col>
                    <h1>Help</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row noGutters>
                <bs.Col>
                    <p>
                    We're here to help and answer any questions you might have. We look forward to hearing from you   
                    <i class="far fa-smile-beam"></i>
                    </p>
                </bs.Col>
            </bs.Row>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Questions:</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </bs.Container>
    )
}
export default Help