// import { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const Form2 = () => {
  // const [form, setForm] = useState({
  //   zipCode: '',
  //   city: '',
  // })

  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   })
  // }

  const { form, handleChange } = useForm({ zipCode: '3000', city: 'Madrid' })

  const { zipCode, city } = form

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Zipcode:</label>
        <input
          type="text"
          className="form-control"
          name="zipCode"
          value={zipCode}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City:</label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
