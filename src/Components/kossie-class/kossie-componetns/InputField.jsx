function InputField(props) {
    return(
        <>
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
            <div style={{color: 'red'}}>{props.errorMessage}</div>
        </>
    );
}

export default InputField;