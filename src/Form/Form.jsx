import Input from "../Input/Input"

const Form = ({state,setState, error, handleSubmit, setError}) => {
    let dob = new Date(state.dateofbirth).getFullYear()
    let currentYear = new Date().getFullYear()

    return(
        <form onSubmit={handleSubmit}>
          <Input type={"text"} name={"fullname"} placeHolder={"Enter Your Full name..."} state={state} setState={setState} error={error} setError={setError}/>
          <Input type={"text"} name={"email"} placeHolder={"Enter your Email..."} state={state}  setState={setState} error={error} setError={setError} />
          <Input type={"password"} name={"password"} placeHolder={"Enter your password"} state={state}  setState={setState} error={error} setError={setError} />
          <Input type={"password"} name={"confirmpassword"} placeHolder={"Please confirm your password"} state={state}  setState={setState} error={error} setError={setError} />
          <Input type={"date"} name={"dateofbirth"} placeHolder={"Enter your Date of birth"} state={state}  setState={setState}  error={error} setError={setError} />
        
          <button disabled={currentYear - dob < 18 ? true : false} >Submit</button>
        </form>
    )
}

export default Form;