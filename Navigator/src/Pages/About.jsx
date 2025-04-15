import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <div className="bg-light text-dark py-5 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            {/* Text Content */}
            <Col md={6}>
              <h1 className="display-5 fw-bold text-primary mb-4">About Navigator</h1>
              <p className="lead">
                <strong>Navigator</strong> is a React.js-based product catalog application built for learning and mastering routing, authentication, and API handling.
              </p>
              <p>
                This project is perfect for front-end developers who want to dive into practical implementation of protected routes, API calls using Axios, and responsive design using Bootstrap.
              </p>

              <ul className="list-unstyled mt-3">
                <li className="mb-2">🚀 Built with React & Bootstrap 5</li>
                <li className="mb-2">🔐 Private Routes with Auth Check</li>
                <li className="mb-2">📡 Data from FakeStore API via Axios</li>
                <li className="mb-2">🧭 Seamless navigation using React Router</li>
              </ul>

              <Button variant="primary" size="lg" className="mt-4">
                Get Started
              </Button>
            </Col>

            {/* Image Content */}
            <Col md={6} className="text-center mt-5 mt-md-0">
              <Card className="shadow border-0">
                <Card.Img
                  src="https://i.pinimg.com/originals/b9/e4/96/b9e4960c1476c78043d499d975f86cdb.gif"
                  alt="Developer working on laptop"
                  className="img-fluid rounded"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
