import './ShopCount.css';

function ShopCount({totalItems}) {
	return (
        <>
            <p className='shop-count'>{totalItems}</p>
        </>
	);
};

export default ShopCount;