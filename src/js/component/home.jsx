import React from 'react';
import Footer from "./footer.jsx"
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardBox from "./cardbox.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	return (
		<div>
			<NavBar/>
			<div className="container-fluid" >
				<Jumbotron />,
			
				<CardBox />
			</div>

			<Footer />
		</div>
	);
	};
export default Home;
