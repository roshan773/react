import React from 'react'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
        <nav>
            <div>
                <img src={'../src/assets/images/logo.png'} alt="logo" style={{width: "70px", height: "70px"}}/>
            </div>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">SERVICE</a></li>
            </ul>
            <div style={{fontSize: "20px"}}>
                <FaSearch />
            </div>
        </nav>
    </>
  )
}

export default Header