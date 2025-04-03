import React from 'react'
import { data } from '../App'

const Message = () => {
  return (
    <data.Consumer>
      {(name) => {
        return <h1>My self {name}</h1>
      }}
    </data.Consumer>
  )
}

export default Message