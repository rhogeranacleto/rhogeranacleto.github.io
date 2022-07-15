import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Home/Home.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
