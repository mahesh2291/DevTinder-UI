import { useEffect, useState } from "react"
import { useParams } from "react-router"
import createSocketConnection from "../Util/socket"
import { useSelector } from "react-redux"
import { Socket } from "socket.io-client"

const Chat=()=>{
    const loggedInUser=useSelector(store=>store.user)
    const {targetUserId}=useParams()
    const [messages,setMessages]=useState([])
    const [newMessage,setNewMessage]=useState('')
 
     const userId=loggedInUser?._id
     const firstName=loggedInUser?.firstName

     useEffect(()=>{
      if(!userId) return
         const socket=createSocketConnection()
         socket.emit('joinChat',{firstName,userId,targetUserId})

         socket.on("messageReceived",({firstName,text})=>{
           console.log(firstName +":" + text )
           setMessages(messages=>[...messages,{firstName,text}])
         })

         return ()=>{
          socket.disconnect()
         }
     },[userId,targetUserId])

     const sendMessage=()=>{
      const socket=createSocketConnection()
       socket.emit("sendMessage",{firstName,userId,targetUserId,text:newMessage})
       setNewMessage('')
     }

    return (
      <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
          <h1 className="p-5 border-b border-gray-600">Chat</h1>
          <div className="flex-1 overflow-scroll p-5">
            {
                messages.map((msg,index)=>{
                    return <div className="chat chat-start">
                    <div className="chat-header">
                     {msg.firstName}
                      <time className="text-xs opacity-50">2 hours ago</time>
                    </div>
                    <div className="chat-bubble">{msg.text}</div>
                    <div className="chat-footer opacity-50">Seen</div>
                  </div>
                })
            }
          </div>
          <div className="p-5 border-t border-gray-600 flex items-center gap-2">
             <input value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} className="flex-1 border border-gray-500 text-white rounded p-2" />
             <button onClick={()=>sendMessage()} className="btn btn-secondary">Send</button>
          </div>
      </div>
    )
}

export default Chat