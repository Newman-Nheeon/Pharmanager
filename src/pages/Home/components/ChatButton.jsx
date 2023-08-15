import { TbBrandWechat } from "react-icons/tb";

function ChatButton() {
  return (
    <div className="fixed bottom-4 right-6">
      <button className="flex items-center justify-between  bg-[#27A6FF] text-white py-3 px-6 rounded-md  shadow-md shadow-black hover:scale-110">
        <span>
          <TbBrandWechat size={25} />
        </span>
        Chat with an Expert
      </button>
    </div>
  );
}

export default ChatButton;
