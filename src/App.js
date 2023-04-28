import './App.css';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
	
	const[data] = useState([{id: 8, name: "seven", value: 7},{id: 9, name: "eight", value: 8},{id: 10, name: "nine", value: 9},
			{id: 5, name: "four", value: 4},{id: 6, name: "five", value: 5},{id: 7, name: "six", value: 6},
			{id: 2, name: "one", value: 1},{id: 3, name: "two", value: 2},
			{id: 4, name: "three", value: 3},{id: 1, name: "zero", value:0}])

	const[operators] = useState([{id: 11, name: "add", value: '+'},{id: 12, name: "subtract", value: '-'},
			{id: 13, name: "multiply", value: '*'},{id: 14, name: "divide", value: '/'}])

	const[formula, setFormula] = useState({
		previusPressed: "0",
		formula: '',
		});

	const[display, setDisplay] = useState('0');

	const numberPressed = (e) => {
			if(formula.previusPressed === '='){
				setFormula({previusPressed: e.target.value, formula: ''});
				setDisplay(e.target.value);
			}else{
				setDisplay(p => {if(p === '0' && e.target.value==='0'){
					return p;
				}else if(p === '0' && e.target.value !== '0'){
					return e.target.value;
				}else{
					return p + e.target.value;
				}
			})};
	}

	const operatorPressed = (e) => {
		if(formula.previusPressed === '='){
			setFormula({previusPressed: e.target.value, formula: display + e.target.value});
		}else{
		setFormula(p => {return {...p, previusPressed: e.target.value, formula: p.formula + display + e.target.value}});	
		}
		setDisplay("0");
	}

		const clear = () => {
			setDisplay("0");
			setFormula({previusPressed: "0", formula: ''})
		}

		const calcResult = (e) => {
			if(formula.previusPressed === '='){
				return;
			}else{
				let result = math.evaluate(formula.formula + display);
				setDisplay(result);
				setFormula({...formula, formula: formula.formula + display + e.target.value, previusPressed: e.target.value});
			}
		}

	return (
		<div className='Calc'>
			<div className='Visor'>
				<div className='Calc-Formula'>
						{formula.formula}
					</div>
				<div className='Calc-Display'>
					{display}
				</div>
			</div>
			<div className='Calc-Keypad'>
				<button id="clear" className='ac' onClick={clear}>AC</button>

				<div className='Calc-Keypad-Numbers'>
					{data.map((item) => { return <button key={item.id} id={item.name} value={item.value} onClick={numberPressed}>{item.value}</button> })}
					<button id='decimal'>.</button>
					<button id='equals' onClick={calcResult} value='='>=</button>
				</div>
				
				<div className='Calc-Keypad-Operators'>
					{operators.map((item) => { return <button className='operator' key={item.id} id={item.name} value={item.value} onClick={operatorPressed}>{item.value}</button> })}
				</div>
	
			</div>
		</div>
);}

export default App;
