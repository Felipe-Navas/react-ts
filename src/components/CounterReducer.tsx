import { useReducer } from 'react'

const initialState = {
  count: 10,
}

type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'custom'; payload: number }

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }

    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }

    case 'custom':
      return {
        ...state,
        count: action.payload,
      }

    default:
      return state
  }
}

export const CounterReducer = () => {
  const [{ count }, dispatch] = useReducer(counterReducer, initialState)

  return (
    <>
      <h2>CounterReducer: {count}</h2>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +1
      </button>

      <button
        className="btn btn-outline-warning ms-2"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -1
      </button>

      <button
        className="btn btn-outline-danger ms-2"
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
      >
        100
      </button>
    </>
  )
}
