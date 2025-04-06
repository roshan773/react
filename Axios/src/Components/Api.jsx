import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Api = () => {
  const [value, setvalue] = useState([]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setvalue(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {value.map((el) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={el.image} alt={el.title} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
                <Card.Text>{el.price}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Api;
