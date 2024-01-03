import React from "react";
import { useState } from "react";
import ChatContainer from "./ChatContainer";
import LeftsideUserProfile from "./LeftsideUserProfile";
import RightsideUsersInfo from "./RightsideUsersInfo";
import admin from "./assets/admin.png";
import Profile from "./componants/Profile";
import SearchBar from "./componants/SearchBar";
import UserNavBar from "./componants/UserNavBar";
import callImage from "./assets/Zoom.png";
import BottomChatBar from "./componants/BottomChatBar";
import searchIcon from "./assets/magnifying-glass.png";
import sendImage from "./assets/send.png";
import camImage from "./assets/icons8-camera-50.png";
import docImage from "./assets/paper-pin.png";
import emojiImage from "./assets/happy.png";
import ProfileRight from "./componants/ProfileRight";
import chatImage from "./assets/speech-bubble.png";
const profileData = [
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
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState("0");
  const filteredProfiles = profileData.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProfileClick = (index) => {
    setUser(index);
    console.log("Clicked profile index:", index);
  };

  return (
    <div
      className="position-absolute top-50 start-50 translate-middle"
      style={{ width: "90vw" }}
    >
      <div className="row">
        <div
          className="col-md-3"
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="fixed-div bg-secondary-subtle"
            style={{ height: "80vh" , width:"100%"}}
          >
            <LeftsideUserProfile />
            <SearchBar
              placeholder="Search..."
              searchValue={searchTerm}
              onChange={handleSearchChange}
            />

            <ul
              className="list-style"
              style={{ listStyle: "none", cursor: "pointer", padding: "0px" }}
            >
              {filteredProfiles.map((data, index) => (
                <li key={index} onClick={() => handleProfileClick(index)}>
                  <Profile
                    name={data.name}
                    description={data.description}
                    image={data.image}
                    endText={data.endText}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="fixed-div" style={{ height: "80vh" }}>
            <ChatContainer />
            <UserNavBar
              name={profileData[user].name}
              description="Online"
              image={admin}
              searchIcon={searchIcon}
              callImage={callImage}
            />
            <BottomChatBar
              name={profileData[user].name}
              description="Online"
              image={admin}
              sendImage={sendImage}
              camImage={camImage}
              docImage={docImage}
              emojiImage={emojiImage}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="fixed-div bg-secondary-subtle"
            style={{ height: "80vh" }}
          >
            <SearchBar />
            <ProfileRight
              name={profileData[user].name}
              description="Frontend developer"
              image={admin}
              chatImage={chatImage}
              callImage={callImage}
            />
            <RightsideUsersInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
