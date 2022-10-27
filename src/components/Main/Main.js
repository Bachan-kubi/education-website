import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={4} className='d-none d-lg-block'>
            <LeftNav />
          </Col>
          <Col lg={8}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
