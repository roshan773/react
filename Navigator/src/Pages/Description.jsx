import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer';

const Description = () => {

  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchproduct = () => {
    setloading(true)
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setproduct(res.data)
        setloading(false)
      })
  }

  useEffect(() => {
    fetchproduct()
  }, [id])

  return loading === true ? (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <div className="spinner-border text-primary mb-3 fs-5" role="status" />
        <h4 className="text-dark">Loading, please wait...</h4>
      </div>
    </div>
  ) : error === true ? (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <div className="spinner-border text-danger mb-3 fs-5" role="status" />
        <h4 className="text-dark">404 ERROR PRODUCT NOT FOUND</h4>
      </div>
    </div>
  ) : (
    <>
      {product && (
        <div className='container my-5'>
          <div className='row  shadow-lg p-5 card align-items-center'>
            <div className='col-12  col-md-6  d-flex justify-content-center mb-4'>
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="fw-bold mb-3">{product.title}</h2>
              <p className="text-muted">{product.description}</p>
              <h4 className="text-success fw-semibold">${product.price}</h4>
              <div className='w-100'>
                <button className="btn btn-dark mt-4 px-4 py-2 ps-2 w-50">ADD TO CART</button>
                <button className='btn btn-success mt-4 px-4 py-2 w-50'>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Description