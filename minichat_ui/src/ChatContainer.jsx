import React from "react";
import { useSelector } from "react-redux";

const ChatContainer = (props) => {
  const messages = useSelector((state) => state.messages);
  return (
    <div className="m-3" style={{ overflowY: "auto", maxHeight: "80%" }}>
      {messages.messages.map((message, index) => (
        <div
          className="Messagewaladiv"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <p
            key={index}
            className="bg-secondary-subtle border rounded-8 p-2"
            style={{ borderRadius: "16px", maxWidth: "fit-content" }}
          >
            {message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
