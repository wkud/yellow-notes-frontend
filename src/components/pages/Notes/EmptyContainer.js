import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const EmptyContainer = () => {
  return (
    <Row className='justify-content-center' style={{ userSelect: 'none' }}>
      <Col xs={11} className='my-4 text-center'>
        <div className='display-4 text-primary'>it's empty here!</div>
        <p className='lead mt-3'>
          Click the
          <Button disabled variant='outline-success' className='mx-2' style={{ cursor: 'default' }}>
            <i className='fas fa-font fa-fw' />
            <span className='d-none d-lg-inline'>Text</span>
          </Button>
          or
          <Button disabled variant='outline-success' className='mx-2' style={{ cursor: 'default' }}>
            <i className='fas fa-tasks fa-fw' />
            <span className='d-none d-lg-inline'>Todo</span>
          </Button>
          button on the navigation bar to start.
        </p>
      </Col>
    </Row>
  );
};

export default EmptyContainer;
