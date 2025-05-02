import axios from "axios"
import { useEffect,useState } from "react"
import { BASE_URL } from "../Util/Url"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../Redux/feedSlice"
import UserCard from "./UserCard"

const Feed=()=>{
     
     const [error,setError]=useState('')
    const dispatch=useDispatch()
    const feed=useSelector(store=>store.feed)

    const getFeed=async ()=>{
      
        try {
        const res=await axios.get(BASE_URL+'/feed')
        dispatch(addFeed(res.data))
        
        } catch (err) {
          document.getElementById('my_modal_4').showModal()
          setError(err?.response?.data)
        }
    }

    useEffect(()=>{  
        getFeed()
    },[])
          
     if(feed?.length===0) return <h1 className="flex justify-center">No Users Found</h1>

    return ( feed && <div className="my-10">
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
           <UserCard key={feed[0]._id} user={feed[0]} />
        </div>
    )
}

export default Feed