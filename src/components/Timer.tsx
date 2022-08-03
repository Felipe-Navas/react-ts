import { useEffect, useRef, useState } from 'react'

type TimerProps = {
  miliseconds: number
}

export const Timer = ({ miliseconds }: TimerProps) => {
  const [seconds, setSeconds] = useState(0)
  const ref = useRef<NodeJS.Timer>()

  useEffect(() => {
    ref.current && clearInterval(ref.current)

    ref.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, miliseconds)
  }, [miliseconds])

  return (
    <>
      <h4 className="mt-2">
        <span>
          Timer: <small>{seconds}</small>
        </span>
      </h4>
    </>
  )
}
