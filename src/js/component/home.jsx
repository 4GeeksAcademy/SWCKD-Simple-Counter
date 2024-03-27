import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{height: "300px"}}><i class="fas fa-clock"></i></div>
				<div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{height: "300px"}}>{props.digitFour % 10}</div>
				<div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{height: "300px"}}>{props.digitThree % 10}</div>
				<div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{height: "300px"}}>{props.digitTwo % 10}</div>
				<div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{height: "300px"}}>{props.digitOne % 10}</div>
				
			</div>
		</div>
	);
};

export default Home;
