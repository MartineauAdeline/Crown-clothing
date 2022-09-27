import { useState } from "react";

//initialisation de l'objet FormFields
const defaultFormFields = {
  displayName : '', 
  email : '', 
  password : '', 
  confirmPassword: ''
}

const SignUpForm  = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({...formFields, [name]:value });
  };

  return(
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>

        <label>Display name</label>
        <input 
          type='text' 
          required 
          onChange={handleChange} 
          name='displayName' 
          value={displayName}
        />

        <label>Email</label>
        <input 
          type='email' 
          required 
          onChange={handleChange} 
          name='email'
          value={email}
        />

        <label>Password</label>
        <input 
          type='password' 
          required 
          onChange= {handleChange} 
          name='password'
          value={password}
        />

        <label>Confirm password</label>
        <input 
          type='password'
          required onChange={handleChange} 
          name='confirmPassword' 
          value={confirmPassword}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;