import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

function Wordle({ solution }) {
	const { currentGuess, handleKeyup, guesses, turn, isCorrect, usedKeys } =
		useWordle(solution);

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log("Wordle.js useEffect runs");
		window.addEventListener("keyup", handleKeyup);

		if (isCorrect) {
			setTimeout(() => setShowModal(true), 1000);
			window.removeEventListener("keyup", handleKeyup);
		}

		if (turn === 6) {
			setTimeout(() => setShowModal(true), 1000);
			window.removeEventListener("keyup", handleKeyup);
		}

		return () => window.removeEventListener("keyup", handleKeyup);
	}, [handleKeyup, isCorrect, turn]);

	return (
		<div className='flex flex-col items-center justify-between h-full'>
			<div>Solution : {solution}</div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
			<Keypad usedKeys={usedKeys} />
			{showModal && (
				<Modal isCorrect={isCorrect} solution={solution} turn={turn} />
			)}
		</div>
	);
}

export default Wordle;
