import './App.css';
import { useState } from 'react';

function App() {
	const[data] = useState([{id: 1, name: "zero"},{id: 2, name: "one"},{id: 3, name: "two"},{id: 4, name: "three"},{id: 5, name: "four"},{id: 6, name: "five"},{id: 7, name: "six"},{id: 8, name: "seven"},{id: 9, name: "eight"},{id: 10, name: "nine"}]);
	const [state, setState] = useState(0);
	return (
		<div className='Calc'>
			<div className='Calc-Display'>
				{state}
			</div>
			<div className='Calc-Keypad'>
				<button onClick={() => setState(0)}>AC</button>
				<div className='Calc-Keypad-Operators'>
				</div>
				<div className='Calc-Keypad-Numbers'>
					{data.map((item) => { return <button key={item.id} onClick={() => setState((item.id-1))}>{item.name}</button> })}
				</div>
			</div>
		</div>
);}

export default App;
