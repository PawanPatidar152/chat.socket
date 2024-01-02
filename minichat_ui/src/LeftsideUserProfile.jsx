import React from "react";
import Profile from "./componants/Profile";
import admin from "./assets/admin.png";
import edit from "./assets/edit.png";
import SearchBar from "./componants/SearchBar";
const profileData = [
  {
    name: "Pawan Patidar",
    description: "Frontend Developer",
    image: admin,
    endTextImage: edit,
    endText: "Edit",
  },
  {
    name: "User 1",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },
  {
    name: "User 2",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },
  {
    name: "User 3",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },
  {
    name: "User 4",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },

  {
    name: "User 5",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },
];

const LeftsideUserProfile = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {profileData.map((data, index) => (
        <React.Fragment key={index}>
          <Profile
            key={index}
            name={data.name}
            description={data.description}
            image={data.image}
            endTextImage={data.endTextImage}
            endText={data.endText}
          />
          {index === 0 && <SearchBar placeholder="Search..." />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LeftsideUserProfile;
