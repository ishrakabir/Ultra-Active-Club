const addToDb = props => {
    let shoppingCart = getShoppingCart();
    const quantity = shoppingCart[props.id];
   
    shoppingCart['name'] = props.name;
    if (!quantity)
    {
        shoppingCart[props.id] = 1;
        
    }
    else
    {
        const newQuantity = quantity + 1;
        shoppingCart[props.id] = newQuantity;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const getShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart)
    {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}
export {getShoppingCart,addToDb,deleteShoppingCart}