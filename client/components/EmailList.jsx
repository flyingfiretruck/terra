import React from 'react'
import {Form, Button} from 'react-bootstrap';

const EmailList= () => (
  <div className="email_list">
    <div className="email_form">
      <div className="email_text_head_1">Get on our list.</div>
      <div className="email_text_head_2">Receive updates and stay in the loop! </div>
      <div className="email_text_head_3">We bring good news.</div>

      <Form>
        <Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox"
            label="Agree to terms and conditions" />
          </Form.Group> */}
          <Form.Control type="email" placeholder="Your email address" />
        </Form.Group>
        <Button variant="custom" type="submit">
          Register Now
        </Button>
      </Form>

    </div>
    <img className="email_background" src="assets/picture_1.jpg"/>
  </div>
);

export default EmailList;
