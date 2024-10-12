import { Tabbar } from "@telegram-apps/telegram-ui";
import { Icon24User, Icon24Home, Icon24Sparkle } from "@vkontakte/icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./footer.scss";
import { useState } from "react";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = [
    { id: "home", text: "Home", Icon: Icon24Home, path: "/" },
    { id: "calls", text: "Calls", Icon: Icon24Sparkle, path: "/calls" },
    { id: "profile", text: "Profile", Icon: Icon24User, path: "/profile" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  return (
    <footer className="footer">
      <Tabbar>
        {tabs.map(({ id, text, Icon, path }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={id === currentTab}
            onClick={() => {
              setCurrentTab(id);
              navigate(path);
            }}
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
    </footer>
  );
};
