import './App.css';
import { useState } from 'react';

function App() {
	
	const[data] = useState([{id: 8, name: "seven", value: 7},{id: 9, name: "eight", value: 8},{id: 10, name: "nine", value: 9},
			{id: 5, name: "four", value: 4},{id: 6, name: "five", value: 5},{id: 7, name: "six", value: 6},
			{id: 2, name: "one", value: 1},{id: 3, name: "two", value: 2},
			{id: 4, name: "three", value: 3},{id: 1, name: "zero", value:0}])
	const[operators] = useState([{id: 11, name: "add", value: '+'},{id: 12, name: "subtract", value: '-'},
			{id: 13, name: "multiply", value: '*'},{id: 14, name: "divide", value: '/'}])
	const [state, setState] = useState({result:0, display:''});
	return (
		<div className='Calc'>
			<div className='Calc-Display'>
				{state.display}
			</div>
			<div className='Calc-Keypad'>
				<button id="clear" className='ac' onClick={() => setState(({result:0, display:''}))}>AC</button>
				<div className='Calc-Keypad-Numbers'>
					{data.map((item) => { return <button key={item.id} id={item.name}>{item.value}</button> })}
					<button id='decimal'>.</button>
					<button id='equals'>=</button>
				</div>
				
				<div className='Calc-Keypad-Operators'>
					{operators.map((item) => { return <button className='operator' key={item.id} id={item.name}>{item.value}</button> })}
				</div>
				
			</div>
		</div>
);}

export default App;
