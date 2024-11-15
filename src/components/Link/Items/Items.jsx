import './Items.css';
import { HiMiniNoSymbol } from "react-icons/hi2";
import { VscSettings } from "react-icons/vsc";

function Items({ title, filteredProducts, openSort, backgroundImage,hendlItemValue}) {
    return (
        <div className='items-container'>
            <div className='items-title-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='items-title-wrapper'>
                    <h1 className='items-title'>{title}</h1>
                </div>
            </div>

            <div className='items-sort-container'>
                <div className='items-sort' onClick={openSort}>
                    <VscSettings className='items-sort-ico' />
                    <p className='items-sort-text'>FILTER AND SORT</p>
                </div>
                <p className='items-count'>{filteredProducts ? filteredProducts.length : 0} Products</p>
            </div>

            <div className='items-grid-container'>
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <div className="items-grid-item" key={item.id}>
                            <div className="items-img-wrapper">
                                <img className="items-img" onClick={() => hendlItemValue(item)} src={item.src}  alt={title} />
                            </div>
                            <p href="#" className="items-link" onClick={() => hendlItemValue(item)}>{item.title}</p>
                            <p className="items-price">{(item.price).toFixed(2)} $</p>
                        </div>
                    ))
                ) : (
                    <div className='product-not-found-container'>
                        <HiMiniNoSymbol className='not-found'/>
                        <p className="product-not-found">No products found</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Items;