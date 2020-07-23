import React, {useState} from 'react';
import CountBtn from "./CountBtn";

export default function App() {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(10)
  const [count3, setCount3] = useState(100)
  const updateCounter1 = (n) => {setCount1(n);}
  const updateCounter2 = (n) => {setCount2(n);}
  const updateCounter3 = (n) => {setCount3(n);}
  const clearAll1 = () => {setCount1(0);}
  const clearAll2 = () => {setCount2(0);}
  const clearAll3 = () => {setCount3(0);}
  return (
      <div className="App" align="center">
        <CountBtn value={-3} count={count1} updateCounter={updateCounter1}/>
        <CountBtn value={-2} count={count1} updateCounter={updateCounter1}/>
        <CountBtn value={-1} count={count1} updateCounter={updateCounter1}/>
        {count1}
        <CountBtn value={+1} count={count1} updateCounter={updateCounter1}/>
        <CountBtn value={+2} count={count1} updateCounter={updateCounter1}/>
        <CountBtn value={+3} count={count1} updateCounter={updateCounter1}/>
        <br/>
        <button onClick={clearAll1}>Reset this counter to zero</button>
        <hr/>
        <CountBtn value={-30} count={count2} updateCounter={updateCounter2}/>
        <CountBtn value={-20} count={count2} updateCounter={updateCounter2}/>
        <CountBtn value={-10} count={count2} updateCounter={updateCounter2}/>
        {count2}
        <CountBtn value={+10} count={count2} updateCounter={updateCounter2}/>
        <CountBtn value={+20} count={count2} updateCounter={updateCounter2}/>
        <CountBtn value={+30} count={count2} updateCounter={updateCounter2}/>
        <br/>
        <button onClick={clearAll2}>Reset this counter to zero </button>
        <hr/>
        <CountBtn value={-300} count={count3} updateCounter={updateCounter3}/>
        <CountBtn value={-200} count={count3} updateCounter={updateCounter3}/>
        <CountBtn value={-100} count={count3} updateCounter={updateCounter3}/>
        {count3}
        <CountBtn value={+100} count={count3} updateCounter={updateCounter3}/>
        <CountBtn value={+200} count={count3} updateCounter={updateCounter3}/>
        <CountBtn value={+300} count={count3} updateCounter={updateCounter3}/>
        <br/>
        <button onClick={clearAll3}>Reset this counter to zero </button>
        <hr/>
      </div>
  );
}
