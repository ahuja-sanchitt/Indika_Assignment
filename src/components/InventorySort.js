import React from 'react';
import { Dropdown, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InventorySorter = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <ButtonGroup className='d-flex'>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className='mx-5'>
                Sorted by name
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Category</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                All inventory assets
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">All inventory assets</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Available inventory assets</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Sold inventory assets</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default InventorySorter;
