import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <div className="custom-height d-flex flex-column justify-content-center mb-5">
      <h1 className="secondaryText">Contact Us</h1>
      <h5 className="mt-3 mb-4">
        If you are interested to take our courses, or need more information
        about them, or any other queries, <br /> Please feel free to contact us.
      </h5>
      <Form className="w-75 bg-blackish primaryText p-4 rounded-3" noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Phoner Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className="btn-green" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
