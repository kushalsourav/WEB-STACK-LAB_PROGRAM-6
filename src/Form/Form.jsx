import Input from "../Input/Input"
import "./Form.css"

const Form = ({state,setState, error, handleSubmit, setError}) => {
    let dob = new Date(state.dateofbirth).getFullYear()
    let currentYear = new Date().getFullYear()

    return(
        <form onSubmit={handleSubmit} className="form">
          <Input type={"text"} name={"fullname"} placeHolder={"Enter Your Full name..."} state={state} setState={setState} error={error} setError={setError} stateName={state.fullname} />
          <Input type={"text"} name={"email"} placeHolder={"Enter your Email..."} state={state}  setState={setState} error={error} setError={setError} stateName={state.email} />
          <Input type={"password"} name={"password"} placeHolder={"Enter your password"} state={state}  setState={setState} error={error} setError={setError} stateName={state.password} />
          <Input type={"password"} name={"confirmpassword"} placeHolder={"Please confirm your password"} state={state}  setState={setState} error={error} setError={setError} stateName={state.confirmpassword} />
          <Input type={"date"} name={"dateofbirth"} placeHolder={"Enter your Date of birth"} state={state}  setState={setState}  error={error} setError={setError} stateName={state.dateofbirth} />
        
          <button className="form-btn" disabled={currentYear - dob < 18 ? true : false} >Submit</button>
        </form>
    )
}

export default Form;