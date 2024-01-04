import React, { useState , useEffect } from "react";

const UserNavBar = (props) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [arrow, setArrow] = useState("none");

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
  
    // Call the handler initially
    handleArrow();
  
    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleArrow);
    };
  }, [setArrow]); 
  

  return (
    <div
      className="p-3 d-flex align-items-center justify-content-between border-bottom border-secondary"
      style={{ columnGap: "15px" }}
    >
      <div className="arrow-back" style={{ display: `${arrow}` }}>
        <box-icon name="arrow-back"></box-icon>
      </div>
      <div
        className=" d-flex  align-items-center justify-content-center"
        style={{ columnGap: "15px" }}
      >
        <img
          src={props.image}
          alt="admin image"
          style={{ height: "44px", borderRadius: "50%" }}
        />
        <div>
          <h5 className="m-0"> {props.name}</h5>
        </div>
        <p className="m-0" style={{ fontSize: "20px" }}>
          {props.description}
        </p>
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
            onClick={toggleSearch}
          ></box-icon>
        </div>
        <div>
          <box-icon
            name="video"
            type="solid"
            size="md"
            alt="Video Calll"
          ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;
