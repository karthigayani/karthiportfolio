import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    try {
      // let response = await fetch('http://localhost:4000/contact', {
      let response = await fetch('https://portfoliobackend-eta.vercel.app', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText('Send');

      if (response.ok) {
        let result = await response.json();
        if (result && result.code === 200) {
          setStatus({ success: true, message: 'Message Sent Successfully' });
        } else {
          setStatus({ success: false, message: 'Something went wrong, Please try again later' });
        }
      } else {
        setStatus({ success: false, message: 'Server error, Please try again later' });
      }

      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error('Error during form submission:', error);
      setStatus({ success: false, message: 'An error occurred during form submission' });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center contact " id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="mx-auto">
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <p>Email: karthi1826@gmail.com</p>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </Col>
          <Col md={6} xs={12} className="mx-auto">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate('lastName', e.target.value)}
              />
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email"
                onChange={(e) => onFormUpdate('email', e.target.value)}
              />
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone Num"
                onChange={(e) => onFormUpdate('phone', e.target.value)}
              />
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate('message', e.target.value)}
              ></textarea>
              <button type="submit"><span>{buttonText}</span></button>
            </form>
            {status.message && (
              <Col>
                <p style={{ color: 'aliceblue' }} className={status.success === false ? "danger" : "success"}>{status.message}</p>
              </Col>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

