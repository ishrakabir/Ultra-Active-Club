import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../Utilities/fakedb';
const Body = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [discounts, SetDiscount] = useState(0);
    useEffect(() => {
        fetch('Fakedata/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        
        
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                const name = storedCart['name'];
                addedProduct.name = name;
                // console.log(quantity);
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]); 

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else
        {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct);
        
    }
    const afterDiscount = discount => {
        SetDiscount(discount);
    }

    const removeFromCart = () => {
        let newCart = [];
        setCart(newCart);
        deleteShoppingCart();
    }
    return (
        <div className='grid  grid-cols-12 place-items-start bg-[#ebedf7] ... relative'>
            <Shop products={products} addToCart={addToCart}></Shop>
            <Cart afterDiscount={afterDiscount} discounts={discounts} cart={cart} removeFromCart={removeFromCart}></Cart >
        </div>
    );
};

export default Body;

