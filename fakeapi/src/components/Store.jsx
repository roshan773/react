import { useEffect, useState } from "react";

const initializer = {
  image: "",
  title: "",
  description: "",
  price: "",
};

function Api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState(initializer);
  const [page, setPage] = useState(1);
  const limit = 6; // Number of products per page

  const fetchData = () => {
    setLoading(true);
    fetch(`http://localhost:3000/products?_page=${page}&_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const Delete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addProduct = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        alert("Product added successfully");
        fetchData();
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return loading ? (
    <h1>LOADING...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <>
      <h1>FETCH DATA</h1>
      <div className="main-container">
        <div
          id="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {data.map((el) => (
            <div
              id="card"
              key={el.id}
              style={{
                border: "1px solid #000000",
                margin: "10px",
                padding: "20px",
              }}
            >
              <img src={el.image} alt="" width={300} height={300} />
              <h2>{el.title}</h2>
              <h5>{el.description}</h5>
              <h4>Price: {el.price}</h4>
              <button onClick={() => Delete(el.id)}>DELETE</button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            PREV
          </button>
          <span>Page {page}</span>
          <button onClick={() => setPage(page + 1)}>NEXT</button>
        </div>

        {/* Add Product Form */}
        <form onSubmit={addProduct} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Image URL"
            required
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Title"
            required
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            required
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            required
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <button type="submit">ADD PRODUCT</button>
        </form>
      </div>
    </>
  );
}

export default Api;
