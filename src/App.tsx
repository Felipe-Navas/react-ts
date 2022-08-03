import { Counter } from './components/Counter'
import { User } from './components/User'
import { TimerFather } from './components/TimerFather';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter />

      <User />
      <hr />
      <h2 className='mt-5'>useEffect - useRef</h2>
      <TimerFather />
    </>
  )
}

export default App
