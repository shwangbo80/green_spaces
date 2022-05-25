import React, {useEffect, useState} from "react";
import {Row, Col, Image} from "react-bootstrap";
import {baseUrl} from "./assets/baseUrl";
import axios from "axios";

export default function MembershipComponent() {
  const [fetchMembership, setFetchMembership] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl + "membership")
      .then((result) => {
        setFetchMembership(result.data);
      })
      .catch((err) => {});
  }, []);

  const RenderMembership = () => {
    const renderData = fetchMembership.map((item, key) => {
      return (
        <Col className="p-3" md={4} key={key}>
          <div className="featured-image-container">
            <Image className="featured-image" src={item.image} />
          </div>
          <h2 className="mt-3 color-brown text-light">{item.name}</h2>
          <p className="text-light">{item.description}</p>
        </Col>
      );
    });
    return renderData;
  };

  return (
    <div className="membership-container">
      <h1 className="color-blue text-light">Membership Options</h1>
      <Row>
        <RenderMembership />
      </Row>
    </div>
  );
}
