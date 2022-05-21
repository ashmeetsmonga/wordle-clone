import React from "react";

function Modal({ isCorrect, solution, turn }) {
	const classes = {
		modalBox:
			"w-[500px] h-[300px] bg-white rounded shadow-2xl flex justify-center items-center flex-col p-4 space-y-2",
	};

	return (
		<div className='fixed top-0 left-0 w-screen h-screen bg-modalBg flex justify-center items-center'>
			{isCorrect && (
				<div className={classes.modalBox}>
					<p className='text-2xl font-bold uppercase'>Congratulations!!!</p>
					<p>You guessed correctly</p>
					<p className='font-bold text-bgGreen text-xl uppercase'>{solution}</p>
					<p>Refresh page to play again</p>
				</div>
			)}
			{!isCorrect && (
				<div>
					<p>Sorry!!! Try again</p>
					<p>{solution}</p>
				</div>
			)}
		</div>
	);
}

export default Modal;
