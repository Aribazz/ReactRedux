import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter';
import "./App.css";
function App() {
  const {count} = useSelector((state)=>state.counter);
  // const count = useSelector ((state)=>state.counter.count);
  console.log(count);
  // const [count,setCount]=useState(0);
   const dispatch =useDispatch();
  return (
    <div className='App'>
      <h1>This is the counter: {count} </h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button> 

     
    </div>
  );
}

export default App;
