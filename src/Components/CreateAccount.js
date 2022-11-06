import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const CreateAccount = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
      const form = event.currentTarget;


    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    const setField = (field, value) => {
      setForm({
        ...form,
        [field]: value,
      });
      if (!!errors[field])
        setErrors({
          ...errors,
          [field]: null,
        });

    };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Enter a Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={(event) => setField(event.target.value)}
                isInvalid={!!errors.username}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Enter your email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="email"
              value={form.email}
              onChange={(event) => setField(event.target.value)}
              isInvalid={!!errors.email}
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Enter a Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="password"
              value={form.password}
              onChange={(event) => setField(event.target.value)}
              isInvalid={!!errors.password}
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Confirm your password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="confirm password"
              value={form.password}
              onChange={(event) => setField(event.target.value)}
              isInvalid={!!errors.password}
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please confirm password.
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="mt-4">
            Submit form
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default CreateAccount;
