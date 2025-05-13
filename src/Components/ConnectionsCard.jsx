import { Link } from "react-router"

const ConnectionsCard=({connectionDetails})=>{
   const {firstName,lastName,age,about,gender,skills,photoUrl,_id}=connectionDetails
    return (
        <div className="card card-side w-100 mt-10  border-2 border-b-cyan-300 shadow-sm mx-auto">
  <figure>
    <img className="w-50 h-50"
      src={photoUrl}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{age},{gender}</p>
    {
        skills?.map((skill,index)=>{
          return <p key={index}>{skill}</p>
        })
    }
    <p>{about}</p>
    <Link to={'/chat/'+_id} ><button className="btn btn-primary">Chat</button></Link>
  </div>
</div>
)
}

export default ConnectionsCard

