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
      const [successToast,setSuccessToast]=useState(false)


      const saveProfileData=async()=>{
        try {
       const res=await axios.patch(BASE_URL+'/profile/edit',{
            firstName,lastName,age,gender,photoUrl,about
          })
          dispatch(addUser(res.data))
          setSuccessToast(true)
          setTimeout(()=>{
            setSuccessToast(false)
          },3000)
        } catch (errr) {
          console.log(err)
        }
      }


const dropDownIntitalValues=['male','female','other']

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
  <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">{gender}</div>
  <ul tabIndex={0}  className="dropdown-content menu bg-base-100 rounded-box z-1  p-2 shadow-sm">
    {
      dropDownIntitalValues.map((option,index)=>{
          return <li key={option} onClick={()=>setGender(dropDownIntitalValues[index])}><a>{option}</a></li>
      })
    }
     
  </ul>
</div>
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input type="text" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} className="input"  />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">About</legend>
 <textarea value={about} onChange={(e)=>setAbout(e.target.value)} className="textarea"></textarea>
</fieldset>

<div className="flex justify-center">
<button onClick={()=>saveProfileData()}  className="btn btn-success w-25">Save</button>
</div>
        </div>
      </div>
      </div>
      <div className="border-2 border-amber-500">
        <h1 className="text-center text-2xl pb-10 pt-10">Profile Preview</h1>
      <UserCard user={{firstName,lastName,age,gender,photoUrl,about}} />
      </div>
      {
         successToast && <>
          <div className="toast toast-top toast-center"> 
          <div className="alert alert-success">
          <span>Profile Saved successfully</span>
          </div>
</div>

         </>
      }
     
      </div>
    )
}

export default EditProfile