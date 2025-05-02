import axios from "axios"
import {  useState } from "react"
import { BASE_URL } from "../Util/Url"
import { useDispatch } from "react-redux"
import {addUser} from '../Redux/userSlice'
import { Link, useNavigate } from "react-router"

const Signup=()=>{
    const [firstName,setFirstName]=useState('')
     const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [age,setAge]=useState('')
    const [about,setAbout]=useState('')
    const [gender,setGender]=useState('Select')
    const [error,setError]=useState('')

   const navigate=useNavigate()
    const dispatch=useDispatch()
    const dropDownIntitalValues=['male','female','other']
        
    const handleSignUp=async()=>{
            try {
            const res=await axios.post(BASE_URL+'/signup',{firstName,lastName,email,password,age,about,gender})
            dispatch(addUser(res.data.data))
            return navigate('/profile')
        } catch (err) {
          
          document.getElementById('my_modal_4').showModal()
          setError(err?.response?.data)
        }
       
           }
    return (
       <>
         <div className="flex justify-center">
  <div className="card card-border bg-black border-y-green-50 w-120 mt-45 shadow-2xl" >
  <div className="card-body">
    <h2 className="card-title">Signup</h2>
    <div className="flex justify-between ">
<fieldset className="fieldset">
  <legend className="fieldset-legend">FirstName?</legend>
  <input type="text"  value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="input w-50" placeholder="Type here" />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">LastName?</legend>
  <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="input w-50" placeholder="Type here" />
</fieldset>
</div>
<div className="flex justify-between">
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input className="input w-38"  type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="mail@site.com" required />
</label>
</fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
 <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
 
  value={password} className="w-38" onChange={(e)=>setPassword(e.target.value)}
    type="password"
    required
    placeholder="Password"
  />
</label>
</fieldset>
<p className="validator-hint hidden">
   Enter valid password and Email
</p>
</div>
<div className="flex justify-between">
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Age</legend>
  <input type="text"value={age} onChange={(e)=>setAge(e.target.value)} className="input w-50" placeholder="Type here" />
  
</fieldset>

</div>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-5/12 max-w-5xl -mt-40">
    <h3 className="font-bold text-lg">ERROR</h3>
    <p className="py-4">{error}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

 <div className="card-actions justify-center pt-2">
      <button onClick={()=>handleSignUp()} className="btn btn-primary w-full">Signup</button>
    </div>
    <div className="flex ml-25"><h1 className="mt-2">Already have an Account? </h1>
    <Link to={'/login'}><button className="btn btn-active btn-accent ml-3">Login</button></Link>
    </div>
    
    
  </div>
</div>
</div>
       </>
    )
}


export default Signup