import React from "react";

function Modal({ isCorrect, solution, turn }) {
	const classes = {
		modalBox:
			"w-[500px] h-[300px] bg-white rounded-lg shadow-2xl flex justify-center items-center flex-col p-4 space-y-2",
	};

	return (
		<div className='fixed top-0 left-0 w-screen h-screen bg-modalBg flex justify-center items-center'>
			{isCorrect && (
				<div className={classes.modalBox}>
					<p className='text-2xl font-bold uppercase text-bgGreen'>
						Congratulations!!!
					</p>
					<p>You guessed correctly</p>
					<p className='font-bold text-bgGreen text-xl uppercase'>{solution}</p>
					<p>
						Guesses : <span className='font-bold text-bgGreen'>{turn}</span>
					</p>
					<p>Refresh page to play again</p>
				</div>
			)}
			{!isCorrect && (
				<div className={classes.modalBox}>
					<p className='text-2xl font-bold uppercase text-bgYellow'>Sorry!!!</p>
					<p>You guessed incorrectly</p>
					<p className='font-bold text-bgYellow text-xl uppercase'>
						{solution}
					</p>
					<p>Refresh page to play again</p>
				</div>
			)}
		</div>
	);
}

export default Modal;
