import React from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

const Dashboard = () => {
  return (
    <>
      <h2>
        Welcome, <Badge bg="secondary">UserName</Badge>
      </h2>
      <Container className="UserInfo">
        <h2>todo list will go here</h2>
      </Container>
    </>
  );
};

export default Dashboard;
