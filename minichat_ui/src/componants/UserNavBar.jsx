import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";

import ProfileRight from "./ProfileRight";
const UserNavBar = (props) => {
  const { isDarkMode } = props;
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTermMessage, setsearchTermMessage] = useState("");
  const dispatch = useDispatch();
  const [arrow, setArrow] = useState("none");
  const [size, setIconSize] = useState("");

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 576) {
        setIconSize("20px");
      } else if (windowWidth <= 991) {
        setIconSize("25px");
      } else {
        setIconSize("30px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleArrow = () => {
      setArrow(window.innerWidth <= 767 ? "block" : "none");
    };

    window.addEventListener("resize", handleArrow);
    handleArrow();

    return () => {
      window.removeEventListener("resize", handleArrow);
    };
  }, [setArrow]);

  const handleSearchMessageChange = (event) => {
    setsearchTermMessage(event.target.value);
    dispatch({ type: "SEARCH_MESSAGE", payload: event.target.value });
  };

  return (
    <div
      className="p-1 d-flex align-items-center justify-content-between border-bottom border-secondary"
      style={{ columnGap: "15px" }}
    >
      <div
        className=" d-flex  align-items-center justify-content-center"
        style={{ columnGap: "15px" }}
      >
        <div
          className="arrow-back"
          style={{ display: `${arrow}`, cursor: "pointer" }}
          onClick={() => {
            props.onBackButtonClick();
          }}
        >
          <box-icon
            name="arrow-back"
            color={isDarkMode ? "white" : "black"}
          ></box-icon>
        </div>
        <img
          src={props.image}
          alt="admin image"
          style={{ height: "44px", borderRadius: "50%" }}
        />
        <div>
          <h5 className="m-0"> {props.name}</h5>
        </div>

        <div>
          {props.online ? (
            <box-icon
              name="circle"
              type="solid"
              color="#10d146"
              size="xs"
              ></box-icon>
          ) : (
            <p className="m-0" style={{ fontSize: "20px" }}>
              {props.description}
            </p>
          )}
        </div>
      </div>

      <div
        className="w-50 d-flex align-items-center justify-content-end"
        style={{ columnGap: "10px" }}
      >
        {isSearchVisible && (
          <div style={{ flexGrow: "1" }}>
            <input
              className="form-control border-secondary rounded-pill pr-5 m-8"
              type="search"
              placeholder="Search..."
              id="example-search-input2"
              searchvalue={searchTermMessage}
              onChange={handleSearchMessageChange}
            />
          </div>
        )}
        <div>
          <box-icon
            name="search-alt-2"
            style={{ cursor: "pointer" }}
            size={`${size}`}
            alt="Search"
            color={isDarkMode ? "white" : "black"}
            onClick={toggleSearch}
          ></box-icon>
        </div>
        <div style={{ cursor: "pointer" }}>
          <box-icon
            name="video"
            type="solid"
            size={`${size}`}
            alt="Video Calll"
            color={isDarkMode ? "white" : "black"}
          ></box-icon>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.onDotButtonClick();
          }}
        >
          <box-icon
            name="dots-vertical-rounded"
            color={isDarkMode ? "white" : "black"}
            size={`${size}`}

          ></box-icon>
        </div>
        <Modal show={props.showModal} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Profile User </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProfileRight
              name={props.profileData[props.user].name}
              description="Frontend developer"
              image={props.profileData[props.user].image}
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(UserNavBar);
