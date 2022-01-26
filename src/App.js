import './App.css';
import Hello from './Components/Hello';

// 기본적으로 제공되는 App.css는 이곳에만 적용되는 것이 아님

function App() {
  const name = "bloxxom";
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
