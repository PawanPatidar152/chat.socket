import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import EmojiPicker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
const BottomChatBar = (props) => {
  const { isDarkMode } = props;

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [size, setIconSize] = useState("100px");
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((mediaStream) => {
        setStream(mediaStream);
        setIsCameraOpen(true);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      })
      .catch((error) => {
        console.error("Error accessing the camera:", error);
      });
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    setIsCameraOpen(false);
  };

  const handleEmojiClick = (emojiObject) => {
    setInputValue((prevValue) => prevValue + emojiObject.emoji);
  };

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible((prevVisible) => !prevVisible);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    console.log("Selected files and folders:", files);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD_MESSAGE", payload: inputValue.trim() });
      setInputValue("");
    }
  };

  useEffect(() => {
    if (isCameraOpen && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [isCameraOpen, stream]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 576) {
        setIconSize("20px");
      } else if (windowWidth <= 991) {
        setIconSize("25px");
      } else {
        setIconSize("40px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      dispatch({ type: "ADD_MESSAGE", payload: inputValue.trim() });
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleOutsideClick = (e) => {
    const isOutside =
      !e.target.closest(".camera-container") &&
      !e.target.closest(".emoji-container") &&
      !e.target.closest(".file-container");

    if (isOutside) {
      closeCamera();
      setEmojiPickerVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="d-flex align-items-center w-100 p-1 border-top border-secondary"
      style={{ position: "absolute", bottom: "0px" }}
    >
      <div>
        <box-icon
          name="microphone"
          type="solid"
          alt="Mic"
          color={isDarkMode ? "white" : "black"}
          size={`${size}`}
        ></box-icon>
      </div>

      <input
        className="form-control border-secondary rounded-pill pr-5 m-8"
        style={{ flexGrow: "1" }}
        type="search"
        placeholder="Write something ..."
        id="example-search-input2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => handleKeyPress(e)}
      />

      <div
        className=" m-2 d-flex align-items-center justify-content-end"
        style={{ columnGap: "20px" }}
      >
        <div className="file-container">
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileInputChange}
            multiple
            webkitdirectory="true"
          />

          <box-icon
            name="link-alt"
            style={{ cursor: "pointer" }}
            alt="Documents"
            color={isDarkMode ? "white" : "black"}
            onClick={() => fileInputRef.current.click()}
            size={`${size}`}
          ></box-icon>
        </div>
        <div className="camera-container">
          <box-icon
            name="camera"
            type="solid"
            style={{
              cursor: "pointer",
              border: isCameraOpen ? "2px solid red" : "none",
            }}
            alt="Camera"
            color={isDarkMode ? "white" : "black"}
            size={`${size}`}
            onClick={isCameraOpen ? closeCamera : openCamera}
          ></box-icon>
        </div>
        <div className="emoji-container">
          <box-icon
            name="face"
            type="solid"
            style={{ cursor: "pointer" }}
            alt="Emoji"
            color={isDarkMode ? "white" : "black"}
            size={`${size}`}
            onClick={toggleEmojiPicker}
          ></box-icon>
        </div>
        <div>
          <box-icon
            name="send"
            type="solid"
            style={{ cursor: "pointer" }}
            alt="Send"
            color={isDarkMode ? "white" : "black"}
            size={`${size}`}
            onClick={handleSendMessage}
          ></box-icon>
        </div>
      </div>

      {emojiPickerVisible && (
        <div style={{ position: "absolute", bottom: "60px" }}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      {isCameraOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "50%",
            transform: "translateX(-50%",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            style={{
              width: "420px",
              height: "640px",
              position: "relative",
              bottom: "90vh",
            }}
          />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(BottomChatBar);
