import React, { useState } from "react";
const Profile = (props) => {
  const [profileName, newProfileName] = useState(props.profileName);
  const [isEditing, setEditing] = useState(false);

  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ padding: "0px 15px" }}
    >
      <div>
        <img
          src={props.image}
          alt="admin image"
          style={{ height: "48px", borderRadius: "50%" }}
        />
      </div>
      <div className="m-4">
        <div>
          {props.name ? (
            <p className="m-0" style={{ fontSize: "17px" }}>
              {props.name}
            </p>
          ) : (
            <p className="m-0" style={{ fontSize: "20px", fontWeight: "600",textWrap:"wrap" , overflow:"auto",visibility: isEditing ? 'hidden' : 'visible'}}>
              {profileName}
            </p>
          )}
        </div>
        <div>
          <p className="m-0" style={{ fontSize: "12px" }}>
            {props.description}
          </p>
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
                      left: "113px",
                      top: "24px",
                    }}
                  />
                  <button onClick={() => setEditing(!isEditing)}>Save</button>
                </>
              ) : (
                <button style={{width:"39px"}}>
                  <img
                    src={props.endTextImage}
                    style={{ height: "20px" }}
                    alt="Edit"
                    onClick={() => setEditing(!isEditing)}
                  />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
