import React, { useEffect, useState } from "react";

function Api() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [value, setvalue] = useState(1);

  const fetchData = () => {
    setloading(true);
    fetch(`https://fakestoreapi.com/products?limit=6`)
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setdata(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading == true ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <h1>FETCH DATA</h1>
      <div
        id="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {data.map(
          (
            el,
            index 
          ) => (
            <div id="product" key={index}>
              <img src={el.image} alt="" width={300} height={300} />
              <h2>{el.title}</h2>
              <h5>{el.description}</h5>
              <h4>Price: {el.price}</h4>
            </div>
          )
        )}
      </div>

      <button>BACK</button>
      <span id="value">{value}</span>
      <button>NEXT</button>
    </>
  );
}

export default Api;
