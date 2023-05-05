import React from 'react';
import pic from '../../images/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Cart = ({ cart, afterDiscount, discounts, removeFromCart }) => {
    let totalPrice = 0;
    let newPrice = 0;
    let names;
    let items = 0;
    for (const product of cart) {
        totalPrice = totalPrice + (product.price * product.quantity);
        newPrice = product.price;
        names = product.name;
        items += product.quantity;
    }
    let newDiscount = 0;
    if(totalPrice>0)
        newDiscount = totalPrice - discounts;
    if (newDiscount < 1)
        newDiscount = 0;

   
     return (
        <div className='bg-white h-full w-64 fixed overflow-y-auto right-0 overflow-hidden'>

            <div className='flex gap-x-4 p-4 items-center'>
                <img className='w-12' src={pic} alt="" />
                <div className='text-left'>
                    <h1 className='font-semibold '>Ishrak Abir</h1>
                    <div className='flex items-center gap-1 text-sm text-slate-400'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h1>Chittagong,Bangladesh</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-x-6 bg-slate-200 mx-4 border rounded-lg my-3'>
                <div className='text-left'>
                    <h1 className='text-2xl font-semibold'><span >75</span><span className='text-xs text-gray-500'>Kg</span></h1>
                    <h1 className='text-gray-500'>Weight</h1>
                </div>
                <div className='text-left'>
                    <h1 className='text-2xl font-semibold'>6.5</h1>
                    <h1 className='text-gray-500'>Height</h1>
                </div>
                <div className='text-left'>
                    <h1 className='text-2xl font-semibold'>25</h1>
                    <h1 className='text-gray-500'>Age</h1>
                </div>
            </div>
            <div className='my-5' >
                <h1 className='font-semibold text-left mx-4'>Choose A Number</h1>
                <div className='flex justify-center gap-x-3 bg-slate-200 mx-4 border rounded-lg my-3 p-3'>
                     <button  onClick={() => afterDiscount(10)} className='bg-white border rounded-full p-2 text-xs font-semibold hover:ring hover:ring-blue-300  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300' >10</button>
                    <button onClick={() => afterDiscount(20)} className='bg-white border rounded-full p-2 text-xs font-semibold hover:ring hover:ring-blue-300  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300'>20</button>
                    <button onClick={() => afterDiscount(30)} className='bg-white border rounded-full p-2 text-xs font-semibold hover:ring hover:ring-blue-300  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300'>30</button>
                    <button onClick={() => afterDiscount(40)} className='bg-white border rounded-full p-2 text-xs font-semibold hover:ring hover:ring-blue-300  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300'>40</button>
                    <button onClick={() => afterDiscount(50)} className='bg-white border rounded-full p-2 text-xs font-semibold hover:ring hover:ring-blue-300  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300'>50</button>
                </div>
            </div>
            <div className='mt-5' >
                <div className='bg-slate-200 mx-4 border rounded-lg my-3 p-3 text-left font-semibold'>
                    <h1>Quantity : <span className='font-bold text-slate-700'> {items}</span> </h1>
                </div>
                <div className='bg-slate-200 mx-4 border rounded-lg my-3 p-3 text-left font-semibold '>
                    <h1 className='font-bold text-slate-700 truncate'>{names}</h1>
                    <hr />
                    <h1>Product Price :<span className='font-bold text-slate-700'>{newPrice}</span> <span className='text-[10px] text-slate-400 font-normal'>Selected*</span></h1>
                </div>
                <div className='bg-slate-200 mx-4 border rounded-lg my-3 p-3 text-left font-semibold'>
                    <h1>Total Price  : <span className='font-bold text-slate-700'>{totalPrice}</span> </h1>
                </div>
                <div  className='bg-slate-200 mx-4 border rounded-lg my-3 p-3 text-left font-semibold'>
                     <h1>After Discount : <span className='font-bold text-slate-700'>{newDiscount}</span></h1>
                </div>

            </div>
             <button onClick={() => removeFromCart()} className='bg-[#745be4] border rounded-lg text-white text-sm font-semibold  w-56 p-2 mt-2 hover:ring hover:ring-blue-200 active:bg-violet-400'>Clear List</button>
        </div>
    );
};

export default Cart;