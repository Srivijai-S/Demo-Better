import mor from "./asset/betterl.png";
const StartPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-window">
        <div className="chat-header">Better Mortgage</div>
        <div className="chat-body">
          {/* Static chat messages for design only */}
          <div className="chat-message bot">
            Hi, I'm Betsy! What can I help you with?
          </div>
          <div className="chat-message user">
            Can you help me for taking Loans?
          </div>
          <div className="chat-message bot">
            Sure! I’ll need some more information. Please provide your account
            number.
          </div>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
          />
          <button className="send-button">Send</button>{" "}
          <button className="send-button">Need Help Call</button>
          <img className="last" src={mor} alt=""></img>{" "}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
