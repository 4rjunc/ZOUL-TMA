import styles from "./ProfileCreate.module.css";
import "./style.scss";

import {
  SendTransactionRequest,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";

import {
  ColorInput,
  IconContainer,
  Input,
  Section,
  Slider,
} from "@telegram-apps/telegram-ui";
import { Icon24SunLow } from "@telegram-apps/telegram-ui/dist/icons/24/sun_low";

export const ProfileCreate = () => {
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();
  return (
    <>
      {wallet ? (
        <Section header="Create Profile">
          <Input header="Your Name" placeholder="Pewdewpie" />
          <ColorInput />
          <Slider
            step={25}
            before={
              <IconContainer className={styles.sliderIcon}>
                <Icon24SunLow />
              </IconContainer>
            }
            after={
              <IconContainer>
                <Icon24SunLow />
              </IconContainer>
            }
          />
        </Section>
      ) : (
        <button onClick={() => tonConnectUi.openModal()}>
          Connect wallet to send the transaction
        </button>
      )}
    </>
  );
};
