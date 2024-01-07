import React from 'react'
import developer from '../assets/img/female developer.svg'
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/About.css'

function About() {
  return (

      <section className='about' id='about'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5}>
                        <img src={developer} alt='About Img' />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <h2> About Me</h2>
                        <p>
                        I'm Karthigayani, a Fullstack Developer hailing from the vibrant city of Chennai, Tamil Nadu. With a keen eye for detail and a dedication to clean code, I'm on a mission to build seamless, user-centric digital solutions that blend cutting-edge technology with a sleek user interface.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}










export default About
