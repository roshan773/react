import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Components/Footer';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className="min-vh-100 d-flex align-items-center bg-light">
        <Container>
          <Row className="align-items-center flex-column-reverse flex-md-row">
            {/* Text Section */}
            <Col md={6} className="text-center text-md-start mt-5 mt-md-0">
              <h1 className="display-5 fw-bold mb-3 text-dark">🛒 Welcome to Navigator</h1>
              <p className="lead text-muted mb-4">
                Explore our curated product catalog powered by React. Seamless routing, secure login,
                and dynamic data – all in one place.
              </p>
              <Button
                variant="dark"
                size="lg"
                className="rounded-pill px-4"
              >
                Explore Products <FaArrowRight className="ms-2" />
              </Button>
            </Col>

            {/* Image Section */}
            <Col md={6} className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
                alt="Ecommerce Vector"
                className="img-fluid"
                style={{ maxHeight: '380px' }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Home;
