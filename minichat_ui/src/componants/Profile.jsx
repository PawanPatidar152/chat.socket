import React, { useState } from "react";
const Profile = (props) => {
  const [profileName, newProfileName] = useState(props.profileName);
  const [isEditing, setEditing] = useState(false);

  return (
    <div
      className="d-flex align-items-center justify-content-between  "
      style={{ padding: "0px 15px", width: "100%" }}
    >
      <div className="m-3 d-flex gap-3">
        <div>
          <img
            src={props.image}
            alt="admin image"
            style={{ height: "48px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ minWidth: "154px" }}>
          {props.name ? (
            <>
              <p className="m-0" style={{ fontSize: "17px" }}>
                {props.name}
              </p>
              <p className="m-0" style={{ fontSize: "12px" }}>
                {props.description}
              </p>
            </>
          ) : (
            <>
              <p
                className="m-0"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  textWrap: "wrap",
                  overflow: "auto",
                  visibility: isEditing ? "hidden" : "visible",
                }}
              >
                {profileName}
              </p>
              <p className="m-0" style={{ fontSize: "12px" }}>
                {props.description}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="m-2">
        {props.endText ? (
          <p style={{ fontSize: "12px" }}>{props.endText}</p>
        ) : (
          <>
            <div>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => newProfileName(e.target.value)}
                    style={{
                      width: "113px",
                      position: "absolute",
                      left: "94px",
                      top: "17px",
                    }}
                  />
                  <button onClick={() => setEditing(!isEditing)}>Save</button>
                </>
              ) : (
                <box-icon
                  type="solid"
                  name="edit-alt"
                  size="md"
                  alt="Edit"
                  onClick={() => setEditing(!isEditing)}
                ></box-icon>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
