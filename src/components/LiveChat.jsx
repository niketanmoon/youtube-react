import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 200);
    return () => clearInterval(interval);
  });
  return (
    <div className="w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div>
        {
          // Disclaimer: Don't use indexes as keys
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
    </div>
  );
};
export default LiveChat;
