import { useState } from "react";
import { regFiles, workFiles } from "./files";

export default function FilesBar() {

    // State for the main explorer open
    const [mainExplorerOpen, setMainExplorerOpen] = useState(true);
    const [filesOpen, setFilesOpen] = useState("flex");


    // Function to change the main explorer open
    const changeMainExplorerOpen = () => {
        setMainExplorerOpen(!mainExplorerOpen);
        changeFilesOpen();
    }

    // Function to open or close the files and folders
    const changeFilesOpen = () => {
        setFilesOpen(mainExplorerOpen ? "hidden" : "flex pl-[2px]");
    }

    const changeDownIcon = mainExplorerOpen ? "icon-[codicon--chevron-down] pr-[15px]" : "icon-[codicon--chevron-up] icon-[codicon--chevron-down] pr-[15px]";

    return (
        <div className="flex flex-col bg-filestab py-[17px]">
            <div className="flex flex-row justify-between text-[#FFFFFF] items-center text-xs px-[16px]">
                <h1>EXPLORER</h1>
                <span className="icon-[lucide--ellipsis]"></span>
            </div>

            <div className="flex flex-row text-[#FFFFFF] pl-[2px]">
                <span className={changeDownIcon} onClick={changeMainExplorerOpen}></span>
                <h1 className="text-xs">UJJWAL&apos;S PORTFOLIO</h1>
            </div>

            <div className={filesOpen}>
                <ul>
                    {regFiles.map((file, index) => (
                        <li key={index}>
                            {file.title}
                        </li>
                    ))}
                </ul>
                <div className="">
                    {workFiles.map((file, index) => (
                        }
                </div>
            </div>
        </div>
    );
}