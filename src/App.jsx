import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Body from './Components/Body'
import Login from './Components/Login'
import axios from 'axios'
import { Provider } from 'react-redux'
import appStore from './Redux/app'
axios.create({ withCredentials: true, })
function App() {
 

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path='/' element={<Body />}>
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<h1>feed</h1>} />
       </Route>
     </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
