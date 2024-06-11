import "./Home.css";
import { useContext, useState, useEffect } from "react";
import { CoinContext } from "../../context/CoinContext.jsx";
import { Link } from "react-router-dom";

const Home = () => {
	const [displayCoin, setDisplayCoin] = useState([]);
	const { allCoin, currency } = useContext(CoinContext);
	const [input, setinput] = useState("");
	const inputHandler = e => {
		e.preventDefault();
		setinput(e.target.value);
		if (e.target.value == "") {
			setDisplayCoin(coins);
		}
	};
	const searchHandler = async e => {
		e.preventDefault();
		const coins = await allCoin.filter(item => {
			return item.name.toLowerCase().includes(input.toLowerCase());
		});
		setDisplayCoin(coins);
	};

	useEffect(
		() => {
			setDisplayCoin(allCoin);
		},
		[allCoin]
	);

	return (
		<div className="home">
			<div className="hero">
				<h1>
					Largest <br /> Crypto Marketplace
				</h1>
				<p>
					Welcome to the largest cryptocurrency marketplace. Signup to explore
					more about cryptocurrency.
				</p>
				<form onSubmit={searchHandler}>
					<input
						onChange={inputHandler}
						type="text"
						placeholder="Search Crypto"
						required
						value={input}
						list="coinlist"
					/>
					<datalist id="coinlist">
						{allCoin.map((item, id) => <option key={id} value={item.name} />)}
					</datalist>

					<button type="submit">Search</button>
				</form>
			</div>

			<div className="crypto-table">
				<div className="table-layout">
					<p>#</p>
					<p>Coins</p>
					<p>Price</p>
					<p style={{ textAlign: "center" }}>24H Change</p>
					<p className="market-cap">Market Cap</p>
				</div>
				{displayCoin.slice(0, 10).map((item, index) =>
					<Link to={`/coin/${item.id}`} className="table-layout" key={index}>
						<p>
							{item.market_cap_rank}
						</p>
						<div>
							<img src={item.image} alt="" />
							<p>
								{item.name} {item.symbol}
							</p>
						</div>
						<p>
							{currency.symbol} {item.current_price.toLocaleString()}
						</p>

						<p
							className={item.price_change_percentage_24h > 0 ? "green" : "red"}
						>
							{Math.floor(item.price_change_percentage_24h * 100) / 100}
						</p>
						<p className="market-cap">
							{item.market_cap.toLocaleString()}
						</p>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Home;
