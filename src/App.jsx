import MainNavigation from "./components/mainNavigation/mainNavigation.jsx";
import SearchBar from "./components/mainScreen/searchBar/searchBar.jsx";
import CloseNavigation from "./components/mainScreen/searchBar/closeNavigation.jsx";
import ExplorerTab from "./components/mainScreen/explorerBar/explorerTab.jsx";
import FilesBar from "./components/mainScreen/filesBar/filesBar.jsx";

function App() {
  return (
    <>
    {/* Top level Navigation */}
      <MainNavigation />

      {/* main screen */}
      <div className="bg-mainBackground bg-no-repeat w-screen bg-height bg-cover bg-center grid place-content-center">

        {/* Floating main screen */}
        <div className="max-w-full w-[950px] h-[675px] border border-[#64646480] rounded-[20px] xl:w-[1200px] backdrop-blur-[28.54px] bg-[#656565]/10 shadow-box">

          {/* Search Bar */}
          <div className="flex flex-row justify-between border-b-[2px] border-[#64646480] px-[15px] py-[6px]">
            <CloseNavigation />
            <SearchBar />
            <div className="invisible"></div>
          </div>

          {/* Content Screen */}
          <div className="flex flex-row">
            <ExplorerTab />
            <FilesBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
