import React, { useState,useEffect , useContext} from 'react';
/** 
 * useState
 * useState
 * useContext
 * 
 * useReducer
 * useCallback
 * useMemo
 * useRef
 * useImperativeHandle
 * useLayoutEffect
 * useDebugValue
 */

function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log( useContext(Child),"kkkk")

  useEffect(() => {
    document.title = count;
    console.log("one:"+count)
  });
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Child/>
    </div>
  );
}
function Child(){
  const [count,setCount]= useState(0);

  return (
    <div>
      <p>`点击次数{count}`</p>
     <button onClick={() => setCount(count + 1)}>
        点击
      </button>
    </div>
  )
}
export default Hooks;