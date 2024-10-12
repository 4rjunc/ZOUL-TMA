import styles from "./ProfileCreate.module.css";
import React, { useCallback, useState } from "react";
import ReactJson from "react-json-view";
import "./style.scss";
import {
  ColorInput,
  IconContainer,
  Input,
  Textarea,
  Section,
  Slider,
  Title,
} from "@telegram-apps/telegram-ui";
import { Icon24SunLow } from "@telegram-apps/telegram-ui/dist/icons/24/sun_low";

import {
  SendTransactionRequest,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";

// In this example, we are using a predefined smart contract state initialization (`stateInit`)
// to interact with an "EchoContract". This contract is designed to send the value back to the sender,
// serving as a testing tool to prevent users from accidentally spending money.
const defaultTx: SendTransactionRequest = {
  // The transaction is valid for 10 minutes from now, in unix epoch seconds.
  validUntil: Math.floor(Date.now() / 1000) + 600,
  messages: [
    {
      // The receiver's address.
      address: "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
      // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
      amount: "5000000",
      // (optional) State initialization in boc base64 format.
      stateInit:
        "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
      // (optional) Payload in boc base64 format.
      payload: "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==",
    },

    // Uncomment the following message to send two messages in one transaction.
    /*
    {
      // Note: Funds sent to this address will not be returned back to the sender.
      address: 'UQAuz15H1ZHrZ_psVrAra7HealMIVeFq0wguqlmFno1f3B-m',
      amount: toNano('0.01').toString(),
    }
    */
  ],
};

export function Profile() {
  const [tx, setTx] = useState(defaultTx);
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  const onChange = useCallback(
    (value: object) =>
      setTx((value as { updated_src: typeof defaultTx }).updated_src),
    [],
  );

  return (
    <div className="send-tx-form mb-5">
      {wallet && (
        <Title level="1" weight="2" className="text-center">
          Your Profile
        </Title>
      )}
      {wallet ? (
        <div>
          {/*<button onClick={() => tonConnectUi.sendTransaction(tx)}>
          Send transaction
        </button>
*/}
          <Section header="Create Profile">
            <Input header="Your Name" placeholder="Pewdewpie" />
            <Textarea header="Bio" placeholder="Tell your story" />
            <Input header="X" placeholder="https://x.com/..." />
            <Input header="Instagram" placeholder="https://instagram.com/..." />
            <Input header="Youtube" placeholder="https://youtube.com/..." />
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
        </div>
      ) : (
        <Section
          footer="Tell your story – add your name, bio, and socials!"
          header="Set up your profile"
        >
          <div className="send-tx-form">
            <button onClick={() => tonConnectUi.openModal()}>
              Connect Your Wallet, Connect With Fans 🎉
            </button>
          </div>
        </Section>
      )}
    </div>
  );
}
