import React from "react";
const Profile = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div>
        <img
          src={props.image}
          alt="admin image"
          style={{ height: "48px", borderRadius: "50%" }}
        />
      </div>
      <div className="m-4">
        <div>
          <p className="m-0"> {props.name}</p>
        </div>
        <div>
          <p className="m-0">{props.description}</p>
        </div>
      </div>
      <div className="m-2">
        {props.endText ? (
          <p>{props.endText}</p>
        ) : (
          <img src={props.endTextImage} style={{ height: "20px" }} alt="Edit" />
        )}
      </div>
    </div>
  );
};

export default Profile;
