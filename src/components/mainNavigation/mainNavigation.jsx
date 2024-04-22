import { navigationItems} from "./mainNavigationItems.js";
import { navigationLogo} from "./mainNavigationItems.js";

function MainNavigation() {
  return (
    <header className="bg-gray-main-nav flex p-3 gap-7 mix-blend-hue m-auto px-10 py-2.5">
      {navigationLogo.map((logo) => (
        <img className="w-4 h-4" key={logo.alt} src={logo.src} alt={logo.alt} />
      ))}
      <nav>
        <ul className="flex gap-7 font-medium text-xs font- font-sf">
          {navigationItems.map((item, index) => (
            <li key={item.name} className={index === 0 ? "text-active font-bold" : "text-inactive"}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
