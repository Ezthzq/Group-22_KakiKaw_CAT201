import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  const toggleProfileMenu = () => setProfileMenuVisible((prev) => !prev);

  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 bg-white">
      <Link to="/"><img src={assets.logo} className="w-36" alt="Logo" /></Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex sm:gap-6 md:gap-10 lg:gap-14 text-sm text-gray-600 font-medium">
        <NavLink to="/" className="flex flex-col items-center hover:text-black">
          <p>HOME</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center hover:text-black">
          <p>COLLECTION</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center hover:text-black">
          <p>ABOUT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center hover:text-black">
          <p>CONTACT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Search and Menu */}
      <div className="flex items-center gap-4">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-6 cursor-pointer hover:opacity-60" alt="Search Icon" />

        <div
          className="relative"
          onMouseEnter={() => setProfileMenuVisible(true)}
          onMouseLeave={() => setProfileMenuVisible(false)}
          onTouchStart={toggleProfileMenu}
        >
          <Link to='/login'>
          <img
            src={assets.profile_icon}
            className="w-6 cursor-pointer hover:opacity-60"
            alt="Profile Icon"
          /></Link>
          {profileMenuVisible && (
            <div className="absolute right-0 top-6 flex flex-col bg-white rounded shadow-lg p-4 gap-2">
              <p className="text-sm text-gray-500 hover:text-black cursor-pointer">My Profile</p>
              <p className="text-sm text-gray-500 hover:text-black cursor-pointer">Orders</p>
              <p className="text-sm text-gray-500 hover:text-black cursor-pointer">Logout</p>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6 cursor-pointer hover:opacity-60" alt="Cart Icon" />
          <p className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{getCartCount()}</p>
        </Link>

        {/* Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden hover:opacity-60"
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-80 z-10`}>
        <div className="flex flex-col mt-5">
          <div onClick={() => setVisible(false)} className="flex items-center gap-2 cursor-pointer">
            <img className="w-4 mb-5 ml-4 transform transition-transform hover:rotate-180" src={assets.dropdown_icon} alt="Back Icon" />
            <p className="text-gray-600 mb-5 hover:text-black">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-t border-gray-200 text-gray-600 hover:text-black" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-gray-200 text-gray-600 hover:text-black" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-gray-200 text-gray-600 hover:text-black" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-gray-200 text-gray-600 hover:text-black" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar
