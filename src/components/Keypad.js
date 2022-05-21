import React, { useEffect, useState } from "react";
import keyboardLetters from "../keyboardLetters";

function Keypad({ usedKeys }) {
	const classes = {
		keyBox:
			"h-[50px] w-[50px] m-1 flex justify-center items-center text-md font-bold rounded uppercase",
	};

	const [letters, setLetters] = useState(null);

	useEffect(() => {
		setLetters(keyboardLetters);
	}, []);

	return (
		<div className='w-[500px] flex flex-wrap justify-center'>
			{letters &&
				letters.map((obj) => {
					let color = "gray-200";
					if (usedKeys[obj.key] === "green") color = "bgGreen";
					if (usedKeys[obj.key] === "yellow") color = "bgYellow";
					if (usedKeys[obj.key] === "gray") color = "bgGray";
					let keyBox = `${classes.keyBox} bg-${color} ${
						color !== "gray-200" ? "text-white" : ""
					}`;
					return (
						<div key={obj.key} className={keyBox}>
							{obj.key}
						</div>
					);
				})}
		</div>
	);
}

export default Keypad;
