import React, { useState } from "react";
import "./StarWars.css";
import { Col, CardBody, CardHeader, Button, Fade, CardText } from "reactstrap";

const StarWars = props => {
	const [fadeIn, setFadeIn] = useState(false);
	const toggle = () => setFadeIn(!fadeIn);
	return (
		<Col xs="15" md="10" xl="5">
			<CardBody>
				<CardHeader>{props.char.name}</CardHeader>
				<CardHeader>
					<div>
						<Button className="btn" color="warning" onClick={toggle}>
							{"The Force"}
						</Button>
						<Fade in={fadeIn}>
							<br></br>
							<CardText>Height: {props.char.height}</CardText>
							<CardText>Mass: {props.char.mass}</CardText>
							<CardText>Hair Color: {props.char.hair_color}</CardText>
							<CardText>Skin Color: {props.char.skin_color}</CardText>
							<CardText>Eye Color: {props.char.eye_color}</CardText>
							<CardText>Birth Year: {props.char.birth_year}</CardText>
							<CardText>Gender: {props.char.gender}</CardText>
						</Fade>
					</div>
				</CardHeader>
			</CardBody>
		</Col>
	);
};

export default StarWars;
