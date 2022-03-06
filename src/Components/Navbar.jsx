import React from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import "../styles/style.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <h3>Kissania</h3>
      </div>
      <div className="middle">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link href="">Shop</Link>
      </div>
      <div className="right">
        <div style={{ marginRight: "15px" }} id="google_translate_element"></div>
        {/* <button className='primary-button'><LanguageIcon /> Select Language </button> */}
      </div>
    </div>
  )
}

export default Navbar