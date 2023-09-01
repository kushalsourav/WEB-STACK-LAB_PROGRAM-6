
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
    alert:"",
  })
  const handleSubmit = (e) => {
      e.preventDefault()
      if(state.confirmpassword !== state.password) {
        setError({...error, type:"confirmpassword", message:"Passwords not matching", alert:"warning"})
      }
      if(state.confirmpassword === ''){
        setError({...error, type:"confirmpassword", message:"Please confirm your password", alert:"warning" })
      }
      if(state.password.length < 7){
        setError({...error, type:"password", message:"minimum letters should more than 8", alert:"warning"})
      }
      if(state.password === ''){
        setError({...error, type:"password", message:"Please Enter your password", alert:"warning"})
      }
      if(state.dateofbirth === ''){
        setError({...error, type:"dateofbirth", message:"Please select your date of birth", alert:"warning"})
      }
      if(state.email !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email) !== true) {
        setError({...error, type:"email", message:"Please Enter proper Email", alert:"warning" } )
      }
      if(state.email === ''){
        setError({...error, type:"email", message:"Please Enter your Email", alert:"warning"})
      }
      if(state.fullname === ''){
        setError({...error, type:"fullname", message:"Please Enter your name", alert:"warning"})
      }



      if(state.fullname !== '' && state.email !== '' && state.dob !== '' && state.password === state.confirmpassword) {
        state.fullname = ''
        state.email = ''
        state.dateofbirth = ''
        state.password = ''
        state.confirmpassword = ''
        setError({...error, type:"", message:"", alert:""})
        alert("Form is Submitted")

      }
  }
  return (
    <div className="App">
    <Form state={state} setState={setState} handleSubmit={handleSubmit} error={error} setError={setError}/>
    </div>
  );
}

export default App;
