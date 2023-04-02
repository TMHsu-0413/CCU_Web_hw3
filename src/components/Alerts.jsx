import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Alerts = ({state,close}) => {
  return (
    <Alert show={state.show} variant="danger">
      <Alert.Heading>{state.title}</Alert.Heading>
      <p>
        {state.content}
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => close(() => ({
          show:false,
          title:"",
          content:""
        }))}  variant="outline-danger">
          Close
        </Button>
      </div>
    </Alert>
  );
}

export default Alerts;
