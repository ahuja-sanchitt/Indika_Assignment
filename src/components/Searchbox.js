import React from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Form>
            <FormControl
              type="text"
              placeholder="Search"
              className="w-100"
              style={{ backgroundColor: '#f8f9fa' }}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBox;
