import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="crypto" className='logo' />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
        {/* nav right  */}
        <div className="nav-right">
            <select >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            {/* sign up */}
            <button type="submit">Signup <img src={arrow_icon} alt="" /></button>

        </div>
    </div>
  )
}

export default Navbar
