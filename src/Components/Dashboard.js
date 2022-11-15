import React from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import TodoList from "./TodoList";
import QuoteGen from "./QuoteApi";

const Dashboard = () => {
  return (
    <>
      <h2>
        Welcome, <Badge bg="secondary">UserName</Badge>
      </h2>
      <QuoteGen/>
      <Container className="UserInfo">
        <TodoList/>
      </Container>
    </>
  );
};

export default Dashboard;
