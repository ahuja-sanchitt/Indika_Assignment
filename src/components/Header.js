import React from 'react';
import { Button, Container, Navbar, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome to Roadvision AI</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Row>
            <Col>
              <Button variant="outline-primary" className="mx-2">Task Management</Button>
              <Button variant="outline-primary" className="mx-2">View Report</Button>
              <Button variant="outline-primary" className="mx-2">Download Report</Button>
              <Button variant="primary" className="mx-2">View On Maps</Button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
