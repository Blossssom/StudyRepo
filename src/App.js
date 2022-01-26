import './App.css';
import Day from './Components/makePart/Day';
import DayList from './Components/makePart/DayList';
import Header from './Components/makePart/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './Components/makePart/EmptyPage';


// 기본적으로 제공되는 App.css는 이곳에만 적용되는 것이 아님

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
