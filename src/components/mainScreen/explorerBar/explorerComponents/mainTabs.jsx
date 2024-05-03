export default function MainTabs() {
  return (
    <div className="flex flex-col">
        {/* Files */}
        <div className="pb-[23px]">
            <span className="icon-[lucide--files] text-[#B7B8B9] w-[30px] h-[30px]"></span>
        </div>
        {/* Branches */}
        <div className="pb-[23px]">
            <span className="icon-[mynaui--git-branch] text-[#37404C] w-[30px] h-[30px]"></span>
        </div>

        {/* Extensions */}
        <div className="pb-[23px]">
            <span className="icon-[lucide--blocks] text-[#37404C] w-[30px] h-[30px]"></span>
        </div>

        {/* Chat bot */}
        <div className="">
            <span className="icon-[lucide--bot-message-square] text-[#37404C] w-[30px] h-[30px]"></span>
        </div>
    </div>
);}