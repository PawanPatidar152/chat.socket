import React from "react";
import Profile from "./componants/Profile";
import edit from "./assets/icons8-edit.svg";

const LeftsideUserProfile = (props) => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ overflow: "auto" }}
    >
      <Profile
        profileName={props.name}
        description="Frontend Developer"
        image={props.image}
        endTextImage={edit}
      />
    </div>
  );
};

export default LeftsideUserProfile;
