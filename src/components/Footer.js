import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed for TSA</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>This is a Fictious company</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
