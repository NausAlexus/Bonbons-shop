import "./Sort.css";
import { RxCross1 } from "react-icons/rx";
import PRODUCT from "../../data/PRODUCT";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Sort = ({ SortOpen, closeSort, filterProductsByPrice }) => {
	const location = useLocation();
	let Arr;

	if(location.pathname === '/Bonbons'){
		Arr = PRODUCT.assortiments.bonbons;
	}else if(location.pathname === '/Chocolate'){
		Arr = PRODUCT.assortiments.chocolate;
	}else if(location.pathname === '/Bars'){
		Arr = PRODUCT.assortiments.bars;
	}else if(location.pathname === '/Nut_butters'){
		Arr = PRODUCT.assortiments.nut_butters;
	}else if(location.pathname === '/Gift_sets'){
		Arr = PRODUCT.assortiments.gift_sets;
	}else{
		Arr = PRODUCT.assortiments.bonbons;
	};

	const [maxPrice, setMaxPrice] = useState(0);
	const [rangeValue, setRangeValue] = useState(0);
	const [initialValue, setInitialValue] = useState(0);

	useEffect(() => {
        const newMaxPrice = Arr.reduce((max, item) => {
            return item.price > max ? item.price : max;
        }, 0);
        
        setMaxPrice(newMaxPrice);
		setInitialValue(newMaxPrice)
        setRangeValue(newMaxPrice);
    }, [Arr]);

	const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    };

	const handleClear = () => {
        setRangeValue(initialValue);
    };

	const handleApply = () => {
        filterProductsByPrice(0, rangeValue);
		closeSort()
    }

	return (
		<>

			<div className={`Sort ${SortOpen ? "Sort-open" : "Sort-closed"}`}>


				<div className="sort-header">
					<div className="sort-title">
						<h2>FILTER AND SORT</h2>
						<RxCross1 onClick={closeSort} />
					</div>
					<p className='sort-count'>{Arr.length} Products</p>
				</div>

				<div className="sort-content">
					<h3 className="sort-content-title">PRICE</h3>
					<p className='sort-max-price'>The highest price is $ {maxPrice.toFixed(2)}</p>

					<input className="sort-range" type="range" min={0} max={maxPrice} step={1} value={rangeValue} onChange={handleRangeChange}/>

					<div className="sort-price-select">

						<div className="sort-value sort-min-value">
							<p>$</p>
							<input type="text" value={(0).toFixed(2)} readOnly pattern="\d+(\.\d{1,2})?" />
						</div>

						<div className="sort-value sort-max-value">
							<p>$</p>
							<input type="text" value={(+rangeValue).toFixed(2)} readOnly pattern="\d+(\.\d{1,2})?" />
						</div>

					</div>
				</div>

				<div className="sort-footer">
					<p className="sort-btn-1" onClick={handleClear}>CLEAR</p>
					<p className="sort-btn-2" onClick={handleApply}>APPLY</p>
				</div>

			</div>

			<div
			className={`cover-sort ${SortOpen ? "cover-sort-visible" : ""}`}
			onClick={closeSort}
			></div>

		</>
	);
};

export default Sort;