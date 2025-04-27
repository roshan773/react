import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LuArrowLeftToLine } from 'react-icons/lu';
import { Link, useParams } from 'react-router-dom';

const Description = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch product details
    const fetchProduct = () => {
        setLoading(true);
        axios(`http://localhost:8000/products/${id}`)  // Make sure you're fetching from your local backend
            .then((res) => {
                console.log(res.data); // Check the data in the console
                setProduct(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
                console.error("Error fetching product:", err);
            });
    };

    // Fetch product when the page loads or id changes
    useEffect(() => {
        fetchProduct();
    }, [id]);

    // Loading state
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="text-center">
                    <div className="spinner-border text-primary mb-3 fs-5" role="status" />
                    <h4 className="text-dark">Loading, please wait...</h4>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="text-center">
                    <div className="spinner-border text-danger mb-3 fs-5" role="status" />
                    <h4 className="text-dark">404 ERROR PRODUCT NOT FOUND</h4>
                </div>
            </div>
        );
    }

    // Product details
    return (
        <>
            <Link
                to="/"
                className="btn btn-outline-dark d-inline-flex align-items-center gap-2 px-4 py-2 rounded-4 fw-medium shadow-sm"
                style={{ textDecoration: 'none' }}
            >
                <LuArrowLeftToLine size={18} /> Back to Products
            </Link>
            {product && (
                <div className='container my-5'>
                    <div className='row shadow-lg p-5 card align-items-center'>
                        <div className='col-12 col-md-6 d-flex justify-content-center mb-4'>
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
                            <h4 className="text-success fw-semibold">₹{product.price}</h4>
                            <div className='w-100'>
                                <button className="btn btn-dark mt-4 px-4 py-2 ps-2 w-50">ADD TO CART</button>
                                <button className='btn btn-success mt-4 px-4 py-2 w-50'>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Description;

