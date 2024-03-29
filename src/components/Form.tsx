// import { ChangeEvent, useState } from 'react'

import { useForm } from '../hooks/useForm'

interface FormData {
  name: string
  email: string
  age: number
}

export const Form = () => {
  //const [form, setForm] = useState({
  //  name: '',
  //  email: '',
  //})

  //const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //  const { name, value } = target
  //  setForm({
  //    ...form,
  //    [name]: value,
  //  })
  //}

  const { name, email, age, form, handleChange } = useForm<FormData>({
    name: 'Test',
    email: 'test@gmail.com',
    age: 15,
  })

  // const { name, email, age } = form

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
