import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5  mt-auto">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h5 className="text-warning">Navigator</h5>
            <p className="text-secondary">
              Navigator is a React-based product catalog web app, providing users a sleek interface to browse, explore and discover products securely.
            </p>
          </Col>

          <Col md={4}>
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/project" className="text-light text-decoration-none">Project</Link></li>
              <li><Link to="/login" className="text-light text-decoration-none">Login</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="text-warning">Connect With Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" className="text-light fs-5"><FaLinkedinIn /></a>
              <a href="#" className="text-light fs-5"><FaGithub /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />
        <div className="text-center text-light">
          &copy; {new Date().getFullYear()} Navigator | Built with React & Bootstrap
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
