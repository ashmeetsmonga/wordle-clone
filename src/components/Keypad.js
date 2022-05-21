import React, { useEffect, useState } from "react";
import keyboardLetters from "../keyboardLetters";

function Keypad() {
	const [letters, setLetters] = useState(null);

	useEffect(() => {
		setLetters(keyboardLetters);
	}, []);

	return (
		<div className='w-[500px] flex flex-wrap justify-center'>
			{letters &&
				letters.map((obj) => (
					<div
						key={obj.key}
						className='bg-gray-200 h-[50px] w-[50px] m-1 flex justify-center items-center text-lg rounded'
					>
						{obj.key}
					</div>
				))}
		</div>
	);
}

export default Keypad;
