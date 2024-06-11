import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { useContext } from 'react';
import { CoinContext } from '../../components/context/CoinContext.jsx'; 
import {Link} from 'react-router-dom'

const Navbar = () => {
    const { setCurrency } = useContext(CoinContext); 

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "usd":
                setCurrency({ name: 'usd', symbol: "$" });
                break;
            case "eur":
                setCurrency({ name: 'eur', symbol: '€' });
                break;
            case "inr":
                setCurrency({ name: 'inr', symbol: '₹' });
                break;
            default:
                setCurrency({ name: 'usd', symbol: "$" });
                break;
        }
    };

    return (
        <div className="navbar">
        <Link to="/">
            <img src={logo} alt="crypto" className="logo" />

        </Link>
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/"> <li>Features</li></Link>
            <Link to="/"> <li>Pricing</li></Link>
            <Link to="/"> <li>Contact</li></Link>
            <Link to="/"> <li>Blog</li></Link>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button type="submit">
                    Signup <img src={arrow_icon} alt="arrow icon" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
