import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import KuryrPage from "./KuryrPage";
import HomePage from "./HomePage";
import { About, Navbar, Footer } from "./components";

import Homepage from './HomePage';


const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/KuryrPage" exact element={<KuryrPage />} />
       
      
        
      </Routes>
      

    </BrowserRouter>
  );
};





export default App;