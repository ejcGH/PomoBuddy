import React from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import TodoList from "./TodoList";
import QuoteGen from "./QuoteApi";
import { useLoginAuth } from "./LoginAuth";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./Nav";

const Dashboard = () => {
  //   const auth = useLoginAuth()
  // const navigate = useNavigate()
  //   const handleLogout = () => {
  //     auth.log()
  //     navigate('/')

  return (
    <>
      <NavigationBar />
      <h2>
        Welcome, <Badge bg="secondary">username</Badge>
      </h2>
      <QuoteGen />
      <Container className="UserInfo">
        <TodoList />
      </Container>
    </>
  );
};

export default Dashboard;
