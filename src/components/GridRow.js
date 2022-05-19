import React from "react";

function GridRow({ guess, currentGuess }) {
	const classes = {
		box: "h-[65px] w-[65px] border-gray-300 flex justify-center items-center text-4xl font-bold uppercase",
	};

	if (guess)
		return (
			<div className='flex space-x-1'>
				{guess.map((obj, ind) => {
					let color = "bg-bgGray";
					if (obj.color === "green") color = "bg-bgGreen";
					if (obj.color === "yellow") color = "bg-bgYellow";
					let box = classes.box + " text-white " + color;
					return (
						<div key={ind} className={box}>
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
					let box = classes.box + " border";
					return <div className={box}>{l}</div>;
				})}
				{[...Array(5 - letters.length)].map((l, i) => {
					return <div className={`${classes.box} border`}></div>;
				})}
			</div>
		);
	}

	return (
		<div className='flex space-x-1'>
			<div className={`${classes.box} border`}></div>
			<div className={`${classes.box} border`}></div>
			<div className={`${classes.box} border`}></div>
			<div className={`${classes.box} border`}></div>
			<div className={`${classes.box} border`}></div>
		</div>
	);
}

export default GridRow;
