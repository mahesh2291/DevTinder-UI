import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../Util/Url"

const Login=()=>{
    const [emailInput,setEmailInput]=useState('')
    const [passwordInput,setPasswordInput]=useState('')

    
        const handleLogin=async()=>{
            try {
            const res=await axios.post(BASE_URL+'/login',{email:emailInput,password:passwordInput})
            console.log(res)
        } catch (err) {
            console.log(err.message)
        }
       
           }

    return (
        <div className="flex justify-center">
  <div className="card card-border bg-black border-y-green-50 w-96 mt-55 shadow-2xl" >
  <div className="card-body">
    <h2 className="card-title">LOGIN</h2>
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
  <input onChange={(e)=>setEmailInput(e.target.value)} value={emailInput} type="email" placeholder="mail@site.com" required />
</label>
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
  value={passwordInput}
  onChange={(e)=>setPasswordInput(e.target.value)}
    type="password"
    required
    placeholder="Password"
  />
</label>
<p className="validator-hint hidden">
   Enter valid password and Email
</p>
    <div className="card-actions justify-center pt-2">
      <button onClick={()=>handleLogin()} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
    )
}

export default Login