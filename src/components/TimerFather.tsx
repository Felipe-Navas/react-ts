import { Timer } from './Timer'
import { useState } from 'react'

export const TimerFather = () => {
  const [miliseconds, setMiliseconds] = useState(1000)
  return (
    <>
      <span>Miliseconds: {miliseconds}</span>

      <br />

      <div className="mt-2">
        <button
          className="btn btn-outline-success"
          onClick={() => setMiliseconds(1000)}
        >
          1000
        </button>
        <button
          className="btn btn-outline-success ms-2"
          onClick={() => setMiliseconds(2000)}
        >
          2000
        </button>
      </div>

      <Timer miliseconds={miliseconds} />
    </>
  )
}
