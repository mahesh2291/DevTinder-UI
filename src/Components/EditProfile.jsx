import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../Util/Url";
import { addUser } from "../Redux/userSlice";

const EditProfile = (props) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(props.user.firstName);
  const [lastName, setLastName] = useState(props.user.lastName);
  const [age, setAge] = useState(props.user.age);
  const [gender, setGender] = useState(props.user.gender);
  const [photoUrl, setPhotoUrl] = useState(props.user.photoUrl);
  const [about, setAbout] = useState(props.user.about);
  const [successToast, setSuccessToast] = useState(false);
  const [error, setError] = useState("");

  const saveProfileData = async () => {
    try {
      const res = await axios.patch(BASE_URL + "/profile/edit", {
        firstName,
        lastName,
        age,
        gender,
        photoUrl,
        about,
      });
      dispatch(addUser(res.data));
      setSuccessToast(true);
      setTimeout(() => {
        setSuccessToast(false);
      }, 3000);
    } catch (err) {
      document.getElementById("my_modal_4").showModal();
      setError(err?.response?.data);
    }
  };

  const dropDownIntitalValues = ["male", "female", "other"];

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 max-w-7xl mx-auto">
      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <div className="card bg-black text-white shadow-xl p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

          {/* Input Fields */}
          <div className="space-y-4">
            <fieldset className="space-y-1">
              <legend className="text-sm font-medium">First Name</legend>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input input-bordered w-full"
              />
            </fieldset>

            <fieldset className="space-y-1">
              <legend className="text-sm font-medium">Last Name</legend>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full"
              />
            </fieldset>

            <fieldset className="space-y-1">
              <legend className="text-sm font-medium">Age</legend>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full"
              />
            </fieldset>

            <fieldset className="space-y-1">
              <legend className="text-sm font-medium">Gender</legend>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn w-full text-left"
                >
                  {gender || "Select Gender"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu bg-base-100 text-black rounded-box w-full mt-1"
                >
                  {dropDownIntitalValues.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => setGender(option)}
                      className="hover:bg-gray-200 px-2 py-1 cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>

            <fieldset className="space-y-1">
              <legend className="text-sm font-medium">Photo URL</legend>
              <input
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="input input-bordered w-full"
              />
            </fieldset>

            <fieldset className="space-y-1">
              <legend className="text-sm font-medium">About</legend>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea textarea-bordered w-full"
                rows={4}
              ></textarea>
            </fieldset>

            <div className="flex justify-center">
              <button onClick={saveProfileData} className="btn btn-success w-full">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl font-bold text-center mb-6">Profile Preview</h1>
        <div className="border border-amber-500 rounded-lg p-4">
          <UserCard
            user={{ firstName, lastName, age, gender, photoUrl, about }}
          />
        </div>
      </div>

      {/* Toast */}
      {successToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success">
            <span>Profile saved successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
