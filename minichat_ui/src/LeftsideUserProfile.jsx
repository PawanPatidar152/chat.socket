import React from "react";
import Profile from "./componants/Profile";
import admin from "./assets/admin.png";
import edit from "./assets/icons8-edit.svg";

const LeftsideUserProfile = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ overflow: "auto" }}
    >
      <Profile
        profileName="Pawan Patidar"
        description="Frontend Developer"
        image={admin}
        endTextImage={edit}
      />
    </div>
  );
};

export default LeftsideUserProfile;
