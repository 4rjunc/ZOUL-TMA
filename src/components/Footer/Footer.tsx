import { Tabbar } from "@telegram-apps/telegram-ui";
import { Icon24User, Icon24Home, Icon24Sparkle } from "@vkontakte/icons";
import "./footer.scss";
import { useState } from "react";

export const Footer = () => {
  const tabs = [
    { id: "home", text: "Home", Icon: Icon24Home },
    { id: "calls", text: "Calls", Icon: Icon24Sparkle },
    { id: "profile", text: "Profile", Icon: Icon24User },
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
