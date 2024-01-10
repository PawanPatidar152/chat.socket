import React from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const ChatContainer = (props) => {
  const { isDarkMode } = props;
  console.log(isDarkMode)
  const messages = useSelector((state) => state.messages);
  return (
    <div className="m-3" style={{ overflowY: "auto", maxHeight: "73vh"}}>
      {messages.messages.map((message, index) => (
        <div
          className="Messagewaladiv"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <p
            key={index}
            className=" border rounded-8 p-2"
            style={{
              borderRadius: "16px",
              maxWidth: "fit-content",
              backgroundColor: isDarkMode ? "#7A7272" : "#dce2ec"
            }}
          >
            {message}
          </p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(ChatContainer);