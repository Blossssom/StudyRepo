import styles from"./Hello.module.css";

// 우선순위에 따라 같은 클래스의 경우 overriding됨
// .module.css 는 특정 컴포넌트에 할당하여 사용할 수 있어 중복, 누락을 막을 수 있음

function Hello() {
    function showName() {
        console.log('bloxxom!');
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt);
    }
    return(
        <div>
            {/* 특별한 경우가 아닌이상 이러한 방식의 css는 사용 x */}
            <h1>Hello!!!</h1>
            <button onClick={showName}>Show name</button>
            <button onClick={
                () => {
                    showAge(29);
                }
            }>Show Age</button>

            <input type="text" onChange={
                (e) => {
                    showText(e.target.value);
                }
            } />

            {/* 모듈 css 사용시에는 Object 처럼 사용하기
            <div className={styles.box} /> */}
        </div>
    );
}

export default Hello;