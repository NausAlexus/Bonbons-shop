import './App.css';
import Visit from './components/Visit/Visit';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Basket from './components/Basket/Basket';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Sort from './components/Sort/Sort';
import PRODUCT from './data/PRODUCT'
import { useLocation } from 'react-router-dom';
import Item from './components/Main/Item/Item';
import Form from './components/Main/Form/Form';

function App() {
    const location = useLocation();
    const assortiments = PRODUCT.assortiments;
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const [formMessage, setFormMessage] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState({
        bonbons: assortiments.bonbons,
        chocolate: assortiments.chocolate,
        bars: assortiments.bars,
        nut_butters: assortiments.nut_butters,
        gift_sets: assortiments.gift_sets,
    });
    
    const [totalPrice, setTotalPrice] = useState(0);

    const openBasket = () => setIsBasketOpen(true);
    const closeBasket = () => setIsBasketOpen(false);

    const openSort = () => setIsSortOpen(true);
    const closeSort = () => setIsSortOpen(false);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    const getCurrentAssortimentKey = () => {
        switch (location.pathname) {
            case '/Bonbons':
                return 'bonbons';
            case '/Chocolate':
                return 'chocolate';
            case '/Bars':
                return 'bars';
            case '/Nut_butters':
                return 'nut_butters';
            case '/Gift_sets':
                return 'gift_sets';
            default:
                return 'bonbons';
        }
    };

    const currentAssortimentKey = getCurrentAssortimentKey();

    const filterProductsByPrice = (minPrice, maxPrice) => {
        const currentAssortiment = assortiments[currentAssortimentKey];
        const filtered = currentAssortiment.filter(item => item.price >= minPrice && item.price <= maxPrice);
   
        setFilteredProducts(prevState => ({
            ...prevState,
            [currentAssortimentKey]: filtered.length > 0 ? filtered : []
        }));
    };

    const [itemValue, setitemValue] = useState(null);
    const hendlItemValue = (value) => {
        setitemValue(value);
    };

    const closeItem = () => {
        setitemValue(null);
    };

    const [ItemData, setItemData] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        const totalItemsCount = ItemData.reduce((count, item) => count + item.quantity, 0);
        setTotalItems(totalItemsCount);

        // Сохранение данных корзины в localStorage
        localStorage.setItem("cartItems", JSON.stringify(ItemData));
    }, [ItemData]);

    useEffect(() => {
        setUserData((prevData) => ({
            ...prevData,
            totalPrice: totalPrice, // Обновляем totalPrice в userData
            shoppingList: ItemData.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })), // Обновляем shoppingList в userData с нужными полями
        }));
    }, [totalPrice, ItemData]);

    const updateItemQuantity = (id, newQuantity) => {
        setItemData((prevItemData) => 
            prevItemData.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const deleteItem = (id) => {
        setItemData((prevItemData) =>
          prevItemData
            .map((item) =>
              item.id === id ? { ...item, quantity: 0 } : item
            )
            .filter((item) => item.quantity > 0) // Удаляем элементы с quantity равным 0
        );
    };

    const addItemData = (item) => {
        if (item) {
            const itemExists = ItemData.some((existingItem) => existingItem.id === item.id);
    
            if (!itemExists) {
                // Если товар еще не добавлен в корзину, добавляем его с переданным количеством
                const newItem = {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    src: item.src,
                    quantity: item.quantity, // Используем переданное количество
                };
                setItemData((prev) => [...prev, newItem]);
            } else {
                // Если товар уже есть в корзине, обновляем его количество
                setItemData((prevItemData) =>
                    prevItemData.map((existingItem) =>
                        existingItem.id === item.id
                            ? { ...existingItem, quantity: existingItem.quantity + item.quantity } // Добавляем количество
                            : existingItem
                    )
                );
            }
        }
    };

    // Получаем данные о пользователе
    const [deliveryOption, setDeliveryOption] = useState('pickup');
    const[userData, setUserData] = useState({
        name: '',
        phone: '',
        comment: '',
        address: '',
        deliveryOption: 'pickup',
        totalPrice: totalPrice,
        shoppingList: [],
    });

    const getUserData = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    const handleDeliveryChange = (e) => {
        const value = e.target.value;
        setDeliveryOption(value);

        setUserData({
            ...userData,
            deliveryOption: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/send-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Данные успешно отправлены в Telegram');
                setFormMessage('Ваша заявка принята!');
                setIsFormSubmitted(true);

                setTimeout(() => {
                    closeForm();
                    window.location.reload();
                }, 3000)

            } else {
                console.error('Ошибка при отправке данных:', data.error);
                setFormMessage('Ошибка при отправке данных. Пожалуйста, попробуйте снова.');

                setTimeout(() => {
                    closeForm();
                    window.location.reload();
                }, 3000)

            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            setFormMessage('Произошла ошибка. Пожалуйста, повторите попытку позже.');
        });
    };

    return (
        <>
            <Visit />
            <Basket
                updateItemQuantity={updateItemQuantity}
                deleteItem={deleteItem}
                ItemData={ItemData}
                BasketOpen={isBasketOpen}
                closeBasket={closeBasket}
                setTotalItems={setTotalItems}
                openForm={openForm}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
            />
            <Form 
                deliveryOption={deliveryOption}
                FormOpen={isFormOpen}
                closeForm={closeForm}
                ItemData={ItemData}
                totalPrice={totalPrice}
                getUserData={getUserData}
                handleDeliveryChange={handleDeliveryChange}
                handleSubmit={handleSubmit}
                formMessage={formMessage}
                isFormSubmitted={isFormSubmitted}
            />
            <Item itemValue={itemValue} closeItem={closeItem} addItemData={addItemData} openBasket={openBasket} />
            <Sort SortOpen={isSortOpen} closeSort={closeSort} filterProductsByPrice={filterProductsByPrice} />
            <Navigation openBasket={openBasket} totalItems={totalItems} />
            <Main hendlItemValue={hendlItemValue} openSort={openSort} filteredProducts={filteredProducts[currentAssortimentKey]} />
            <Footer />
        </>
    );
}

export default App;