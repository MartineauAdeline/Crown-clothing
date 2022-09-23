import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import './categories.styles.scss';

const App = () => {
  
  return (
    <Routes>
      <Route path='/home' element={<Home />}>
      </Route>
    </Routes>
  );
};

export default App;
