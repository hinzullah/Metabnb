import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Places from './Places';


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/places' element={<Places/>}></Route>
        </Routes>
      </Router>
      <Cards />
        <Footer/>
    </div>
  );
}

export default App;
