import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Products.css"

const initializer = {
    image: "",
    title: "",
    description: "",
    price: "",
    category: "",
};

const Product = () => {
    const [data, setdata] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const [newproduct, setnewproduct] = useState(initializer)
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortCriteria, setSortCriteria] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const fetchdata = () => {
        setloading(true);
        axios(`http://localhost:8000/products`)
            .then((res) => {
                setdata(res.data);
                setFilteredData(res.data);
                setloading(false);
            })
            .catch((err) => {
                console.log(err);
                setloading(false);
                seterror(true);
            });
    };

    const handlesubmit = (id) => {
        navigate(`/description/${id}`)
    }

    const handleAddProduct = (e) => {
        e.preventDefault();

        if (editingProduct) {
            axios.put(`http://localhost:8000/products/${editingProduct.id}`, newproduct)
                .then(() => {
                    alert("Product updated successfully");
                    fetchdata();
                    setEditingProduct(null);
                    setnewproduct(initializer);
                })
                .catch(() => {
                    alert("Something went wrong");
                });
        } else {
            axios.post("http://localhost:8000/products", newproduct, {
                headers: { "Content-Type": "application/json" }
            })
                .then(() => {
                    alert("Product added successfully");
                    fetchdata();
                })
                .catch(() => {
                    alert("Something went wrong");
                });
        }
    }

    const handleDeleteProduct = (id) => {
        axios.delete(`http://localhost:8000/products/${id}`)
            .then(() => {
                alert("Product deleted successfully");
                fetchdata();
            })
            .catch(() => {
                alert("Failed to delete product");
            });
    }

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setnewproduct(product);
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    useEffect(() => {
        let filtered = [...data];

        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(product =>
                product.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        if (sortCriteria) {
            if (sortCriteria === "lowToHigh") {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortCriteria === "highToLow") {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortCriteria === "nameAsc") {
                filtered.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortCriteria === "nameDesc") {
                filtered.sort((a, b) => b.title.localeCompare(a.title));
            }
        }

        setFilteredData(filtered);
    }, [searchQuery, selectedCategory, sortCriteria, data]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <>
            <div className="product-heading text-center my-5">
                <h2 className="title fw-bold text-dark">🛍️ Explore Our Products</h2>
                <p className="subtitle text-muted">Find the best items handpicked just for you</p>
            </div>

            <div className="container mb-4">
                <div className="row g-3 align-items-center">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="col-md-4">
                        <select className="form-select" value={sortCriteria} onChange={handleSortChange}>
                            <option value="">Sort By</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                            <option value="nameAsc">Name: A to Z</option>
                            <option value="nameDesc">Name: Z to A</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="">Filter by Category</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                        <div className="text-center">
                            <div className="spinner-border text-primary mb-3 fs-5" role="status" />
                            <h4 className="text-dark">Loading, please wait...</h4>
                        </div>
                    </div>
                ) : error ? (
                    <div className="text-center d-flex justify-content-center align-items-center">
                        <div className="spinner-border text-danger mb-3 fs-5" role="status" />
                        <h5 className="text-danger">ERROR 404... Failed to load products.</h5>
                    </div>
                ) : (
                    <div className="container-fluid d-flex ">
                        <div className='col-3'>
                            <form className="p-4 shadow rounded-4 bg-light col-12" onSubmit={handleAddProduct}>
                                <h4 className="mb-4 fw-bold text-primary">{editingProduct ? "✏️ Edit Product" : "➕ Add New Product"}</h4>

                                <div className="mb-3">
                                    <label className="form-label">Product Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newproduct.title}
                                        onChange={(e) => setnewproduct({ ...newproduct, title: e.target.value })}
                                        placeholder="Enter product title"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={newproduct.price}
                                        onChange={(e) => setnewproduct({ ...newproduct, price: e.target.value })}
                                        placeholder="Enter product price"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={newproduct.description}
                                        onChange={(e) => setnewproduct({ ...newproduct, description: e.target.value })}
                                        placeholder="Enter product description"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <select className="form-select" value={selectedCategory} onChange={(e) => setnewproduct({ ...newproduct, category: e.target.value })}>
                                        <option value="">Select by Category</option>
                                        <option value="men's clothing">Men's Clothing</option>
                                        <option value="women's clothing">Women's Clothing</option>
                                        <option value="jewelery">Jewelery</option>
                                        <option value="electronics">Electronics</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Image URL</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        value={newproduct.image}
                                        onChange={(e) => setnewproduct({ ...newproduct, image: e.target.value })}
                                        placeholder="https://..."
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-success w-100 fw-bold button">
                                    {editingProduct ? "Update Product" : "Add Product"}
                                </button>
                            </form>
                        </div>
                        <div className="container">
                            <div className="row">
                                {currentItems.map((el) => (
                                    <div key={el.id} className="col-md-4 mb-4">
                                        <div className="card shadow-sm rounded-4 border-0 h-100">
                                            <div onClick={() => handlesubmit(el.id)} style={{ cursor: "pointer" }}>
                                                <img
                                                    src={el.image}
                                                    alt={el.title}
                                                    className="img-fluid card-img-top"
                                                    style={{ objectFit: "contain", height: "300px", padding: "20px" }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{el.title}</h5>
                                                <p className="card-text text-muted">{el.category}</p>
                                                <p className="card-text fw-bold">₹{el.price}</p>
                                                <button className="btn-primary button" onClick={() => handleEditProduct(el)}>Edit</button>
                                                <button className="btn-danger Delete-button" onClick={() => handleDeleteProduct(el.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <span className="align-self-center mx-2">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    className="btn btn-primary"
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Product;