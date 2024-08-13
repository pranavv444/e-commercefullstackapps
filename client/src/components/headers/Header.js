import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='menu'>
            <CiMenuBurger size={30}/>
        </div>
        <div className='logo'>
            <h1>
                <Link to='/'>30 Shop</Link>
            </h1>
        </div>
        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/login'>Login or Register</Link></li>
            <li>
                <IoMdClose size={30} className='menu'/>
            </li>

        </ul>
        <div className='cart-icon'>
            <span>0</span>
            <Link><FaCartPlus size={25}/></Link>
        </div>
    </header>
  )
}

export default Header