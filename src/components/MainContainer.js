import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import HeroComponent from "./HeroComponent";
import FeaturedComponent from "./FeaturedComponent";
import FooterComponent from "./FooterComponent";
import MembershipComponent from "./MembershipComponent";
import PerksComponent from "./PerksComponent";

export default function MainContainer() {
  return (
    <div>
      <Row className="bg-green sticky-top">
        <Col md={2}></Col>
        <Col md={8}>
          <NavbarComponent />
        </Col>
        <Col md={2}></Col>
      </Row>
      <HeroComponent />
      <Container fluid>
        <Row className="bg-light">
          <Col md={12} xxl={3}></Col>
          <Col md={12} xxl={6}>
            <FeaturedComponent />
          </Col>
          <Col md={12} xxl={3}></Col>
        </Row>
        <Row className="bg-brown">
          <Col md={12} xxl={3}></Col>
          <Col md={12} xxl={6}>
            <MembershipComponent />
          </Col>
          <Col md={12} xxl={3}></Col>
        </Row>
        <Row className="bg-light">
          <Col md={12} xxl={3}></Col>
          <Col md={12} xxl={6}>
            <PerksComponent />
          </Col>
          <Col md={12} xxl={3}></Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
}
