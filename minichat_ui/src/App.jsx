import React from "react";
import ChatContainer from "./ChatContainer";
import LeftsideUserProfile from "./LeftsideUserProfile";
import RightsideUsersInfo from "./RightsideUsersInfo";

function App() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle" style={{"width":"90vw"}}>
      <div className="row">
        <div className="col-md-3">
          <div
            className="fixed-div bg-secondary-subtle"
            style={{ height: "80vh" }}
          >
            <LeftsideUserProfile />
          </div>
        </div>
        <div className="col-md-6">
          <div className="fixed-div bg-red" style={{ height: "80vh" }}>
            <ChatContainer />
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="fixed-div bg-secondary-subtle"
            style={{ height: "80vh" }}
          >
            <RightsideUsersInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
