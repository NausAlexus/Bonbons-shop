import './Navigation.css';
import { CiShoppingBasket } from "react-icons/ci";
import ShopCount from './ShopCount/ShopCount';
import { Link } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import logo from "../../img/logo.svg";


function Navigation({ openBasket, totalItems }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Link to='/'><img className='logo' src={logo} alt="Logo" /></Link>
                <div className='shop-container'>
                    <CiShoppingBasket className='shop-icon' onClick={openBasket} />
                    <ShopCount totalItems={totalItems} />
                </div>
                <button className='menu-button' onClick={toggleMenu}><LuMenu /></button>
            </div>
            {menuOpen && (
                <nav className='mob-nav'>
                    <div className="covers"></div>
                    <div className="close_navigation">
                        <RxCross1 onClick={toggleMenu}/>
                    </div>


                    <ul className='mob-nav-list'>
                        <li><Link onClick={toggleMenu} className='nav-item' to='/Bonbons'>Bonbons</Link></li>
                        <li><Link onClick={toggleMenu} className='nav-item' to='/Chocolate'>Chocolate</Link></li>
                        <li><Link onClick={toggleMenu} className='nav-item' to='/Bars'>Bars</Link></li>
                        <li><Link onClick={toggleMenu} className='nav-item' to='/Nut_butters'>Nut butters</Link></li>
                        <li><Link onClick={toggleMenu} className='nav-item' to='/Gift_sets'>Gift sets</Link></li>
                        <li><Link onClick={toggleMenu} className='nav-item' to='/About'>About</Link></li>
                    </ul>
                </nav>


            )}
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li><Link className='nav-item' to='/Bonbons'>Bonbons</Link></li>
                        <li><Link className='nav-item' to='/Chocolate'>Chocolate</Link></li>
                        <li><Link className='nav-item' to='/Bars'>Bars</Link></li>
                        <li><Link className='nav-item' to='/Nut_butters'>Nut butters</Link></li>
                        <li><Link className='nav-item' to='/Gift_sets'>Gift sets</Link></li>
                        <li><Link className='nav-item' to='/About'>About</Link></li>
                    </ul>
                </nav>
        </div>
    );
}

export default Navigation;