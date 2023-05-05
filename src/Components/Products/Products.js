import React from 'react';

const Products = ({ product, addToCart }) => {
    // console.log(product);
    const { img, name, price, seller, stock } = product
    return (
        <div >
            <div className='bg-white  p-2  flex flex-col justify-center border rounded-lg w-52 h-full'>
                <img className='h-24 w-96 rounded-lg object-cover object-center ' src={img} alt="" />
                <div className='my-2 flex flex-col gap-y-2 '>
                    <h1 className='text-xs font-semibold'>{name}</h1>
                    <p className='text-xs text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, dolores.</p>
                    <h1 className='text-xs font-semibold'>Brand : <span className=' font-bold '>{seller}</span> </h1>
                    <h1 className='text-xs font-semibold'>Price : <span className=' font-bold '>${price}</span> </h1>
                    <h1 className='text-xs font-semibold'>In Stocks : <span className=' font-bold '>{stock} pc</span> </h1>
                    <button onClick={() => addToCart(product)} className='bg-[#745be4] border rounded-lg text-white text-sm p-1 mt-4 hover:ring hover:ring-blue-200 active:bg-blue-600'>Add To List</button>
                </div>
            </div>
        </div>
    );
};
export default Products;