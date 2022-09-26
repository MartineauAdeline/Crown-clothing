import { Routes, Route } from 'react-router-dom';

import Home from './routes/routes/home/home.component';
import Navigation from './routes/routes/navigation/navigation.component';

const Shop = () => {
  return (
    <h1>shop page</h1>
  )
};

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
         {/* index indique à cette route de retourner l'élément home directement avec "/"*/}
        <Route index={true} element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
      </Route>
    </Routes>
  );
};

export default App;
