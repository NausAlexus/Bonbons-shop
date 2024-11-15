import "./Basket.css";
import { RxCross1 } from "react-icons/rx";
import ProductsBasket from "./Products/ProductsBasket";
import FooterBasket from "./FooterBasket/FooterBasket";
import { useState } from "react";

const Basket = ({ BasketOpen, closeBasket, setTotalItems, ItemData, deleteItem, updateItemQuantity, openForm, totalPrice, setTotalPrice }) => {

  return (
    <>
      <div className={`Basket ${BasketOpen ? "Basket-open" : "Basket-closed"}`}>
        <div className="basket-header">
          <h2>CART</h2>
          <RxCross1 onClick={closeBasket} />
        </div>
        <ProductsBasket updateItemQuantity={updateItemQuantity} deleteItem={deleteItem} ItemData={ItemData} setTotalPrice={setTotalPrice} setTotalItems={setTotalItems} />
        <FooterBasket totalPrice={totalPrice} openForm={openForm} closeBasket={closeBasket}/>
      </div>
      <div
        className={`cover ${BasketOpen ? "cover-visible" : ""}`}
        onClick={closeBasket}
      ></div>
    </>
  );
};

export default Basket;
