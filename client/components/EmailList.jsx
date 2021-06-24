import React from 'react'

const EmailList= () => (
  <div className="email_list">
    <div className="email_form">
      <div className="email_text_head_1">Get on our list.</div>
      <div className="email_text_head_2">Receive updates and stay in the loop! </div>
      <div className="email_text_head_3">We bring good news.</div>
      <form className="email_form_input">
        <input className="email-input" placeholder="Your e-mail address" type="text"/>
        <input className="email-input-button" type="submit" value="submit"/>
      </form>
    </div>
    <img className="email_background" src="assets/picture_1.jpg"/>
  </div>
);

export default EmailList;
