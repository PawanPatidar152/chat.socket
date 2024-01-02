import React from "react";
const ProfileRight = (props) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <div>
        <img
          src={props.image}
          alt="admin image"
          style={{ height: "100px", borderRadius: "50%" }}
        />
      </div>
      <div className="m-4 d-flex flex-column align-items-center justify-content-center">
        <div>
          <h1 className="m-0"> {props.name}</h1>
        </div>
        <div>
          <p className="m-0">{props.description}</p>
        </div>
      </div>
      <div className="w-100 m-2 d-flex align-items-center justify-content-evenly">
        <div>
          <img src={props.chatImage} style={{ height: "40px" }} alt="Chat" />
          <p>Chat</p>
        </div>

        <div>
          <img
            src={props.callImage}
            style={{ height: "40px" }}
            alt="Video Calll"
          />
          <p>Video Call</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileRight;