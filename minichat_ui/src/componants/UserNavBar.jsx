import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const UserNavBar = (props) => {
  const { isDarkMode } = props;
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [arrow, setArrow] = useState("none");
  const [dot, setDot] = useState("none");

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    const handleArrow = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setArrow("block");
      } else {
        setArrow("none");
      }
    };
    window.addEventListener("resize", handleArrow);

    handleArrow();

    return () => {
      window.removeEventListener("resize", handleArrow);
    };
  }, [setArrow]);

  useEffect(() => {
    const handleDot = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1199) {
        setDot("block");
      } else {
        setDot("none");
      }
    };
    window.addEventListener("resize", handleDot);

    handleDot();

    return () => {
      window.removeEventListener("resize", handleDot);
    };
  }, [setDot]);

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
          style={{ display: `${arrow}` }}
          onClick={() => {
            props.onBackButtonClick();
          }}
        >
          <box-icon
            name="arrow-back"
            color={isDarkMode ? "white" : "black"}
          ></box-icon>{" "}
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
              searchValue={props.searchValue}
              onChange={props.onChange}
            />
          </div>
        )}
        <div>
          <box-icon
            name="search-alt-2"
            style={{ cursor: "pointer" }}
            size="md"
            alt="Search"
            color={isDarkMode ? "white" : "black"}
            onClick={toggleSearch}
          ></box-icon>
        </div>
        <div>
          <box-icon
            name="video"
            type="solid"
            size="md"
            alt="Video Calll"
            color={isDarkMode ? "white" : "black"}
          ></box-icon>
        </div>
        <div
          style={{ display: `${dot}` }}
          onClick={() => {
            props.onDotButtonClick();
          }}
        >
          <box-icon
            name="dots-vertical-rounded"
            color={isDarkMode ? "white" : "black"}
          ></box-icon>{" "}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(UserNavBar);
