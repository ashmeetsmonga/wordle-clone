import { useState } from "react";

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array
	const [history, setHistory] = useState([]); //each guess is a string
	const [isCorrect, setIsCorrect] = useState(false);

	const formatGuess = () => {
		console.log("format starting of : " + currentGuess);
		const solutionArray = [...solution];
		let formattedArray = [...currentGuess].map((c, ind) => {
			return { key: c, color: "grey" };
		});

		//green color check
		formattedArray.forEach((obj, ind) => {
			if (solutionArray[ind] === obj.key) {
				formattedArray[ind].color = "green";
				solutionArray[ind] = null;
			}
		});

		//yellow color check
		formattedArray.forEach((obj, ind) => {
			if (obj.color === "green") return;
			let i = solutionArray.indexOf(obj.key);
			if (i != -1) {
				formattedArray[ind].color = "yellow";
				solutionArray[i] = null;
			}
		});

		return formattedArray;
	};

	const addNewGuess = (formattedGuess) => {
		if (currentGuess === solution) setIsCorrect(true);

		setGuesses((prevGuesses) => {
			let newGuesses = [...prevGuesses];
			newGuesses[turn] = formattedGuess;
			return newGuesses;
		});
		setTurn((prevTurn) => prevTurn + 1);
		setHistory((prevHistory) => [...prevHistory, currentGuess]);
		setCurrentGuess("");
	};

	const handleKeyup = ({ key }) => {
		if (key === "Enter") {
			if (
				currentGuess.length < 5 ||
				history.includes(currentGuess) ||
				turn === 5
			)
				return;
			const formattedGuess = formatGuess();
			addNewGuess(formattedGuess);
		}

		if (key === "Backspace") setCurrentGuess((prev) => prev.slice(0, -1));

		if (!/^[A-Za-z]$/.test(key)) return;

		if (currentGuess.length === 5) return;

		setCurrentGuess((prev) => prev + key);
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;