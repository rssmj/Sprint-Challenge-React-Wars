import React, { useState, useEffect } from "react";
import StarWars from "./components/StarWars";
import { Container, Row } from "reactstrap";
import axios from "axios";
import "./App.css";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [charData, setCharData] = useState([]);

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	useEffect(() => {
		axios
			.get("https://swapi.co/api/people/")
			.then(response => {
				console.log(response);
				setCharData(response.data.results);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<Container>
				<Row>
					{charData.map((data, char) => (
						<StarWars key={char} char={data} />
					))}
				</Row>
			</Container>
		</div>
	);
};

export default App;
