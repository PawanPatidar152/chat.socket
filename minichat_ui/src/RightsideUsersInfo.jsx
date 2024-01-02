import React from "react";
import SearchBar from "./componants/SearchBar";
import ProfileRight from "./componants/ProfileRight";
import admin from "./assets/admin.png";
import chatImage from "./assets/speech-bubble.png";
import callImage from "./assets/Zoom.png";
import attachments from "./assets/attachments.png";

const RightsideUsersInfo = () => {
  return (
    <div className="container pt-4">
      <SearchBar />
      <ProfileRight
        name="Pawan Patidar"
        description="Frontend developer"
        image={admin}
        chatImage={chatImage}
        callImage={callImage}
      />
      <div>
        <div>
          <h3>Attachmemts</h3>
        </div>
        <div className="d-flex align-items-center justify-content-evenly m-4 ">
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "60px" }}
          />
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "60px" }}
          />
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "60px" }}
          />
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "60px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightsideUsersInfo;
