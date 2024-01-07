import React from "react";
import { useState, useEffect } from "react";
import ChatContainer from "./ChatContainer";
import LeftsideUserProfile from "./LeftsideUserProfile";
import RightsideUsersInfo from "./RightsideUsersInfo";
import admin from "./assets/admin.png";
import Profile from "./componants/Profile";
import SearchBar from "./componants/SearchBar";
import UserNavBar from "./componants/UserNavBar";
import BottomChatBar from "./componants/BottomChatBar";
import ProfileRight from "./componants/ProfileRight";
import "boxicons";

const profileData = [
  {
    name: "User 1",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: true,
    id: "0",
  },
  {
    name: "User 2",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: true,
    id: "1",
  },
  {
    name: "User 3",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: false,
    id: "2",
  },
  {
    name: "User 4",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: false,
    id: "3",
  },

  {
    name: "User 5",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: true,
    id: "4",
  },
  {
    name: "User 6",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: false,
    id: "5",
  },
  {
    name: "User 7",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: true,
    id: "6",
  },
  {
    name: "User 8",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: false,

    id: "7",
  },
  {
    name: "User 9",
    description: "Last chat massage",
    image: admin,
    endText: "10:20",
    online: true,
    id: "8",
  },
];
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState("0");
  const [activeProfile, setActiveProfile] = useState("0");
  const [leftSideChatFlexBasis, setleftSideChatFlexBasis] = useState("");
  const filteredProfiles = profileData.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProfileClick = (id) => {
    setUser(id);
    setActiveProfile(id);

    const windowWidth = window.innerWidth;
    const chatContainers = document.getElementById("chatContainer");
    const leftSideChat = document.getElementById("leftSide");
    if (windowWidth <= 767) {
      leftSideChat.style.display = "none";
      chatContainers.style.display = "block";
      chatContainers.style.width = "100%";
      chatContainers.style.position = "initial";
      chatContainers.style.flexBasis = "initial";
    }
  };
  const handleFlexBasis = () => {
    const windowWidth = window.innerWidth;
    const chatContainers = document.getElementById("chatContainer");
    const leftSideChat = document.getElementById("leftSide");
    const rightSideChat = document.getElementById("profileRight");
    setleftSideChatFlexBasis(windowWidth < 767 ? "100%" : "20%");

    if (windowWidth <= 767) {
      console.log("====");
    } else {
      console.log("+++");
      leftSideChat.style.display = "block";
      chatContainers.style.display = "none";
      chatContainers.style.width = "100%";
      chatContainers.style.position = "relative";
      rightSideChat.style.display = "none";
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleFlexBasis);
    handleFlexBasis();
    return () => {
      window.removeEventListener("resize", handleFlexBasis);
    };
  }, [window.innerWidth]);

  const handleBackButtonClick = () => {
    const chatContainers = document.getElementById("chatContainer");
    const leftSideChat = document.getElementById("leftSide");
    leftSideChat.style.display = "block";
    chatContainers.style.display = "none";
  };

  const handleDotButtonClick = () => {
    console.log(" triple dot Button Clicked...");
    const profileRightSide = document.getElementById("profileRight");
    profileRightSide.style.display = "block";
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
          flexBasis: leftSideChatFlexBasis,
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
                  key={data.id}
                  onClick={() => handleProfileClick(data.id)}
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
                    isActive={data.id === activeProfile}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className=" d-md-block border border-secondary"
        id="chatContainer"
        style={{
          display: "none",
          flexBasis: "70%",
          position: "relative",
          flexGrow: "1",
        }}
      >
        <ChatContainer />
        <UserNavBar
          name={profileData[user].name}
          online={profileData[user].online}
          image={admin}
          onBackButtonClick={handleBackButtonClick}
          onDotButtonClick={handleDotButtonClick}
        />
        <BottomChatBar name={profileData[user].name} />
      </div>
      <div
        id="profileRight"
        className="d-none d-xl-block"
        style={{ flexBasis: "25%" }}
      >
        <div
          className="p-4"
          style={{ height: "100vh", backgroundColor: "#F7F8FC" }}
        >
          <ProfileRight
            name={profileData[user].name}
            description="Frontend developer"
            image={admin}
          />
          <RightsideUsersInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
