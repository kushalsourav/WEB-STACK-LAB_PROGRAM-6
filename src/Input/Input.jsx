import "./Input.css"
const Input = ({name,error,placeHolder,type, state, setState,setError, stateName}) => {

    return(
        <div className="form-control">
            <label htmlFor={name} className="input-label" >{name}:</label>
            <input type={type} id={name} name={name} className="input-form"  
    
             value={stateName}
            onChange={(e) => {
                setState({...state, [e.target.name]:e.target.value})
                setError({...error, type:'', message:'', alert:''})
            }
            } placeholder={placeHolder} />
            {error && error.type === name && <span className={`${error.alert}`} >{error.message}</span>}  
        </div>
    );
};

export default Input;