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
import "boxicons";

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
  {
    name: "User 6",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },
  {
    name: "User 7",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },
  {
    name: "User 8",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
  },
  {
    name: "User 9",
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
    const windowWidth = window.innerWidth;
    const chatContainers = document.getElementById("chatContainer");
    const leftSideChat = document.getElementById("leftSide");
    if (windowWidth <= 687) {
      leftSideChat.style.display = "none";
      chatContainers.style.display = "block";
      chatContainers.style.width = "100%";
      chatContainers.style.position = "initial";
      chatContainers.style.flexBasis = "initial";

      console.log(chatContainers, leftSideChat);
    }
    console.log(chatContainers, leftSideChat);
  };

  return (
    <div style={{ width: "100vw", maxHeight: "100vh  " }} className="d-flex">
      <div
        id="leftSide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexBasis: "20%",
          flexGrow: "1",
          flexShrink: "0",
        }}
      >
        <div
          className="fixed-div "
          style={{ width: "100%", height: "100vh", backgroundColor: "#F7F8FC" }}
        >
          <LeftsideUserProfile />
          <SearchBar
            placeholder="Search..."
            searchValue={searchTerm}
            onChange={handleSearchChange}
          />
          <div style={{ overflow: "scroll", height: "75%" }}>
            <ul
              className="list-style"
              style={{ listStyle: "none", cursor: "pointer", padding: "0px" }}
            >
              {filteredProfiles.map((data, index) => (
                <li
                  key={index}
                  onClick={() => handleProfileClick(index)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#dce2ec")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "")
                  }
                >
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
      </div>
      <div
        className=" d-sm-block border border-secondary"
        id="chatContainer"
        style={{
          display: "none",
          flexBasis: "55%",
          position: "relative",
          flexGrow: "0",
        }}
      >
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
      <div className="d-none d-lg-block" style={{ flexBasis: "25%" }}>
        <div
          className="p-4"
          style={{ height: "100vh", backgroundColor: "#F7F8FC" }}
        >
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
  );
}

export default App;
