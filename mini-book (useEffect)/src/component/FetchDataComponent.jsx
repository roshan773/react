import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function FetchDataComponent() {

  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)
  const [Error, setError] = useState(false)
  const [page, setpage] = useState(1)

  const fetchData = () => {
    setloading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setloading(false)
        setdata(data)
      })
      .catch((Error) => {
        setloading(false)
        setError(Error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return loading == true ? (<h1>loading...</h1>) : Error == true ? (<h1>ERROR 404</h1>) : (
    <>
      <h1>FETCH DATA</h1>
      <div>
        <div id='container' style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {data.map((el) => (
            <div style={{ border: "1px solid white" }}>
              <p>{el.id}</p>
              <h2>{el.title}</h2>
              <p>{el.body}</p>
            </div>
          ))}
        </div>
        <button disabled={page==1} onClick={() => setpage(page -1)}>previous</button>
        {page}
        <button disabled={page==data.length} onClick={() => setpage(page +1)}>Next</button>
      </div>
    </>
  )
}

export default FetchDataComponent