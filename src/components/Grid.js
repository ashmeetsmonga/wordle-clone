import React from "react";
import GridRow from "./GridRow";

function Grid({ currentGuess, guesses, turn }) {
	return (
		<div className='space-y-2'>
			{guesses.map((g, i) => {
				if (turn === i) return <GridRow key={i} currentGuess={currentGuess} />;
				return <GridRow key={i} guess={g} />;
			})}
		</div>
	);
}

export default Grid;
