import React from 'react'
import { Form, Button } from 'react-bootstrap';

const EmailList= () => (
  <div className="email_list">
    <div className="email_form">
      <div className="email_text_head_1">News Letter</div>
      <div className="email_text_head_2">Receive updates and stay in the loop.</div>
      <Form className="email_form_input">
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" className="email-input" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="custom" className="email-form-button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    <img className="email_background" src="assets/picture_1.jpg"/>
  </div>
);

export default EmailList;
