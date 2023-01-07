import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs';
import Logo from '../img/logo.svg';

import { Link } from 'react-router-dom';

const Header = () => {

  const [HeaderActive, setHeaderActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount, setItemAmount} = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setHeaderActive(true) : setHeaderActive(false);
    })
  })
  return (
  <header className={`${HeaderActive ? 'bg-white py-6 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
     <div className='container flex mx-auto items-center justify-between h-full'>
      <Link to={'/'}>
        <div>
          <img className='w-[40px]' src={Logo} alt='' /> 
        </div>
      </Link>
      <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl'/>
        <div className='absolute bg-blue-500 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;