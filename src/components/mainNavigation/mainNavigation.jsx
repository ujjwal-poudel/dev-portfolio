import navigationItems from "./mainNavigationItems";
import navigationLogo from "./mainNavigationItems";

function MainNavigation() {
  return (
    <header>
      {navigationLogo.map((logo) => (
        <img  key={logo.alt} src={logo.src} alt={logo.alt} />
      ))}
      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
