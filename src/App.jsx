import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom ';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
export default function App() {
  return (
    <>
     <NoteState>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={ <Home /> } />      
          <Route path="/about" element={ <About /> } />
         </Routes>
       </BrowserRouter>
     </NoteState>
    </>
  )
}
