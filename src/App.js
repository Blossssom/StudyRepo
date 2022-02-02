import './App.css';
import Day from './Components/makePart/Day';
import DayList from './Components/makePart/DayList';
import Header from './Components/makePart/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './Components/makePart/EmptyPage';
import CreateWord from './Components/makePart/CreateWord';
import CreateDay from './Components/makePart/CreateDay';
import KossieIn from './Components/kossie-class/KossieIn';
import Handle from './Components/kossie-class/Handle';
import UseState01 from './Components/kossie-class/UseState01';
import UseStateForm from './Components/kossie-class/UseStateForm';
import UseEffect01 from './Components/kossie-class/UseEffect01';
import Component01 from './Components/kossie-class/Component01';
import ConditionalRender from './Components/kossie-class/ConditionalRender';


// 기본적으로 제공되는 App.css는 이곳에만 적용되는 것이 아님

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="day/:day" element={<Day />} />
          <Route path="create_word" element={<CreateWord />} />
          <Route path="create_day" element={<CreateDay />} />
          <Route path='kossie_class' element={<KossieIn />} />
          <Route path="kossie_class/handle" element={<Handle />} />
          <Route path="kossie_class/hook_useState01" element={<UseState01/>} />
          <Route path="kossie_class/hook_useStateForm" element={<UseStateForm />} />
          <Route path="kossie_class/hook_useEffect01" element={<UseEffect01 />} />
          <Route path="kossie_class/component01" element={<Component01 />} />
          <Route path="kossie_class/conditionalRender" element={<ConditionalRender />} /> 
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
