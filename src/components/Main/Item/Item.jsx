import { useState } from 'react';
import './Item.css'
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Item = ({itemValue, closeItem, addItemData, openBasket}) => {

    const [count,setCount] = useState(1);

    const handleMinus = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    const handlePlus = () =>{
        setCount(count + 1)
    }

    return ( 

        <>
        {itemValue && <div className="overlay" onClick={closeItem}></div>}

            {itemValue ? (
                <>

                    <div className="item-container">

                        <RxCross1 className='item-close' onClick={closeItem}/>
                        
                        <div className='item-img-wrapper'>
                            <img className='item-img' src={itemValue.src} alt="Item" />
                        </div>

                        <div className='item-info-container'>
                            <h3 className='item-info-title'>{itemValue.title}</h3>
                            <p className='item-info-description'>{itemValue.description}</p>
                            <p className='item-info-price'>${(itemValue.price).toFixed(2)}</p>
                            <div className='item-btn-container'>
                                <div className="counter-item">
                                    <button className='item-btn' onClick={handleMinus}>
                                        <HiMinus />
                                    </button>
                                    <p>{count}</p>
                                    <button className='item-btn' onClick={handlePlus}>
                                        <GoPlus />
                                    </button>
                                </div>
                                <button className='add-btn' onClick={() => {
                                    // Передаем товар с актуальным количеством
                                    addItemData({ ...itemValue, quantity: count });
                                    setCount(1); // Сброс после добавления в корзину
                                    closeItem();
                                    openBasket();
                                }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </>
            ):(
                <p></p>
            )}
            
        </>
     );
}
 
export default Item;