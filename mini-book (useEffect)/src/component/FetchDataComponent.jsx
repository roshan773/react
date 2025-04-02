import React, { useEffect, useState } from 'react'

function FetchDataComponent() {

  const[Data, setData] = useState()
  const[Loading, setLoading] = useState(false)
  const[Error, setError] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((result) => {
      setData(result)
      setLoading(false)
    })
    .catch((Error) => {
      setError(Error)
      setLoading(false)
    })
  })


  return (
    <>
      {Data.map((Post) => {
        console.log(Post);
      })}
    </>
  )
}

export default FetchDataComponent