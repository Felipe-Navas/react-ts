import { useState } from 'react'

interface User {
  uid: string
  name: string
}

export const User = () => {
  const [user, setUser] = useState<User>()

  const login = () => {
    setUser({
      uid: '123',
      name: 'John Doe',
    })
  }

  return (
    <>
      <h3 className="mt-5">Usuario</h3>

      <button className="btn btn-outline-primary mb-2" onClick={login}>
        Login
      </button>

      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </>
  )
}
