import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { RootState } from './redux/store';

function App() {
  const {count} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Tech Net</h1>
     <div className='flex justify-center gap-2'>
     <div className='border-sky-1 '>
        Increment
      </div>
      <div>{count}</div>
      <div className='border-sky-100'>Decrement</div>
     </div>

    </div>
  )
}

export default App
