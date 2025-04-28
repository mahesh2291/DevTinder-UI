const UserCard=({user})=>{
  
const {firstName,lastName,photoUrl,skills,age,about,gender}= user
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
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>)
}

export default UserCard