import React from "react";

const UserNavBar = (props) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ position: "fixed", top: "0", width: "726px" }}
    >
      <div>
        <img
          src={props.image}
          alt="admin image"
          style={{ height: "44px", borderRadius: "50%" }}
        />
      </div>
      <div
        className="m-4 d-flex  align-items-center justify-content-center"
        style={{ columnGap: "40px" }}
      >
        <div>
          <h5 className="m-0"> {props.name}</h5>
        </div>
        <div>
          <p className="m-0" style={{ fontSize: "20px" }}>
            {props.description}
          </p>
        </div>
      </div>
      <div
        className="w-50 m-2 d-flex align-items-center justify-content-end"
        style={{ columnGap: "40px" }}
      >
        <div>
          <img src={props.searchIcon} style={{ height: "30px" }} alt="Search" />
        </div>

        <div>
          <img
            src={props.callImage}
            style={{ height: "40px" }}
            alt="Video Calll"
          />
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;
