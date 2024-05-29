import "./Home.css";
const Home = () => {
	return (
		<div className="home">
			<div className="hero">
				<h1>
					Largest <br />
					Crypto MarketPlace
				</h1>
				<p>
					Welcome to the world's largest cryptocurrency marketplace. Buy, Sell
					and Trade Cryptocurrencies with Confidence!.
				</p>
				<form>
					<input
						type="text"
						placeholder="Search for a crypto.."
					/>
					<button type="submit">Search</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
