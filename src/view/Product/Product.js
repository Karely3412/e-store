import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, changeQuantity } from "../../data/cartData";
import "./product.css";
import ArrowLeft from "../../images/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48.png";
import ArrowRight from "../../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.png";

function Product() {
  const aProductsCart = useSelector((state) => state.cart.products);
  const dispatchCart = useDispatch();
  const [searchParams] = useSearchParams();
  const idProduct = searchParams.get("id");
  const navigate = useNavigate();

  const [prodSelected, setprodSelected] = useState({});
  const [prodQuantity, setprodQuantity] = useState(1);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + idProduct)
      .then((res) => res.json())
      .then((json) => {
        setprodSelected(json);
      });
  }, [idProduct]);

  const quantityChange = (event) => {
    setprodQuantity(event.target.value);
  };

  function addToCart() {
    const indexProdct = aProductsCart.findIndex((oProductLoop) => {
      return oProductLoop.id === prodSelected.id;
    });
    if (indexProdct === -1) {
      prodSelected.quantity = prodQuantity;
      dispatchCart(addProduct(prodSelected));
    } else
      dispatchCart(
        changeQuantity({ index: indexProdct, quantity: prodQuantity })
      );

    alert("Product added to cart");
    navigate("/cart");
  }

  return (
    <div className="main-cont-product">
      <div className="left-icon">
        <img src={ArrowLeft} alt="#"></img>
      </div>
      <div className="img-container">
        <img src={prodSelected.image} alt="bluePack"></img>
      </div>
      <div className="right-icon">
        <img src={ArrowRight} alt="#"></img>
      </div>

      <div className="right-side-wrapper">
        <div className="title-container">
          <h3>{prodSelected.title}</h3>
        </div>

        <div className="content-container">
          <h4>${prodSelected.price}</h4>
        </div>

        <div className="content-box">
          <p>
            Intrest-free installments with AFTERPAY available between $35.00 -
            $1000.00 <a href="/#">Learn more.</a>
          </p>
        </div>

        <div className="content-item-wrapper">
          <div className="content-wrapper">
            <h4>Quantity: </h4>
            <input
              type="number"
              onChange={quantityChange}
              value={prodQuantity}
            ></input>
          </div>
          <div className="button-box">
            <button onClick={() => addToCart()}>Add to Cart</button>
          </div>
        </div>

        <hr />

        <div className="descript-container">
          <p>{prodSelected.description}</p>
        </div>

        <div className="icon-wrap">
          <a href="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
