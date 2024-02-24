import React from 'react'
import './'
// Import react-hook-form package
import { useForm } from 'react-hook-form';

const App = () => {

  const {
    register, // 
    handleSubmit, // 
    // watch, // 
    formState: { errors }, // 
  } = useForm();

  const handleSaveDate = (payload) => {

    console.log(payload);
  }

  return (
    <main className="container">
      <h1>
        React ⚛️
      </h1>
      <h2>
        React-Form-Hook ⚡ + Pico Css 🌀
      </h2>
      {/* Form:  */}
      <form onSubmit={handleSubmit(handleSaveDate)}>
        <section className='form_section'>
          <label>
            Name
            <input
              type='text'
              name="name"
              placeholder="First name"
              autoComplete="given-name"
              {...register("name", { required: true })}
            />
          </label>
          {errors.name && <span>name is required!</span>}
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            />
          </label>
          {errors.email && errors.email.type === 'required' && <span>email is required!</span>}
          {errors.email && errors.email.type === 'pattern' && <span>email is invalid!</span>}
        </section>
        <center>
          <button type='submit' >Submit</button>
        </center>
      </form>
    </main>
  )
}

export default App;