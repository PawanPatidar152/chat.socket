import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import mic from "../assets/icons8-mic-24.png";

const BottomChatBar = (props) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]); // Store sent messages
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

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ position: "fixed", bottom: "12px", width: "726px" }}
    >
      <div>
        <img
          src={mic}
          alt="Mic"
          style={{ height: "44px", borderRadius: "50%" }}
        />
      </div>

      <input
        className="form-control border-secondary rounded-pill pr-5 m-8"
        type="search"
        placeholder="Write something ..."
        id="example-search-input2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div
        className="w-50 m-2 d-flex align-items-center justify-content-end"
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
          <img
            src={props.docImage}
            style={{ height: "40px", cursor: "pointer" }}
            alt="Documents"
            onClick={() => fileInputRef.current.click()} // Trigger the file input when clicking the docImage
          />
        </div>
        <div>
          <img
            src={props.camImage}
            style={{
              height: "40px",
              cursor: "pointer",
              border: isCameraOpen ? "2px solid red" : "none",
            }}
            alt="Camera"
            onClick={isCameraOpen ? closeCamera : openCamera}
          />
        </div>
        <div>
          <img
            src={props.emojiImage}
            style={{ height: "40px", cursor: "pointer" }}
            alt="Emoji"
            onClick={toggleEmojiPicker}
          />
        </div>
        <div>
          <img
            src={props.sendImage}
            style={{ height: "40px", cursor: "pointer" }}
            alt="Send"
            onClick={handleSendMessage} // Send the message when clicking the send image icon
          />
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
          "max-height": "500px",
          right: "10px",
          "overflow-y": "scroll",
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
