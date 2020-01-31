import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
export default class NavBar extends Component {
  render() {
    return (                      
      /* 
      https://www.iconfinder.com/icons/1243689/call_phone_icon
      Creative Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk 
      */
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        <Link to='/' >
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-item-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className="nav-link">
              Product</Link>
          </li>
        </ul>
        <Link to='/card' className='ml-auto'>
          <button>
            <i className='fas fa-cart-plus' />
            my cart
        </button>
        </Link>

      </nav>


    )
  }
}