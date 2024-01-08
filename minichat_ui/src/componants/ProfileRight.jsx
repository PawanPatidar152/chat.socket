import React from "react";
import { connect } from "react-redux";

const ProfileRight = (props) => {
  const { isDarkMode } = props;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <div>
        <img
          src={props.image}
          alt="admin image"
          style={{ height: "100px", borderRadius: "50%" }}
        />
      </div>
      <div className="m-4 d-flex flex-column align-items-center justify-content-center">
        <div>
          <h1 className="m-0"> {props.name}</h1>
        </div>
        <div>
          <p className="m-0">{props.description}</p>
        </div>
      </div>
      <div className="w-100 m-2 d-flex align-items-center justify-content-evenly">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <box-icon
            name="message-rounded-dots"
            type="solid"
            style={{ height: "40px" }}
            alt="Chat"
            size="md"
            color={isDarkMode ? "white" : "black"}
          ></box-icon>
          <p>Chat</p>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-column">
          <box-icon
            name="video"
            type="solid"
            size="md"
            alt="Video Calll"
            color={isDarkMode ? "white" : "black"}
          ></box-icon>
          <p>Video Call</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(ProfileRight);
