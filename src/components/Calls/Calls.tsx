import {
  List,
  Title,
  Cell,
  Divider,
  Avatar,
  Section,
  Card,
} from "@telegram-apps/telegram-ui";
import { Icon28NotificationWaves } from "@vkontakte/icons";

import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

// Create userData array with name and avatar information
const userData = [
  {
    username: "@rjunc",
    avatarUrl: "https://avatars.githubusercontent.com/u/84640980?v=4",
  },
  {
    username: "@johnDoe",
    avatarUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
  },
  {
    username: "@janeSmith",
    avatarUrl: "https://avatars.githubusercontent.com/u/87654321?v=4",
  },
  {
    username: "@alex",
    avatarUrl: "https://avatars.githubusercontent.com/u/23456789?v=4",
  },
  {
    username: "@maria",
    avatarUrl: "https://avatars.githubusercontent.com/u/98765432?v=4",
  },
];

export const Calls = () => {
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  return (
    <div className="send-tx-form mb-5">
      {wallet && (
        <Title level="1" weight="2" className="text-center">
          Your Fans Call List
        </Title>
      )}
      {wallet ? (
        <div>
          <Section header="Here's the list">
            <List
              style={{
                background: "var(--tgui--secondary_bg_color)",
              }}
            >
              <div
                style={{
                  background: "var(--tgui--bg_color)",
                }}
              >
                {userData.map((user, index) => (
                  <div key={index}>
                    <Cell>
                      <div className="flex justify-between items-center">
                        {/* Left part with index, avatar, and username */}
                        <div className="flex items-center gap-3">
                          <span>{index + 1}</span>
                          <Avatar size={40} src={user.avatarUrl} />
                          <span>{user.username}</span>
                        </div>

                        {/* Right-aligned bell icon */}
                        <div className="flex justify-end">
                          <Icon28NotificationWaves className="telegram-blue" />
                        </div>
                      </div>
                    </Cell>
                    <Divider />
                  </div>
                ))}
              </div>{" "}
            </List>
          </Section>
        </div>
      ) : (
        <Section
          footer="Here's the list of fans with scheduled calls"
          header="Fans Waiting for You!"
        >
          <div className="send-tx-form">
            <button onClick={() => tonConnectUi.openModal()}>
              Connect wallet to view the list 📋👀
            </button>
          </div>
        </Section>
      )}
    </div>
  );
};
