import axios from "axios"
import { BASE_URL } from "../Util/Url"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRequests } from "../Redux/requests"
import ConnectionsCard from "./ConnectionsCard"

const Requests=()=>{

    const dispatch=useDispatch()
    const requests=useSelector(store=>store.requests)
    console.log(requests)

    const fetchRequest=async()=>{
        try {
         const res=await axios.get(BASE_URL+'/user/requests/received')
         dispatch(addRequests(res.data.requests))

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchRequest()
    },[])
    
        if(!requests) return 
    if(requests.length===0) {
        return <h1>No Connections Found</h1>
    }


    return (
        <> 
        <h1 className="text-bold text-2xl text-center">This is connections page</h1>
        {
            requests.map((request)=>{
                return (
                      <div key={request._id} className="card card-side w-100 mt-10  border-2 border-b-cyan-300 shadow-sm mx-auto">
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
  </div>
</div>
                )
                
            })
        }
       </>
    )
}


export default Requests