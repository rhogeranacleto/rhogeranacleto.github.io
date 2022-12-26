import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Home/Home.page';
import { ResumePage } from './Resume/Resume.page';

function App() {
  return (
    <Routes>
      <Route path='/resume' element={<ResumePage />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
