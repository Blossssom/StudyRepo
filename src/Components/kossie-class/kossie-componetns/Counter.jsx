function Counter() {

    const [cnt0, setCnt0] = useState(0);
    const [cnt1, setCnt1] = useState(0);
    const [cnt2, setCnt2] = useState(0);

    const addCnt0 = () => {
        setCnt0(cnt0 + 1);
    };

    return(
        <button onClick={addCnt0}>add Count0!  count : {cnt0}</button>
    );
}

export default Counter;