import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserCard from "./UserCard"
import axios from "axios"
import { BASE_URL } from "../Util/Url"
import {addUser} from '../Redux/userSlice'

const EditProfile=(props)=>{
  const dispatch=useDispatch()
  

  const [firstName,setFirstName]=useState(props.user.firstName)
   const [lastName,setLastName]=useState(props.user.lastName)
    const [age,setAge]=useState(props.user.age)
     const [gender,setGender]=useState(props.user.gender)
      const [photoUrl,setPhotoUrl]=useState(props.user.photoUrl)
      const [about,setAbout]=useState(props.user.about)


      const saveProfileData=async()=>{
        try {
       const res=await axios.patch(BASE_URL+'/profile/edit',{
            firstName,lastName,age,gender,photoUrl,about
          })
          dispatch(addUser(res.data))
        } catch (errr) {
          console.log(err)
        }
      }




    return (
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
        <div className="card card-border bg-black border-y-green-50 w-96  shadow-2xl" >
        <div className="card-body">
          <h2 className="card-title">Profile</h2>
   <fieldset className="fieldset">
   <legend className="fieldset-legend">First Name</legend>
  <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  className="input"  />
  </fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Last Name</legend>
  <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="input"  />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Age</legend>
  <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} className="input"  />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="input"  />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input type="text" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} className="input"  />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">About</legend>
  <input type="text" value={about} onChange={(e)=>setAbout(e.target.value)} className="input"  />
</fieldset>
<div className="flex justify-center">
<button onClick={()=>saveProfileData()}  className="btn btn-success w-25">Save</button>
</div>
        </div>
      </div>
      </div>
      <div className="border-2 border-amber-500">
      <UserCard user={{firstName,lastName,age,gender,photoUrl,about}} />
      </div>
      </div>
    )
}

export default EditProfile