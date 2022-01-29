function Handle() {

    const onKeyUp = (event) => {
        if(event.keyCode === 13){
            console.log('Enter!!');
        }
    };

    return(
        <>
            <input onKeyUp={onKeyUp} />
        </>
    );
}

export default Handle;