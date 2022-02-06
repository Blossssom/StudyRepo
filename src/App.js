import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RoutesCustom from './RoutesCustom';
import Header from './Components/makePart/Header'

// 기본적으로 제공되는 App.css는 이곳에만 적용되는 것이 아님

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {RoutesCustom.map((routes) => {
            return(<Route key={routes.path} path={routes.path} element={<routes.element />} exact />);
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
