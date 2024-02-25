import React from 'react'
import './'
// Import react-hook-form package
import { useForm } from 'react-hook-form';

const App = () => {

  // 1. Initialize useForm hook to manage form state and validation
  const {
    register,     // Function to register form inputs
    handleSubmit, // Function to handle form submission
    // watch,     // Function to watch form inputs
    formState: { errors }, // Object containing form validation errors
  } = useForm();

  // 2. FForm submission handler function
  const handleSaveDate = (payload) => {

    // 7. Actions to be performed on form submission
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
            {/* 3. Input field for name */}
            Name
            <input
              type='text'
              name="name"
              placeholder="First name"
              autoComplete="given-name"
              {...register("name", { required: true })}
            />
          </label>
          {/* 4. Display error message if name field is empty */}
          {errors.name && <span>name is required!</span>}

          <label>
            {/* 5. Input field for email */}
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            />
          </label>
          {/* 6. Display error message if email field is empty or if email is invalid */}
          {errors.email && errors.email.type === 'required' && <span>email is required!</span>}
          {errors.email && errors.email.type === 'pattern' && <span>email is invalid!</span>}
        </section>
        <center>
          {/* 8. Form submission button */}
          <button type='submit' >Submit</button>
        </center>
      </form>
    </main>
  )
}

export default App;