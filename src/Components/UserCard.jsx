import axios from "axios"
import { BASE_URL } from "../Util/Url"
import { useDispatch } from "react-redux"
import { removeUserFeed } from "../Redux/feedSlice"
import {useState } from 'react'

const UserCard=({user})=>{
  const [successToast,setSuccessToast]=useState(false)
  const dispatch=useDispatch()
  
const {firstName,lastName,photoUrl,skills,age,about,gender,_id}= user

      const handleSendRequest=async(status,userId)=>{
        try {
          const res=await axios.post(BASE_URL+`/send/request/${status}/${userId}`)
          setSuccessToast(true)
          console.log(successToast)
          setTimeout(()=>{
            setSuccessToast(false)
          },3000)
           console.log(successToast)
         dispatch(removeUserFeed(userId))
        } catch (err) {
          console.log(err)
        }
      }



    return (
    <div className="card bg-base-100 w-96 shadow-sm border-b-info-content mx-auto">
        <figure>
          <img
            src={photoUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName} {lastName}</h2>
          <p>{age},{gender}</p>
          <p>{about}</p>
          {/* {
            skills?.map((skills,index)=>{
                return <p key={index}>{skill}</p>
            })
          } */}
          <div className="card-actions justify-center">
            <button onClick={()=>handleSendRequest('ignored',_id)} className="btn btn-primary">Ignore</button>
            <button onClick={()=>handleSendRequest('interested',_id)} className="btn btn-secondary">Interested</button>
          </div>
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
      </div>)
}

export default UserCard