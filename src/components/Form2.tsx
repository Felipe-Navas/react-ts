import { ChangeEvent, useState } from 'react'

export const Form = () => {
  const [form, setForm] = useState({
    zipCode: '',
    city: '',
  })

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Zipcode:</label>
        <input
          type="text"
          className="form-control"
          name="zipCode"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City:</label>
        <input
          type="text"
          className="form-control"
          name="city"
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
