import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

function Wordle({ solution }) {
	const { currentGuess, handleKeyup, guesses, turn, isCorrect } =
		useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyup);

		return () => window.removeEventListener("keyup", handleKeyup);
	});

	useEffect(() => {
		console.log(guesses, turn, isCorrect);
	}, [guesses, turn, isCorrect]);

	return (
		<>
			<div>Solution : {solution}</div>
			<div>Current Guess : {currentGuess}</div>
		</>
	);
}

export default Wordle;
