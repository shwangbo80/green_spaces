import React, {useState, useEffect} from "react";
import {Row, Col, Image} from "react-bootstrap";
import {baseUrl} from "./assets/baseUrl";
import axios from "axios";

export default function FeaturedComponent() {
  const [fetchFeatured, setFetchFeatured] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl + "spaces")
      .then((result) => {
        setFetchFeatured(result.data);
      })
      .catch((err) => {});
  }, []);

  const RenderFeatured = () => {
    const renderData = fetchFeatured.map((item, key) => {
      return (
        <Col md={12} lg={6} className="p-3" key={key}>
          <div className="featured-image-container">
            <Image className="featured-image" src={item.image} />
          </div>
          <h2 className="mt-3 text-light">{item.city}</h2>
          <p>{item.description}</p>
        </Col>
      );
    });
    return renderData;
  };

  return (
    <Row className="featured-container">
      <h1 className="color-blue py-4">Featured Locations</h1>
      <RenderFeatured />
    </Row>
  );
}
