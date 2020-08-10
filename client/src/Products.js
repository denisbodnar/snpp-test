import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Card, Container } from "react-bootstrap";

import { getVendors, getProducts, getPromotion } from "./api";
import extractMedia from "./utils";

function Products() {
  let [search, setSearch] = useState("");
  let [products, setProducts] = useState([]);
  let [vendors, setVendors] = useState([]);
  let [promotion, setPromotion] = useState({});
  let [selectedVendor, setSelectedVendor] = useState("");

  useEffect(() => {
    async function getData() {
      const products = await getProducts(search);
      setProducts(products.data);
    }

    getData();
  }, [search]);

  useEffect(() => {
    async function getData() {
      const [vendors, promotion] = await Promise.all([
        getVendors,
        getPromotion,
      ]);
      setVendors(vendors.data);
      setPromotion(promotion.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <Form className="col-12 mb-5 mt-5">
        <Row>
          <Col>
            <Form.Control
              as="input"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type your search here"
            />
          </Col>
          <Col>
            <Form.Control
              as="select"
              onChange={(e) => setSelectedVendor(e.target.value)}
            >
              <option value={""}>All</option>
              {vendors.map((vendor) => (
                <option key={vendor}>{vendor}</option>
              ))}
            </Form.Control>
          </Col>
        </Row>
      </Form>
      <div className="d-flex flex-wrap">
        {products.length ? (
          [...products]
            .filter((item) =>
              selectedVendor ? item.vendor === selectedVendor : true
            )
            .sort((a, b) => a.order - b.order)
            .map((product, idx) => (
              <Fragment key={idx}>
                <Card className="col-4 border-0">
                  <Card.Img
                    variant="top"
                    src={extractMedia(product.media, "image")}
                  />
                  <Card.Body>
                    <Link to={`/${product.id}`}>
                      <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Card.Text>{product.vendor}</Card.Text>
                  </Card.Body>
                </Card>
                {promotion.order === idx && (
                  <Card className="col-4 border-1">
                    <Card.Body>
                      <Card.Title>
                        <h2>{promotion.text}</h2>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                )}
              </Fragment>
            ))
        ) : (
          <div className="mx-auto">No products found</div>
        )}
      </div>
    </Container>
  );
}

export default Products;
