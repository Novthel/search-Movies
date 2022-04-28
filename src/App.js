
import './App.css';
import { HeaderMovies} from './components/HeaderMovies';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home';
import InfoMovie from './page/InfoMovie';


function App() {
  return (
    
    <BrowserRouter>
      <HeaderMovies/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/movie/:id' element={ <InfoMovie /> }/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
