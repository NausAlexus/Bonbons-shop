import './Assortiment.css';
import SLIDER1 from "../../../data/SLIDER1";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Assortiment() {

	return (
		<div className='assortiment-container'>

            <h3 className="slider1-title">Journey Through Our Exquisite Collections</h3>
            <p className="slider1-text">From Seasonal Favorites to Timeless Classics, Find Your Perfect Match</p>

            <div className='assortiment-grid-container'>
                {SLIDER1.map((item) => (
                    <div className='assortiment-grid-item' key={item.id}>

                        <div className='assortiment-img-wrapper'>
                            <img className='assortiment-img' src={item.image} alt="Assortiment" />

                            <Link to={item.link} className='assortiment-link' href="#">
                                {item.title}
                                <FaArrowRightLong className='assortiment-link-ico' />
                            </Link>

                        </div>

                    </div>
                ))}
            </div>


        </div>
	);

};

export default Assortiment;