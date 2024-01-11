import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleTheme } from "./redux/actions";
import ChatContainer from "./ChatContainer";
import LeftsideUserProfile from "./LeftsideUserProfile";
import RightsideUsersInfo from "./RightsideUsersInfo";
import Profile from "./componants/Profile";
import SearchBar from "./componants/SearchBar";
import UserNavBar from "./componants/UserNavBar";
import BottomChatBar from "./componants/BottomChatBar";
import ProfileRight from "./componants/ProfileRight";
import "boxicons";
import LoginForm from "./UserLogin";
import Navigation from "./componants/Navigation";
import { useSelector } from "react-redux";

const profileData = [
  {
    name: "User 1",
    description: "Last chat message",
    image: "https://picsum.photos/200",
    endText: "10:20",
    online: true,
    id: "0",
  },
  {
    name: "User 2",
    description: "Last chat message",
    image: "https://picsum.photos/201",
    endText: "10:20",
    online: true,
    id: "1",
  },
  {
    name: "User 3",
    description: "Last chat message",
    image: "https://picsum.photos/202",
    endText: "10:20",
    online: false,
    id: "2",
  },
  {
    name: "User 4",
    description: "Last chat message",
    image: "https://picsum.photos/203",
    endText: "10:20",
    online: false,
    id: "3",
  },

  {
    name: "User 5",
    description: "Last chat message",
    image: "https://picsum.photos/204",
    endText: "10:20",
    online: true,
    id: "4",
  },
  {
    name: "User 6",
    description: "Last chat message",
    image: "https://picsum.photos/205",
    endText: "10:20",
    online: false,
    id: "5",
  },
  {
    name: "User 7",
    description: "Last chat message",
    image: "https://picsum.photos/206",
    endText: "10:20",
    online: true,
    id: "6",
  },
  {
    name: "User 8",
    description: "Last chat message",
    image: "https://picsum.photos/207",
    endText: "10:20",
    online: false,

    id: "7",
  },
  {
    name: "User 9",
    description: "Last chat message",
    image: "https://picsum.photos/208",
    endText: "10:20",
    online: true,
    id: "8",
  },
];
function App({ isDarkMode, toggleTheme }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState("0");
  const [isLoogedin, setIsLoogedin] = useState(false);
  const [activeProfile, setActiveProfile] = useState("0");
  const [leftSideChatFlexBasis, setleftSideChatFlexBasis] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const filteredProfiles = profileData.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const usersData = useSelector((state) => state.usersData.users);
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

      if (leftSideChat) {
        leftSideChat.style.display = "block";
      }

      if (chatContainers) {
        chatContainers.style.display = "none";
        chatContainers.style.width = "100%";
        chatContainers.style.position = "relative";
      }

      if (rightSideChat) {
        rightSideChat.style.display = "none";
      }
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
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1025) {
      const profileRightSide = document.getElementById("profileRight");

      if (profileRightSide) {
        profileRightSide.style.display = "block";
      }
    } else {
      handleShow();
    }
  };
  const handleToggleButtonClick = () => {
    {
      toggleTheme();
    }
  };
  const handleLoginFormButtonClick = () => {
    setIsLoogedin(true);
  };
  const handleLogOutButtonClick = () => {
    setIsLoogedin(false);
  };
  const onarrowBackProfileButtonClick = () => {
    const profileRightSide = document.getElementById("profileRight");
    console.log(profileRightSide);
    profileRightSide.style.display = "none";
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
      }}
      className="d-flex flex-column justify-content-center
      "
    >
      {isLoogedin ? (
        <>
          <div style={{ height: "6vh" }}>
            <Navigation
              onToggleButtonClick={handleToggleButtonClick}
              onLogOutButtonClick={handleLogOutButtonClick}
            />
          </div>
          <div className="d-flex">
            <div
              id="leftSide"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                flexBasis: leftSideChatFlexBasis,
                flexShrink: "0",
                height: "94vh",
              }}
            >
              <div
                className="fixed-div "
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <LeftsideUserProfile
                  name={usersData[0].name}
                  image={usersData[0].userImage}
                />

                <SearchBar
                  placeholder="Search..."
                  searchValue={searchTerm}
                  onChange={handleSearchChange}
                />
                <div
                  style={{
                    overflow: "scroll",
                    height: "80%",
                    paddingTop: "20px",
                  }}
                >
                  <ul
                    className="list-style"
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      padding: "0px",
                    }}
                  >
                    {filteredProfiles.map((data, index) => (
                      <li
                        key={data.id}
                        onClick={() => handleProfileClick(data.id)}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor = isDarkMode
                            ? "#7A7272"
                            : "#dce2ec")
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
                height: "94vh",
              }}
            >
              <div>
                <UserNavBar
                  name={profileData[user].name}
                  online={profileData[user].online}
                  image={profileData[user].image}
                  onBackButtonClick={handleBackButtonClick}
                  onDotButtonClick={handleDotButtonClick}
                  showModal={showModal}
                  handleClose={handleClose}
                  profileData={profileData}
                  user={user}
                />
              </div>
              <div>
                <ChatContainer />
              </div>
              <div>
                <BottomChatBar name={profileData[user].name} />
              </div>
            </div>
            <div
              id="profileRight"
              style={{ flexBasis: "25%", display: "none" }}
            >
              <div
                className="p-4"
                style={{
                  height: "100%",
                }}
              >
                <div
                  className="arrowBackProfile "
                  style={{cursor:"pointer"}}
                  onClick={() => {
                    onarrowBackProfileButtonClick();
                  }}
                >
                  <box-icon
                    name="arrow-back"
                    color={isDarkMode ? "white" : "black"}
                  ></box-icon>
                </div>

                <ProfileRight
                  name={profileData[user].name}
                  description="Frontend developer"
                  image={profileData[user].image}
                />
                <RightsideUsersInfo />
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoginForm onLoginFormButtonClick={handleLoginFormButtonClick} />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

const mapDispatchToProps = {
  toggleTheme,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
