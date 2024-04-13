import React, { useState, useEffect } from "react";
import Counter from "../component/Counter";

const Home = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);


		return () => clearInterval(intervalId);
	}, []);

	const FOUR = parseInt(Math.floor(counter / 1000));
	const THREE = parseInt(Math.floor((counter % 1000) / 100));
	const TWO = parseInt(Math.floor((counter % 100) / 10));
	const ONE = parseInt(Math.floor(counter % 10));

	return (
		<div className="container">
			<div className="row text-center">
				<div className="col"></div>
				<div className="col">D</div>
				<div className="col">H</div>
				<div className="col">M</div>
				<div className="col">S</div>
			</div>
			<Counter
				digitOne={ONE}
				digitTwo={TWO}
				digitThree={THREE}
				digitFour={FOUR}
			/>
		</div>
	);
};

export default Home;
