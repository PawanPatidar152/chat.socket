import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import mic from "../assets/icons8-mic-24.png";

const BottomChatBar = (props) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]); // Store sent messages
  const [size, setIconSize] = useState("100px");

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
    // You can access the selected files and folders in the "files" array
    console.log("Selected files and folders:", files);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputValue.trim()]);
      setInputValue(""); // Clear the input after sending
    }
  };

  // Ensure that the video element is updated when isCameraOpen changes
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

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call the handler initially to set the initial icon size
    handleResize();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div
      className="d-flex align-items-center w-100 p-3 border-top border-secondary"
      style={{ position: "absolute", bottom: "0px" }}
    >
      <div>
        <box-icon
          name="microphone"
          type="solid"
          alt="Mic"
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
      />

      <div
        className=" m-2 d-flex align-items-center justify-content-end"
        style={{ columnGap: "20px" }}
      >
        <div>
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
            onClick={() => fileInputRef.current.click()}
            size={`${size}`}
          ></box-icon>
        </div>
        <div>
          <box-icon
            name="camera"
            type="solid"
            style={{
              cursor: "pointer",
              border: isCameraOpen ? "2px solid red" : "none",
            }}
            alt="Camera"
            size={`${size}`}
            onClick={isCameraOpen ? closeCamera : openCamera}
          ></box-icon>
        </div>
        <div>
          <box-icon
            name="face"
            type="solid"
            style={{ cursor: "pointer" }}
            alt="Emoji"
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
        <div style={{ position: "absolute", top: "60px" }}>
          <video
            ref={videoRef}
            autoPlay
            style={{
              width: "620px",
              height: "640px",
              position: "relative",
              bottom: "600px",
            }}
          />
        </div>
      )}

      {/* Display sent messages */}
      <div
        style={{
          position: "absolute",
          top: "-500px",
          right: "10px",
          maxHeight: "500px",
          right: "10px",
          overflowY: "scroll",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-secondary-subtle border rounded-8 p-2 m-1"
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomChatBar;
