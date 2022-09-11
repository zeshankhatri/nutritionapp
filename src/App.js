import Welcome from './Welcome';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Choice from './Choice';
import Search from './Search';
import Results from './Results';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/choice" element={<Choice />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/results" element={<Results />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
