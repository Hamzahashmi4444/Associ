import React, { Component } from "react";
import { FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa";
class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="contact-page__email">
          <FaEnvelope />
          <p>asimdeo@asimassociate.com</p>
        </div>
        <div className="contact-page__phone">
          <FaPhone />
          <p>(042) 37231500</p>

        </div>
        <div className="contact-page__address">
          <FaMapMarker />
          <p>
             Chamber no 119 exective block DBA,Sialkot
            Lahore.
          </p>
        </div>
      </div>
    );
  }
}

export default ContactPage;
