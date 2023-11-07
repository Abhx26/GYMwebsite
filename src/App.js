import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
   <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar></Navbar>
    
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/exercise/:id" element={<ExerciseDetail></ExerciseDetail>}></Route>
    </Routes>
    
    
    <Footer></Footer>
   </Box>

  );
}

export default App;
