import { useEffect, useState } from "react";
import getRandomWord from "./wordList";

function App() {
	const [solution, setSolution] = useState(null);

	useEffect(() => {
		const word = getRandomWord();
		console.log(word);
		setSolution(word);
	}, [setSolution]);

	return (
		<div className='flex flex-col items-center w-screen'>
			<h1 className='text-xl'>Wordle Clone</h1>
			{solution && <p>The solution is : {solution}</p>}
		</div>
	);
}

export default App;
