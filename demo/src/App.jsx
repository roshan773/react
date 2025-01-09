import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image from './assets/image/flower.png'
import './App.css'
import { BsChevronLeft, BsSuitHeart } from "react-icons/bs";

function App() {
  // const [count, setCount] = useState(0)

  return (

    <div>
      <div className='card'>
        <div className='icon'>
          <div style={{display: "flex", alignItems: "center"}}>
            <BsChevronLeft style={{fontSize: "24px", color: "#9c9f97"}}/>
            <h3 style={{color: "#9c9f97", paddingLeft: "10px"}}>BACK TO ALL PLAN</h3>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <BsSuitHeart style={{fontSize: "24px", color: "#9c9f97"}}/>
          </div>
        </div>
        {/* <hr style={{color: "#d4d4d3"}}/> */}
        <div className='main'  style={{display: "flex"}}>
          <div className='image' style={{border: "1px solid #d4d4d3", borderRadius: "0px 0px 0px 10px"}}>
            <img src={image} alt="image" style={{width: "430px", height: "100%"}} />
          </div>
          <div style={{border: "1px solid #d4d4d3", borderRadius: "0px 0px 10px 0px", width: "100%", display: "block", textAlign: "start", padding: "10px 10px 10px 10px"}}>
            <h1 style={{color: "#6c6d6c"}}>Flower Pot with Handle</h1>
            <span style={{display: "block", textAlign: "start", fontSize: "20px", marginTop: "-30px"}}>Popular Household Plant</span>
            <br />
            <span style={{display: "block", textAlign: "start", fontSize: "40px"}}>$18</span>
            <br />
            <span>
              <p>Lorem ipsum dolor sit, abet consectetur adipisicing edit. Dicta a nostrum id minus officio explicate voluptatem cumae omni exercitation, at nihil ease ut nude sent? Corrupt architect laudanum in porno.</p>
            </span>
            <br />
            <div>
              <button>
                Add to cart
              </button>
              <button style={{marginLeft: "15px"}}>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
