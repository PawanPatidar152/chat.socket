import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import ProfileDisplay from "./ProfileDisplay";

const Profile = (props) => {
  const { isDarkMode } = props;
  const [showModal, setShowModal] = useState(false);
  const [profileName, newProfileName] = useState(props.profileName);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div
      className="d-flex align-items-center justify-content-between  "
      style={{
        padding: "0px 15px",
        width: "100%",
        backgroundColor: props.isActive ?(props.isDarkMode ? "#7A7272" : "#dce2ec") : " "
      }}
    >
      <div className="m-3 d-flex gap-3">
        <div>
          <img
            src={props.image}
            alt="admin image"
            style={{ height: "48px", width:"48px", borderRadius: "50%" }}
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
              <>
                <box-icon
                  type="solid"
                  name="user"
                  size="md"
                  alt="user"
                  color={isDarkMode ? "white" : "black"}
                  onClick={handleShow}
                ></box-icon>
              </>
            </div>
          </>
        )}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile </Modal.Title>
        </Modal.Header>
        <Modal.Body><ProfileDisplay/></Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(Profile);
