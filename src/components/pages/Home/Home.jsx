
import './Home.css'
const Home = () => {
  return (
    <div className="home">
     <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the largest cryptocurrency marketplace. Signup to expore more about crypto currency.</p>
        <form >
            <input type="text" placeholder="Search Crypto" />
            <button type="submit">Search</button>
        </form>
     </div>
    </div>
  )
}

export default Home
