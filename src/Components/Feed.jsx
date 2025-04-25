import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../Util/Url"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../Redux/feedSlice"
import UserCard from "./UserCard"

const Feed=()=>{
    const dispatch=useDispatch()
    const feed=useSelector(store=>store.feed)

    const getFeed=async ()=>{
        if(feed) return
        try {
        const res=await axios.get(BASE_URL+'/feed')
        dispatch(addFeed(res.data))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getFeed()
    },[])


    return ( feed && <div className="my-10">
           {
            feed.map((user)=>{
               return <UserCard key={user._id} user={user} />
            })
           }
        </div>
    )
}

export default Feed