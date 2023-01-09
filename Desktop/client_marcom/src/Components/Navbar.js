import Brand from '../Image/Brand.svg'
import React, { Component } from 'react'
import '../Css/Navbar.css'


export default class Navbar extends Component {
  render() {
    return (
        
    <div className='navbar-container'>
        <div className="nav-bar">
            <div className='nav-item'>
                <a href="/"><img src={Brand} alt="" /></a>
            </div>
            <div className='nav-item'>
                <a href="/Casting">Casting</a>
            </div>
            <div className='nav-item'>
                <a href="/GMILearning">GMI Learning</a>
            </div>
        </div>
    </div>
    )
  }
}
