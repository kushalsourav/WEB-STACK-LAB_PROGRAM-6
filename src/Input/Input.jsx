const Input = ({name,error,placeHolder,type, state, setState,setError}) => {

    return(
        <div className="form-control">
            <label htmlFor={name}>{name}:</label>
            {console.log(state)}
            <input type={type} id={name} name={name} className="input-form"  onChange={(e) => {
                setState({...state, [e.target.name]:e.target.value})
                setError({...error, type:'', message:''})
            }
            } placeholder={placeHolder} />
            {error && error.type === name && <span>{error.message}</span>}  
        </div>
    );
};

export default Input;