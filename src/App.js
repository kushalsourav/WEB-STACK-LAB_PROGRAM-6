
import { useState } from 'react';
import './App.css';
import Form from './Form/Form';

function App() {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    dateofbirth: ""
  })
  const [error, setError] = useState({
    type: "",
    message: "",
  })
  const handleSubmit = (e) => {
      e.preventDefault()
      if(state.confirmpassword !== state.password) {
        setError({...error, type:"confirmpassword", message:"Passwords not matching"})
      }
      if(state.confirmpassword === ''){
        setError({...error, type:"confirmpassword", message:"Please confirm your password"})
      }
      if(state.password === ''){
        setError({...error, type:"password", message:"Please Enter your password"})
      }
      if(state.dateofbirth === ''){
        setError({...error, type:"dateofbirth", message:"Please select your date of birth"})
      }
      if(state.email === ''){
        setError({...error, type:"email", message:"Please Enter your Email"})
      }
      if(state.fullname === ''){
        setError({...error, type:"fullname", message:"Please Enter your name"})
      }
      
  }
  return (
    <div className="App">
    <Form state={state} setState={setState} handleSubmit={handleSubmit} error={error} setError={setError}/>
    </div>
  );
}

export default App;
