import axios from "axios"
import { BASE_URL } from "../Util/Url"
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRequests } from "../Redux/requests"
import ConnectionsCard from "./ConnectionsCard"
import { removeRequest } from "../Redux/requests"

const Requests=()=>{
const [error,setError]=useState('')
const [successToast,setSuccessToast]=useState(false)
const [toastMessage,setToastMessage]=useState('')
    const dispatch=useDispatch()
    const requests=useSelector(store=>store.requests)

    const fetchRequest=async()=>{
        try {
         const res=await axios.get(BASE_URL+'/user/requests/received')
         dispatch(addRequests(res.data.requests))

        } catch (err) {
           document.getElementById('my_modal_4').showModal()
          setError(err?.response?.data)
        }
    }

    const reviewRequests=(status,_id)=>{
        try {
            const res=axios.post(BASE_URL+`/request/review/${status}/${_id}`)
              const toastMessage=status==='rejected'? 'Rejected' : 'Accepted '
              setToastMessage(toastMessage)
              setSuccessToast(true)
          setTimeout(()=>{
            setSuccessToast(false)
            setToastMessage('')
          },3000)
           dispatch(removeRequest(_id))
        } catch (err) {
            document.getElementById('my_modal_4').showModal()
          setError(err?.response?.data)
        }
    }

    useEffect(()=>{
        fetchRequest()
    },[])
    
        if(!requests) return 
    if(requests.length===0) {
        return <h1 className="text-center">No Requests Found</h1>
    }


    return (
        <> 
        {
            requests.map((request)=>{
                return (
                      <div key={request._id} className="card card-side w-120 mt-10  border-2 border-b-cyan-300 shadow-sm mx-auto">
  <figure>
    <img className="w-50 h-50"
      src={request.fromUserId.photoUrl}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{request.fromUserId.firstName} {request.fromUserId.lastName}</h2>
    <p>{request.fromUserId.age},{request.fromUserId.gender}</p>
    {/* {
        skills?.map((skill,index)=>{
          return <p key={index}>{skill}</p>
        })
    } */}
    <p>{request.fromUserId.about}</p>
    <div className="flex ">
    <button className="btn w-30 btn-active btn-primary" onClick={()=>reviewRequests('rejected',request._id)}>Reject</button>
<button className="btn w-30 ml-5 btn-active btn-secondary" onClick={()=>reviewRequests('accepted',request._id)}>Accept</button>
</div>
  </div>
</div>
                )
                
            })
        }
   
{
         successToast && <>
          <div className="toast toast-top toast-center"> 
          <div className="alert alert-success">
          <span>{toastMessage}</span>
          </div>
</div>

         </>
      }
       </>
    )
}


export default Requests