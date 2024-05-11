import { useState, useEffect } from "react";
import { regFiles, workFiles } from "./files";

export default function FilesBar() {

    // State for the main explorer open
    const [mainExplorerOpen, setMainExplorerOpen] = useState(true);
    const [filesOpen, setFilesOpen] = useState("flex flex-col");
    
    // State for work files
    const [workFilesOpen, setWorkFilesOpen] = useState(false);
    const [workFilesSection, setWorkFilesSection] = useState("flex flex-col pl-[15px]");
    
    // state to store background color
    const [bgColor, setBgColor] = useState("");
    const click = color => {
        setBgColor(color);
    }

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

    // Function to change the main explorer open
    const changeMainExplorerOpen = () => {
        setMainExplorerOpen(!mainExplorerOpen);
        changeFilesOpen();
    }

    // Function to change the work files open
    const changeWorkFilesOpen = () => {
        setWorkFilesOpen(!workFilesOpen);
        changeWorkFilesSection();
    }

    // Function to open or close the files and folders
    const changeFilesOpen = () => {
        setFilesOpen(mainExplorerOpen ? "hidden" : "");
    }

    // Function to open or close the work files
    const changeWorkFilesSection = () => {
        setWorkFilesSection(workFilesOpen ? "flex flex-col pl-[15px]" : "hidden");
    }

    // Change the icon based on the main explorer open
    const changeDownIcon = mainExplorerOpen ? "icon-[codicon--chevron-down] pr-[15px]" : "icon-[codicon--chevron-up] pr-[15px]";

    // Change the icon based on the work files open
    const changeDownIconWork = workFilesOpen ? "icon-[codicon--chevron-down] pr-[15px] text-xs h-[20px] pt-[26px]" : "rotate-90 icon-[codicon--chevron-up] pr-[15px] text-xs h-[20px] pt-[26px]";

    return (
        <div className="flex flex-col bg-filestab py-[17px]">
            <div className="flex flex-row justify-between text-[#FFFFFF] items-center text-xs px-[16px]">
                <h1>EXPLORER</h1>
                <span className="icon-[lucide--ellipsis]"></span>
            </div>

            <div className="flex flex-row text-[#FFFFFF] pl-[2px]" onClick={changeMainExplorerOpen}>
                <span className={changeDownIcon}></span>
                <h1 className="text-xs">UJJWAL&apos;S PORTFOLIO</h1>
            </div>

            <div className={filesOpen}>
                <div className="text-[#FFFFFF] text-xs pl-[10px]">
                    <ul>
                        {regFiles.map((file, index) => (
                            <li key={index} className="before:icon-[lucide--file] before:pl-[20px] before:text-[12px] pt-[4px] text-sm" onClick={() => {click("Yellow")}}>
                                {file.title}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center" onClick={changeWorkFilesOpen}>
                            <span className={changeDownIconWork}></span>
                            <span className="icon-[lucide--folder] pr-[20px] text-[12px]"></span>
                            <h1 className="text-sm">Work Files</h1>
                        </div>
                        
                        <div className={workFilesSection}>
                        {workFiles.map((file, index) =>
                        (
                            <span key={index}className="before:icon-[lucide--file] before:pl-[20px] before:text-[12px] pt-[4px] text-sm" onClick={() => {click("yellow")}}>
                                {file.title}</span>
                        ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}