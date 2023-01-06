import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct, changeQuantity } from '../../data/cartData'

import './cart.css';

function Cart() {
    const aProductsCart = useSelector(state => state.cart.products)
    const dispatchCart = useDispatch()


    function calcTotal() {
        return aProductsCart.reduce((accumulator, object) => {
            return accumulator + (Number(object.price) * Number(object.quantity));
        }, 0).toFixed(2);
    }

    function updateQuantity(item, nQuantity) {
        const indexProdct = aProductsCart.findIndex(oProductLoop => {
            return oProductLoop.id === item.id
        })
        dispatchCart(changeQuantity({ index: indexProdct, quantity: nQuantity }));
    }

    function deleteProduct(item){
        const indexProdct = aProductsCart.findIndex(oProductLoop => {
            return oProductLoop.id === item.id
        })
        dispatchCart(removeProduct({index: indexProdct}));
    }
    function proceedCheckout(){
        alert('Thank you for stopping by');
    }


    return (
        <div className="main-cont-cart">
            <div className="left-content-container">
                <div className="title-wrap">
                    <h4>Shopping cart</h4>
                </div>
                <hr />
                <div className="context-container">
                    <ul>
                        <li className="text-container"></li>
                        <li className="text-container"></li>
                        <li className="text-container">Product</li>
                        <li className="quant-container">Quantity</li>
                        <li className="sub-container">Price</li>
                        <li className="sub-container">Subtotal</li>
                    </ul>
                </div>
                <hr />
                <div className="product-container">
                {
                    aProductsCart.map((item) => (
                        <div className="content-container" key={item.id}>
                            <div className="icon-wrap" onClick={() => deleteProduct(item)}>
                                <span className="material-symbols-outlined"> close </span>
                            </div>
                            <div className="img-container">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="text-container">
                                <p>{item.title}</p>
                            </div>
                            <div className="quant-container">
                                <input type="number" onChange={(event) => updateQuantity(item, event.target.value)} value={item.quantity}></input>
                            </div>
                            <div className="sub-container">${item.price}</div>
                            <div className="sub-container">${(item.quantity * item.price).toFixed(2)}</div>
                        </div>
                    ))
                }
                </div>
                <hr />

                <div className="bottom-content-wrap">
                    <div className="left-content-wrap">
                        <div className="left-text">
                            <button>Coupon code</button>
                        </div>
                        <div className="right-text">
                            <button>Apply Coupon</button>
                        </div>
                    </div>
                    <div className="right-content-wrap">
                        <button>Update cart</button>
                    </div>
                </div>
            </div>

            <div className="right-content-container">
                <div className="title-container">
                    <h4>Cart Totals</h4>
                </div>

                <hr />

                <div className="content-wrap">
                    <div className="subtotal">
                        <p>Subtotal</p>
                    </div>
                    <div className="price">
                        <p>$ {calcTotal()}</p>
                    </div>
                </div>

                <hr />


                <div className="content-wrap">
                    <div className="subtotal">
                        <p>Total</p>
                    </div>
                    <div className="price">
                        <p>$ {calcTotal()}</p>
                    </div>
                </div>
                <div className='contain-checkuot'>
                    <button onClick={proceedCheckout}>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;