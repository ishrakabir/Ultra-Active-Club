import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {    faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Products from '../Products/Products';

const Shop = ({products,addToCart}) => {
    
    return (
        <div className=' lg:col-span-10 ... mt-20   lg:mx-40 text-left flex flex-col  lg:gap-y-4'>
                <div className='flex gap-x-4  text-2xl text-[#745be4]  items-center font-bold'>
                    <FontAwesomeIcon icon={faDumbbell} />
                    <h1>Ultra-Active-club</h1>
                </div>
            <h1 className='font-semibold'>Select today's exercise</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
            {
                    products.map(product => <Products key={product.id} product={product} addToCart={addToCart} ></Products>)
                }
            </div>
           

        </div>
    );
};

export default Shop;