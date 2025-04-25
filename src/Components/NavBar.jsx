import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../Util/Url"
import { removeUser } from "../Redux/userSlice"
import { useNavigate } from "react-router"



const NavBar=()=>{
  const dispatch=useDispatch()
  const navigator=useNavigate()
  const handleLogout=async ()=>{
    try {
      const res=await axios.post(BASE_URL+'/logout')
      console.log(res.data)
     dispatch(removeUser())
     return navigator('/login')
    } catch (err) {
       alert(err)
    }

  }

  const user=useSelector(store=>store.user)
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevTinder</a>
        </div>
       {
        user && (
          <div className="flex">
            <p className="pt-2 mask-radial-from-neutral-950">Welcome-{user.firstName}</p>
          <div className="dropdown dropdown-end mx-5">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={()=>handleLogout()}><a>Logout</a></li>
            </ul>
          </div>
        </div>
        )
       }
      </div>
    )
}

export default NavBar