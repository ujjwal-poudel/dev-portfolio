import React from "react";
import { navigationItems} from "./mainNavigationItems.js";
import { navigationLogo} from "./mainNavigationItems.js";

function MainNavigation() {
  return (
    <header className="bg-gray-800 flex p-3 gap-5">
      {navigationLogo.map((logo) => (
        <img  key={logo.alt} src={logo.src} alt={logo.alt} />
      ))}
      <nav>
        <ul className="flex text-white gap-3">
          {navigationItems.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
