import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { getProductById } from "./api";

function ProductPage() {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    async function getData() {
      const product = await getProductById(id);
      setProduct(product.data);
    }

    getData();
  }, [id]);

  return (
    <Container>
      <div className="col-4 mx-auto m-5">
        {product.id &&
          product.media.map((media, idx) => (
            <div key={idx}>
              {media.type === "image" ? (
                <img className="w-100" src={media.url}></img>
              ) : (
                <video className="w-100" controls src={media.url}></video>
              )}
            </div>
          ))}
        <h1>{product.name}</h1>
        <h2>{product.vendor}</h2>
        <Link to={"/"}>Back to Product List</Link>
      </div>
    </Container>
  );
}

export default ProductPage;
