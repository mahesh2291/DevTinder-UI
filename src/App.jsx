import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Body from './Components/Body'
import Login from './Components/Login'
import axios from 'axios'
import { Provider } from 'react-redux'
import appStore from './Redux/app'
import Profile from './Components/Profile'
import Feed from './Components/Feed'
import Connections from './Components/Connections'
import Requests from './Components/Requests'
import Signup from './Components/Signup'


axios.defaults.withCredentials = true;
function App() {
 

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path='/'  element={<Body />}>
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/connections' element={<Connections />} />
        <Route path='/requests' element={<Requests />} />
        <Route path='/signup' element={<Signup />} />
       </Route>
     </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
