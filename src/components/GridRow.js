import React from "react";

function GridRow({ guess, currentGuess }) {
	const classes = {
		box: "h-[65px] w-[65px] flex justify-center items-center text-4xl font-bold uppercase",
	};

	if (guess)
		return (
			<div className='flex space-x-1'>
				{guess.map((obj, ind) => {
					let color = "bg-bgGray";
					if (obj.color === "green") color = "bg-bgGreen";
					if (obj.color === "yellow") color = "bg-bgYellow";
					let box = classes.box + " " + color;
					return (
						<div
							key={ind}
							className={box}
							style={{
								animation: "flip .5s linear forwards",
							}}
						>
							{obj.key}
						</div>
					);
				})}
			</div>
		);

	if (currentGuess) {
		let letters = currentGuess.split("");
		return (
			<div className='flex space-x-1'>
				{letters.map((l, i) => {
					let animation =
						i === letters.length - 1 ? "bounce .1s linear forwards" : "";
					return (
						<div
							key={i}
							className={`${classes.box} border-2 border-gray-500`}
							style={{ animation: animation }}
						>
							{l}
						</div>
					);
				})}
				{[...Array(5 - letters.length)].map((l, i) => {
					return (
						<div
							key={i}
							className={`${classes.box} border-2 border-gray-300`}
						></div>
					);
				})}
			</div>
		);
	}

	return (
		<div className='flex space-x-1'>
			<div className={`${classes.box} border-2 border-gray-300`}></div>
			<div className={`${classes.box} border-2 border-gray-300`}></div>
			<div className={`${classes.box} border-2 border-gray-300`}></div>
			<div className={`${classes.box} border-2 border-gray-300`}></div>
			<div className={`${classes.box} border-2 border-gray-300`}></div>
		</div>
	);
}

export default GridRow;
