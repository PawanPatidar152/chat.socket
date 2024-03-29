import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/userSlice";
import { connect } from "react-redux";

import { addlogedInUser } from "./redux/loginUsersSlice";
const LoginForm = (props) => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersData.users);

  const [userImage, setUserImageLocal] = useState(null);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userImage: null,
  });

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (isSignUp) {
      setUserData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }));
    } else {
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (userData.password !== userData.confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
      }

      const isEmailRegistered = usersData.some(
        (user) => user.email === userData.email
      );

      if (isEmailRegistered) {
        alert("Email already registered. Please choose a different email.");
        return;
      }

      const uploadedImageDataUrl = await simulateImageUpload(
        userData.userImage
      );
      setUserImageLocal(uploadedImageDataUrl);
      dispatch(addUser({ ...userData, userImage: uploadedImageDataUrl }));
      setIsSignUp(false);
    } else {
      const isValidLogin = usersData.some(
        (user) =>
          user.email === loginData.loginEmail &&
          user.password === loginData.loginPassword
      );

      if (isValidLogin) {
        dispatch(addlogedInUser(loginData));
        props.onLoginFormButtonClick();
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    }
  };

  const handleClear = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userImage: null,
    });
    setLoginData({
      loginEmail: "",
      loginPassword: "",
    });
  };
  return (
    <div className="d-flex justify-content-center w-100  ">
      <form
        className="row g-3 w-50 mt-4 p-4 rounded"
        style={{
          backgroundColor: "rgb(193 195 238)",
          boxShadow: "17px 17px 21px #b49494",
          maxWidth: "600px",
        }}
      >
        {isSignUp ? (
          <div>
            <h4
              className=" font-weight-bold text-capitalize text-primary text-center"
              style={{ fontSize: "40px" }}
            >
              SignUp
            </h4>
            <div className="col-12" style={{ marginBottom: "6px" }}>
              <label className="form-label" style={{ fontSize: "20px" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12" style={{ marginBottom: "6px" }}>
              <label
                htmlFor="inputEmail4"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
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
            <div
              className="col-12"
              style={{ marginBottom: "6px", marginBottom: "6px" }}
            >
              <label
                htmlFor="inputPassword4"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
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
            <div className="col-12" style={{ marginBottom: "6px" }}>
              <label
                htmlFor="confirmPassword"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
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
            <div className="col-12" style={{ marginBottom: "6px" }}>
              <label
                htmlFor="userImage"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                User Image (Attach Photo)
              </label>
              <input
                type="file"
                className="form-control"
                id="userImage"
                name="userImage"
                accept="image/*"
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : (
          <>
            <h4
              className=" font-weight-bold text-capitalize text-primary text-center"
              style={{ fontSize: "44px" }}
            >
              {" "}
              Login{" "}
            </h4>
            <div className="col-12" style={{ marginBottom: "6px" }}>
              <label
                htmlFor="loginEmail"
                className="form-label "
                style={{ fontSize: "20px" }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                name="loginEmail"
                value={loginData.loginEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12" style={{ marginBottom: "6px" }}>
              <label
                htmlFor="loginPassword"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                name="loginPassword"
                value={loginData.loginPassword}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}

        <div
          className="col-12 d-flex "
          style={{
            marginBottom: "6px",
            justifyContent: "flex-end",
            columnGap: "20px",
          }}
        >
          
          <button type="button" class="btn btn-danger" onClick={handleClear}>Clear</button>

          <button type="button" class="btn btn-success" onClick={handleSubmit}> {isSignUp ? "Sign Up" : "Sign In"}</button>

        </div>
        <div className="col-12 mt-2">
          <button
            type="button"
            className="btn btn-link"
            onClick={toggleForm}
            style={{ fontSize: "20px" }}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Need an account? Sign Up"}
          </button>
        </div>
      </form>
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

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
