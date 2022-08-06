// import { ChangeEvent, useState } from 'react'

import { useForm } from '../hooks/useForm'

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

  const { form, handleChange } = useForm({
    name: '',
    email: '',
  })

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
