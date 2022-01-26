import './App.css';
import StudyProps from './Components/StudyProps';

// 기본적으로 제공되는 App.css는 이곳에만 적용되는 것이 아님

function App() {

  return (
    <div className="App">
      <StudyProps age={29} />
    </div>
  );
}

export default App;
