import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaReact, FaLock, FaShoppingBag, FaRoute, FaServer, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../Components/Footer';

const ProjectPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-light text-center py-5 px-3">
        <h1 className="fw-bold">🚀 Project: Navigator</h1>
        <p className="lead mt-3">
          A Dynamic product catalog UI built using React, Axios & Bootstrap.
        </p>
      </div>

      {/* Tech Stack */}
      <Container className="text-center my-5">
        <h4 className="fw-bold text-dark mb-3">📦 Tech Stack Used</h4>
        {['React.js', 'React Router', 'Bootstrap 5', 'Axios'].map((tech, idx) => (
          <Badge key={idx} bg="secondary" className="me-2 mb-2 p-2">
            {tech}
          </Badge>
        ))}
      </Container>

      {/* Feature Cards */}
      <Container>
        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center p-3">
              <FaReact className="display-4 text-primary mb-3" />
              <Card.Title className="fw-semibold">React.js SPA</Card.Title>
              <Card.Text className="text-muted">
                Single-page app using React and Router DOM.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center p-3">
              <FaLock className="display-4 text-warning mb-3" />
              <Card.Title className="fw-semibold">Protected Routes</Card.Title>
              <Card.Text className="text-muted">
                Products page accessible only to logged-in users.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center p-3">
              <FaShoppingBag className="display-4 text-success mb-3" />
              <Card.Title className="fw-semibold">Product API</Card.Title>
              <Card.Text className="text-muted">
                Uses fakestoreapi.com to show product data.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center p-3">
              <FaRoute className="display-4 text-danger mb-3" />
              <Card.Title className="fw-semibold">Routing System</Card.Title>
              <Card.Text className="text-muted">
                Includes pages: Home, About, Products, Project, and Login.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm text-center p-3">
              <FaServer className="display-4 text-secondary mb-3" />
              <Card.Title className="fw-semibold">Mock Login</Card.Title>
              <Card.Text className="text-muted">
                Uses reqres.in API to simulate login and token.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Timeline Section */}
      <div className="bg-light py-5">
        <Container>
          <h4 className="fw-bold text-center mb-5">🧭 User Flow</h4>
          <Row className="text-center">
            <Col md={4}>
              <div className="p-4 border rounded bg-white shadow-sm">
                <h5>Login</h5>
                <p className="text-muted">Enter credentials to authenticate.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 border rounded bg-white shadow-sm">
                <h5>Products</h5>
                <p className="text-muted">View products only if authenticated.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 border rounded bg-white shadow-sm">
                <h5>Details</h5>
                <p className="text-muted">Click a product to see detailed info.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

     <Footer />
    </div>
  );
};

export default ProjectPage;
