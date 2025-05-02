import axios from "axios"
import { BASE_URL } from "../Util/Url"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../Redux/connectionSlice"
import ConnectionsCard from "./ConnectionsCard"

const Connections=()=>{

    const dispatch=useDispatch()
    const connections=useSelector(store=>store.connections)


    const fetchConnections=async()=>{
        try {
            const res=await axios.get(BASE_URL+'/user/connections')
            dispatch(addConnections(res.data))
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(()=>{
       fetchConnections()
    },[])

    
    if(!connections) return 
    if(connections.length===0) {
        return <h1>No Connections Found</h1>
    }


    return (
        <> 
        <h1 className="text-bold text-2xl text-center">This is connections page</h1>
        <div className="">
        {
            connections.map((connection)=>{
                return <ConnectionsCard key={connection._id} connectionDetails={connection} />
            })
        }
        </div>
       </>
    )
}

export default Connections