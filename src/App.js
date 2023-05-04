import './App.css';
import { ops, nums, ids } from './components/Constants';
import Operation from './components/Operation'
import Number from './components/Number';
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState('0')
  const [lastPressed, setLastPressed] = useState(undefined)
  const [operation, setOperation] = useState(undefined)

  const handleNumberClick=(e) => {
    const displayNumber=e.target.innerText
    setLastPressed(displayNumber)
    calc==="0" || operation==="=" ? setCalc(displayNumber) : setCalc(calc+displayNumber)
  }

  const handleOperationClick = (e) => {
  const op = e.target.innerText 
  setOperation(op)
  setLastPressed(op)
  op!==calc[calc.length-1] && setCalc(calc+op)
  if (operation) {
    if(!ops.includes(lastPressed) || (op==="-" && operation!==op)) {
      setCalc(calc+op)
    } else if(op!==operation){
      const filtered = calc.split('').filter(x=>!ops.includes(x))
      setCalc(filtered.join('')+op)
    }
    }

}
 
  const handleEqualsClick = () => {
    nums.includes(lastPressed) && setCalc(eval(calc))
    setOperation("=")
  }

  const handleClearClick = () => {
    setCalc("0")
    setOperation(undefined)
  }

  const handleDecimalClick = (e) => {
    const decimal=e.target.innerText
    const splitted=calc.split(/[\+\-\*\/]/)
    const last=splitted.slice(-1)[0]
    if(!last.includes(decimal)) {
      setCalc(calc+decimal)
    }
  }
  
  
  

  return (
    <div className="w-[290px] h-[auto] bg-white flex flex-wrap justify-center outline outline-[10px] outline-white rounded">
      <div id="display" className="bg-black text-white font-['Digital'] text-[2.25rem] p-[10px] mb-1 h-[auto] w-[285px] flex flex-wrap justify-end items-end break-all">
        {calc}
      </div>

      
      <div className="w-[75%] flex flex-wrap">
      <button id="clear" className="h-[60px] w-[213px] m-[2px] mb-[1px] cursor-pointer text-2xl text-white bg-[#f6b93b] rounded-sm active:bg-[#fa983a]" onClick={handleClearClick}>AC</button>
        {nums.map(x => (
          <Number key={x} id={ids[x]} inner={x} handleClick={handleNumberClick}/>
        ))}
        <button id="decimal" className="h-[60px] w-[70px] m-[1px] cursor-pointer text-2xl text-white bg-[#a4b0be] rounded-sm active:bg-[#747d8c]" onClick={handleDecimalClick}>.</button>
      </div>

      <div className="w-[25%] mt-[1px]">
        {ops.map(x => (
          <Operation key={x} id={ids[x]} inner={x} handleClick={handleOperationClick}/>
        ))}
        <button id="equals" className="h-[60px] w-[70px] m-[1px] cursor-pointer text-2xl text-white bg-[#353b48] rounded-sm active:bg-[#272b36]" onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
}

export default App;
