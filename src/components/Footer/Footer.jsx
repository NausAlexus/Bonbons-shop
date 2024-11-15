import "./Footer.css";
import Logo from "../../img/logo.svg"
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <Link to='/'><img className="logo" src={Logo} alt="Logo" /></Link>
        <p>
        Welcome to our sweet world! We are glad to welcome you to our sweets store, where dreams come true and every moment becomes sweet and unforgettable. Here you will find a wide range of delicious sweets, chocolate delicacies, marshmallows and cakes, created with love and care for each client. Our team will be happy to help you choose the perfect gift for your loved ones or just treat yourself.
        </p>
        <p>Minsk, Belarus</p>
        <p>Call Us: +375(XX)-XXX-XX-XX</p>
        <Link className="footer-learn" to='/About'>Learn More</Link>
        <div className="socials">
            <a href="#"><AiFillFacebook />
            </a>
            <a href="#"><FaTwitter />
            </a>
            <a href="#"><FaInstagram />
            </a>
        </div>

      </div>
      <div className="footer-rigth">
        <div className="footer-company">
            <h2>COMPANY</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Assortiment'>Products</Link></li>
            </ul>
        </div>
        <div className="footer-contact">
            <h2>CONTACT</h2>
            <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Email</a></li>
            </ul>
        </div>
        <div className="footer-our-offerings">
            <h2>OUR OFFERINGS</h2>
            <ul>
                <li><Link to='/Bonbons'>Bonbons</Link></li>
                <li><Link to='/Chocolate'>Chocolate</Link></li>
                <li><Link to='/Bars'>Bars</Link></li>
                <li><Link to='/Nut_butters'>Nut butters</Link></li>
                <li><Link to='/Gift_sets'>Gift sets</Link></li>
            </ul>
        </div>

      </div>
      <p className="footer-reserved">© 2024 Bonbons, All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
