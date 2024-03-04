import './index.css';
import { RootState } from './redux/store';
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const {count} = useAppSelector((state: RootState) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Tech Net</h1>
     <div className='flex justify-center gap-2'>
     <div className='border-sky-1 ' onClick={() => dispatch(decrement())}>
        Decrement
      </div>
      <div>{count}</div>
      <div className='border-sky-100' onClick={() => dispatch(increment())}>Increment</div>
      <div className='border-sky-100' onClick={() => dispatch(incrementByAmount(5))}>Increment by Value</div>
     </div>

    </div>
  )
}

export default App
