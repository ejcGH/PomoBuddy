import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useLoginAuth } from "./LoginAuth";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./Nav";

const LogInPage = () => {
  // const userRef = useRef();
  // const errRef = useRef();

  //   const [user, setUser] = useState("");
  //   const auth = useLoginAuth()
  //   const navigate = useNavigate()

  //   const handleLogin = () => {
  //     auth.LogInPage(user)
  //     navigate('/Dashboard')
  // }

  // const [pwd, setPwd] = useState("");
  // const [loginerrorMsg, setLoginErrorMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setLoginErrorMsg("");
  // }, [user, pwd]);

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
      <NavigationBar />
      <section>
        {/* <p
          ref={errRef}
          className={loginerrorMsg ? "loginerrorMsg" : "offscreen"}
          aria-live="assertive"
        >
          {loginerrorMsg}
        </p> */}
      </section>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(event) => setField(event.target.value)}
            isInvalid={!!errors.email}
            defaultValue=""
            // ref={userRef}
            autoComplete="off"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please enter your email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(event) => setField(event.target.value)}
            isInvalid={!!errors.password}
            defaultValue=""
          />

          <Form.Control.Feedback type="invalid">
            Please enter your password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            required
            type="checkbox"
            label="Remember me"
            isInvalid={!!errors.checkbox}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/CreateAccount">Create an account </Link>
    </>
  );
};

export default LogInPage;
