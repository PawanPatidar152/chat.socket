import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const ChatContainer = ({ isDarkMode }) => {
  const messages = useSelector((state) => state?.messages?.messages);
  const searchTermMessage = useSelector(
    (state) => state?.SearchMessage?.SearchMessage
  );
    const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    const newFilteredMessages = messages?.filter(
      (message) =>
        message.type === "text" &&
        message.content &&
        message.content.toLowerCase().includes(searchTermMessage.toLowerCase())
    );
    setFilteredMessages(newFilteredMessages);
  }, [searchTermMessage, messages]);

  return (
    <div className="m-3" style={{ overflowY: "auto", maxHeight: "73vh" }}>
      <ul>
      {(searchTermMessage.length>0 ? filteredMessages : messages)?.map(
          (message, index) => (
            <div key={index} className="d-flex justify-content-end">
              {message.type === "text" && (
                <div
                  className=" border rounded-8 p-2"
                  style={{
                    borderRadius: "16px",
                    margin:"10px",
                    maxWidth: "fit-content",
                    backgroundColor: isDarkMode ? "#7A7272" : "#dce2ec",
                  }}
                >
                  {message.content}
                </div>
              )}
              {message.type === "image" && (
                <img src={message.content} alt="Image" style={{height:"100px ",width:"200px",margin:"10px"}} />
              )}
            </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(ChatContainer);
