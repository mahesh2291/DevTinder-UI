import { Outlet, useNavigate } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../Util/Url"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../Redux/userSlice"
import { useEffect } from "react"

const Body=()=>{

  const user=useSelector(store=>store.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const fetchUser=async()=>{
    if(user) return 
    try {
      const res=await axios.get(BASE_URL+'/profile/view')
      dispatch(addUser(res.data))
      navigate('/feed')
    } catch (err) {
      if(err.status===401) navigate('/login')
    }
  }

  useEffect(()=>{
      fetchUser()
  },[])

    return (
      <div>
      <NavBar />
      <Outlet />
      <Footer />
      </div>
    )
}

export default Body