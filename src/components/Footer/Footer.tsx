import { AppRoot, Placeholder, Tabbar } from "@telegram-apps/telegram-ui";
import { Icon24SunLow } from "@telegram-apps/telegram-ui/dist/icons/24/sun_low";
import "./footer.scss";
import { useEffect, useState } from "react";
import { ColorsModal } from "./ColorsModal/ColorsModal";

export const Footer = () => {
  const tabs = [
    { id: "home", text: "Home", Icon: Icon24SunLow },
    { id: "search", text: "Search", Icon: Icon24SunLow },
    { id: "profile", text: "Profile", Icon: Icon24SunLow },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  return (
    <footer className="footer">
      <Tabbar>
        {tabs.map(({ id, text, Icon }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={id === currentTab}
            onClick={() => setCurrentTab(id)}
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
    </footer>
  );
};
