import React, {useCallback, useState} from 'react';
import CountBtn from "./CountBtn";
import Counter from "./Counter";

export default function App() {
        const [numbersOfCounters, setnumbersOfCounters] = useState(1)
    const addCounter = () => {
        // numbersOfCounters=numbersOfCounters+1 !!!! error
        setnumbersOfCounters(numbersOfCounters+1)
    }
    const counters = []
    for (let i=1; i<=numbersOfCounters;i++) {
        counters.push(<Counter />)
    }
  return (
      <div className="App" align="center">
          {counters}
          {/*{[1,2,3].map(element => <Counter/>)}*/}
          {/*{[...Array(numbersOfCounters).keys()].map(element => <Counter/>)}*/}
          <div>
              <button onClick={addCounter}>Add counter</button>

          </div>
      </div>
  );
}
