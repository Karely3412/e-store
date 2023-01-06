import React, { useState, useEffect  } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, changeQuantity } from '../../data/cartData'

import './products.css';

function Products(){
    const [items, setitems] = useState([]);
    const [itemsCategories, setitemsCategories] = useState([]);
    const [filterSelect, setfilterSelect] = useState('');
    const aProductsCart = useSelector(state => state.cart.products)
    const dispatchCart = useDispatch()

    const navigate = useNavigate();
    

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                setitems(json);
                setitemsCategories([...new Set(json.map(item => item.category))]);
            })
    }, []);

    function getFilterProducts(){
        return filterSelect==='' ?  items : items.filter(oProductLoop =>  oProductLoop.category === filterSelect)
    }

    function changeFilter(event)  {
        setfilterSelect(event.target.value);
    }

    function redirect(item)  {
        navigate("/product?id="+item.id);
    }
    function redirectCart(){
        navigate("/cart");
    }
    function addToCart(item){
        const indexProdct = aProductsCart.findIndex(oProductLoop=>{
            return oProductLoop.id===item.id
        })
        if(indexProdct===-1){
            item.quantity=1;
            dispatchCart(addProduct(item));
        }else
            dispatchCart(changeQuantity({index:indexProdct, quantity:aProductsCart[indexProdct].quantity+1}));
        
        alert('Product added to cart');
    }

    return (
        <div className = "main-cont-products">
            <div className="filter-container">
            <div className="Contain">
                <label htmlFor="category-filter">Categories:</label>
                <select name="" id="category-filter" onChange={changeFilter} value={filterSelect}>
                <option value="">All</option>
                {
                    itemsCategories.map((item) => ( 
                        <option key = { item } value={item}>{item}</option>
                    ))
                }
                </select>
            </div>

            <div className="icon-wrapper">
                <span className="material-symbols-outlined" onClick={() => redirectCart()}> shopping_cart </span>
            </div>
            </div>
            <div className="products-container">
            <div id="sec-product-wrapper">
            {
                getFilterProducts().map((item) => ( 
                <div className="product-container" key = { item.id } >
                    <div className="img-container" onClick={() => redirect(item)}>
                        <img src={item.image} alt="" />
                    </div>
                <div className="content-wrapper">
                    <div className="prdt_title-container">{item.title}</div>
                <div className="product-price-container">
                <div className="price-container">{item.price}
                </div>
                <div className="icon-wrapper">
                    <span className="material-symbols-outlined"> favorite </span>
                    <span className="material-symbols-outlined" onClick={() => addToCart(item)}>
                        shopping_cart_checkout
                    </span>
                    </div>
                </div>
                </div>
                </div>
                ))
            }
            </div>
            </div>
            
        </div>
    );
}

export default Products;