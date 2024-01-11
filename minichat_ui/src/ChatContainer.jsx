import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const ChatContainer = ({ isDarkMode }) => {
  const messages = useSelector((state) => state?.messages?.messages);
  const searchTermMessage = useSelector(
    (state) => state?.SearchMessage?.SearchMessage
  );
  console.log("messages",messages);
  console.log("searchTermMessage",searchTermMessage);
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    const newFilteredMessages = messages?.filter((message) =>
      message.toLowerCase().includes(searchTermMessage)
    );
    setFilteredMessages(newFilteredMessages);
  }, [searchTermMessage, messages]);

  return (
    <div className="m-3" style={{ overflowY: "auto", maxHeight: "73vh" }}>
      <ul>
        {filteredMessages.map((message, index) => (
          <div key={index} className="d-flex justify-content-end">
            <p
              className=" border rounded-8 p-2"
              style={{
                borderRadius: "16px",
                maxWidth: "fit-content",
                backgroundColor: isDarkMode ? "#7A7272" : "#dce2ec",
              }}
            >
              {message}
            </p>
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
