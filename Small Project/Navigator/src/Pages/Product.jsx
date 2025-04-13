import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';

const Product = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchdata = () => {
    setloading(true);
    axios(`https://fakestoreapi.com/products`)
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        seterror(true);
      });
  };

  const handlesubmit = (id) => {
    alert(`Id of product is ${id}`)
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="text-center my-5">
        <h2 className="fw-bold text-dark">🛍️ Explore Our Products</h2>
        <p className="text-muted">Find the best items handpicked just for you</p>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="text-center">
            <div className="spinner-border text-primary mb-3 fs-5" role="status" />
            <h4 className="text-dark">Loading, please wait...</h4>
          </div>
        </div>
      ) : error ? (
        <h1 className="text-center text-danger">ERROR 404... Failed to load products.</h1>
      ) : (
        <div className="container-fluid">
          <div className="row">
            {data.map((el) => (
              <div key={el.id} className="col-md-4 mb-4">
                <div className="card shadow-sm rounded-4 border-0 h-100">
                  <img
                    src={el.image}
                    alt={el.title}
                    className="img-fluid card-img-top"
                    style={{ objectFit: "contain", height: "300px", padding: "20px" }}
                  />
                  <div className="card-body" style={{ background: "#f9f9f9" }}>
                    <h5 className="card-title fw-semibold">{el.title}</h5>
                    <p className="card-text text-muted fs-5">${el.price}</p>
                    <div className='d-flex justify-content-center align-items-center'>
                      <button className="button w-50" onClick={() => handlesubmit(el.id)}>View More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Product;
