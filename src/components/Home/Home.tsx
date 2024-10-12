import { Section, Card, Text } from "@telegram-apps/telegram-ui";
import { Icon32StarsCircleFillViolet } from "@vkontakte/icons";
export const Home = () => {
  return (
    <Section>
      <Card className="m-4">
        <div className="flex flex-col items-center p-4 text-center">
          <Icon32StarsCircleFillViolet />
          <Text size={24} className="mb-2">
            Welcome to ZOUL
          </Text>
          <Text size={18} className="mb-4">
            Monetize Your Influence, Connect with Fans
          </Text>
          <Text className="text-gray-500">
            Easily rent out your time for <br /> one-on-one video calls, chat
            sessions, or virtual hangouts with your dedicated fans. Set your own
            rates, manage your schedule, and grow your personal brand – all
            powered by secure TON blockchain transactions.{" "}
          </Text>
        </div>
      </Card>
    </Section>
  );
};
