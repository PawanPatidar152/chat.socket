import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";

const ProfileDisplay = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersData.users);
  const [userImage, setUserImageLocal] = useState(usersData[0].userImage);
  const [userData, setUserData] = useState({
    name: usersData[0].name,
    email: usersData[0].email,
    password: usersData[0].password,
    confirmPassword: usersData[0].confirmPassword,
    userImage: usersData[0].userImage,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedImageDataUrl = await simulateImageUpload(userData.userImage);
    setUserImageLocal(uploadedImageDataUrl);
    const updatedUsersData = usersData.map((user) => ({
      ...user,
      ...userData,
      userImage: uploadedImageDataUrl,
    }));
    dispatch(updateAllUsers(updatedUsersData));
    console.log("Update successful");
  };

  return (
    <div>
      <div className="col-12" style={{marginBottom:"6px"}}>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12" style={{marginBottom:"6px"}}>
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12" style={{marginBottom:"6px"}}>
        <label htmlFor="inputPassword4" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12" style={{marginBottom:"6px"}}>
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12" style={{margin:"6px"}}>
        <div  style={{margin:"16px" , display:"flex" , columnGap:"20px"}}>
        <label htmlFor="userImage" className="form-label">
          User Image
        </label>
        <img src={userImage} alt="User Image"  style={{height:"40px",width:"40px",borderRadius:"50%"}}/>
        </div>
       
        <input
          type="file"
          className="form-control"
          id="userImage"
          name="userImage"
          accept="image/*"
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12" style={{marginBottom:"6px"}}>

      <button type="button" class="btn btn-success" onClick={handleSubmit}>Success</button>
</div>
    </div>
  );
};
const simulateImageUpload = async (imageFile) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(imageFile);
    });
  };
export default ProfileDisplay;
