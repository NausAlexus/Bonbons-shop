import { useState, useEffect } from "react";
import "./CounterBasket.css";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const CounterBasket = ({ initialQuantity, onQuantityChange, deleteItem, id, handleChange }) => {
  const [count, setCount] = useState(initialQuantity);

  // Синхронизация состояния `count` с `initialQuantity`, если оно изменилось извне
  useEffect(() => {
    setCount(initialQuantity);
  }, [initialQuantity]);

  const plusCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    handleChange(id, newCount);
    onQuantityChange(id, newCount); // Передаем id и новое количество
  };

  const minusCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      handleChange(id, newCount);
      onQuantityChange(id, newCount); // Передаем id и новое количество
    }
  };

  const deleteCount = () => {
    setCount(0);
    deleteItem(id); // Вызываем deleteItem с id
  };

  return (
    <div className="counter-basket-content">
      <div className="counter-basket">
        <button onClick={minusCount}>
          <HiMinus />
        </button>
        <p>{count}</p>
        <button onClick={plusCount}>
          <GoPlus />
        </button>
      </div>
      <RiDeleteBin6Line className="delete-product" onClick={deleteCount} />
    </div>
  );
};

export default CounterBasket;