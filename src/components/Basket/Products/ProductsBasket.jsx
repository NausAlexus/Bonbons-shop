import { useState, useEffect } from "react";
import "./ProductsBasket.css";
import CounterBasket from "./Counter/CounterBasket";
import { SlBasketLoaded } from "react-icons/sl";

const ProductsBasket = ({ setTotalPrice, setTotalItems, ItemData, deleteItem, updateItemQuantity }) => {
  const [items, setItems] = useState(ItemData);

  // Синхронизация состояния `items` с `ItemData` при его обновлении
  useEffect(() => {
    setItems(ItemData);
  }, [ItemData]);

  const handleChange = (id, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    updateItemQuantity(id, newQuantity); // Обновление основного состояния в App.js
  };
  

  // useEffect для пересчета общей стоимости и количества товаров
  useEffect(() => {
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);

    const totalItemsCount = items.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setTotalItems(totalItemsCount);

    // Сохранение в localStorage
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items, setTotalPrice, setTotalItems]);

  return (
    <div className="Basket-content">
      {items.length === 0 ? (
        <div className="basket-not-products">
          <SlBasketLoaded />
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
        items.map((item) => (
          <div key={item.id} className="basket-item">
            <img src={item.src} alt={item.title} className="basket-img" />
            <div className="basket-title-content">
              <p className="basket-title">{item.title}</p>
              <CounterBasket
                handleChange={handleChange}
                onQuantityChange={updateItemQuantity}
                id={item.id}
                deleteItem={deleteItem}
                initialQuantity={item.quantity}
              />
            </div>
            <p>{(item.price * item.quantity).toFixed(2)}$</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsBasket;