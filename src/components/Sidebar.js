import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import CartItem from '../components/CartItem';

import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {

  const {cart, clearCart, totalPrice} = useContext(CartContext);
  const {isOpen, handleClose} = useContext(SidebarContext);

  return (
  <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[45vw] xl:max-w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping bag (0)</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[520px] lg:h=[640px] overflow-y-auto overflow-x-hidden'>
      {cart.map((item) => {
        return <CartItem item={item} key={item.id}/>
      })}
    </div>
    <div className='flex flex-col gap-y-3 py-4 items-center'>
      <div className='flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total: $ {parseFloat(totalPrice).toFixed(2)}</span>
        </div>
        <div className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 onClick={clearCart} />
        </div>
      </div>
      <div className='flex justify-between w-full'>
      <Link to={'/cart'} className='bg-primary flex justify-center items-center p-4 text-white w-full font-medium'>View cart</Link>
      <Link to={'/checkout'} className='bg-blue-500 flex justify-center items-center p-4 text-white w-full font-medium'>Checkout</Link>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
