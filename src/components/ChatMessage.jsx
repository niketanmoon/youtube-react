import userAvatar from "../assets/img/user-avatar.png";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8" alt="user" src={userAvatar} />
      <span className="font-bold px-1">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
