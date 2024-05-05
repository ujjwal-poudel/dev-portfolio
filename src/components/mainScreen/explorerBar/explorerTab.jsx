import MainTabs from "./explorerComponents/mainTabs";
import Profile from "./explorerComponents/profile";

export default function ExplorerTab() {
    return (
        <div className="flex flex-col justify-between h-[633px] px-[15px] py-[17px] rounded bg-explorer">
            <MainTabs />
            <Profile />
        </div>
    );
}