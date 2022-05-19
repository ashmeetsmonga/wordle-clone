import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

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
		<div className='flex flex-col items-center space-y-2'>
			<div>Solution : {solution}</div>
			<div>Current Guess : {currentGuess}</div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
		</div>
	);
}

export default Wordle;
