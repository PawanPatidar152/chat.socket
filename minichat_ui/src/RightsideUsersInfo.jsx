import React from "react";
import attachments from "./assets/attachments.png";

const RightsideUsersInfo = () => {
  return (
    <div className="container pt-4">
      <div>
        <div>
          <h3>Attachmemts</h3>
        </div>
        <div
          className="d-flex align-items-center  gap-2 m-4 "
          style={{ maxWidth: "170px", overflowX: "auto" }}
        >
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "80px" }}
          />
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "80px" }}
          />
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "80px" }}
          />
          <img
            src={attachments}
            alt="Attachment_Image"
            style={{ height: "80px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightsideUsersInfo;
