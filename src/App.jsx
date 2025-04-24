import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Body from './Components/Body'
import Login from './Components/Login'
import axios from 'axios'
axios.create({ withCredentials: true, })
function App() {
 

  return (
    <>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path='/' element={<Body />}>
        <Route path='/login' element={<Login />} />
       </Route>
     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
