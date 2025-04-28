const ConnectionsCard=({connectionDetails})=>{
   const {firstName,lastName,age,about,gender,skills,photoUrl}=connectionDetails
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
        skills?.map((skill)=>{
          return <p>{skill}</p>
        })
    }
    <p>{about}</p>
  </div>
</div>
)
}

export default ConnectionsCard

