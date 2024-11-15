import './ProductList.css';
import { Link } from 'react-router-dom';

function ProductList() {
	return (
		<div className='product-list-container'>
            <div className='product-list-title-container'>
                <h1 className='product-list-title'>Immersion in<br></br> pleasure with every bite</h1>
                <p className='product-list-text'>From the heart with love from Minsk</p>
                <Link to='/Assortiment' className='btn1' href="#">
                    Sweet Products
                </Link>
            </div>
        </div>
	);
};

export default ProductList;