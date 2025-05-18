import axios from "axios"
import { BASE_URL } from "../Util/Url"
import { useDispatch } from "react-redux"
import { removeUserFeed } from "../Redux/feedSlice"
import { useState } from "react"

const UserCard = ({ user }) => {
  const [successToast, setSuccessToast] = useState(false)
  const dispatch = useDispatch()

  const { firstName, lastName, photoUrl, skills, age, about, gender, _id } = user

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(`${BASE_URL}/send/request/${status}/${userId}`)
      setSuccessToast(true)
      setTimeout(() => setSuccessToast(false), 3000)
      dispatch(removeUserFeed(userId))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="relative">
      {/* Toast */}
      {successToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-emerald-600 text-white px-5 py-2 rounded-xl shadow-md">
            Profile saved successfully!
          </div>
        </div>
      )}

      {/* Card */}
      <div className="card w-96 bg-zinc-900 text-zinc-100 shadow-xl border border-zinc-800 hover:shadow-2xl transition duration-300 mx-auto rounded-2xl">
        <figure className="h-52 overflow-hidden rounded-t-2xl">
          <img
            src={photoUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold text-white">{firstName} {lastName}</h2>
          <p className="text-sm text-zinc-400">{age} • {gender}</p>
          <p className="text-sm text-zinc-300 mb-3">{about}</p>

          {skills?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-zinc-700 text-zinc-200 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => handleSendRequest("ignored", _id)}
              className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 rounded-md transition"
            >
              Ignore
            </button>
            <button
              onClick={() => handleSendRequest("interested", _id)}
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-md transition"
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
