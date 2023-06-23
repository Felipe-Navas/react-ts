import { Counter } from './components/Counter'
import { User } from './components/User'
import { TimerFather } from './components/TimerFather';
import { CounterReducer } from './components/CounterReducer';
import { Form } from './components/Form';
import { Form2 } from './components/Form2';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter />

      <User />
      <hr />
      <h2 className='mt-3'>useEffect - useRef</h2>
      <TimerFather />

      <hr />
      <h2>useReducer</h2>
      <CounterReducer />

      <hr/>
      <h2>customHooks</h2>
      <Form />

      <br/>
      <Form2 />

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default App
