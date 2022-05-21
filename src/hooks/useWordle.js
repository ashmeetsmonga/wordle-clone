import { useState } from "react";

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array
	const [history, setHistory] = useState([]); //each guess is a string
	const [isCorrect, setIsCorrect] = useState(false);
	const [usedKeys, setUsedKeys] = useState({});

	const formatGuess = () => {
		const solutionArray = [...solution];
		let formattedArray = [...currentGuess].map((c, ind) => {
			return { key: c, color: "gray" };
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
			if (i !== -1) {
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
		setUsedKeys((prevUsedKeys) => {
			let newKeys = { ...prevUsedKeys };
			formattedGuess.forEach((obj) => {
				if (newKeys[obj.key] === "green") return;
				newKeys[obj.key] = obj.color;
			});
			return newKeys;
		});
	};

	const handleKeyup = ({ key }) => {
		if (key === "Enter") {
			if (
				currentGuess.length < 5 ||
				history.includes(currentGuess) ||
				turn === 6
			)
				return;
			const formattedGuess = formatGuess();
			addNewGuess(formattedGuess);
		}

		if (key === "Backspace") setCurrentGuess((prev) => prev.slice(0, -1));

		if (!/^[A-Za-z]$/.test(key)) return;

		if (currentGuess.length === 5) return;
		setCurrentGuess((prev) => prev + key.toLowerCase());
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys };
};

export default useWordle;
