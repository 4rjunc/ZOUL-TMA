import { TonConnectButton } from "@tonconnect/ui-react";
import "./header.scss";

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center">
      <span className="telegram-blue mt-3">ZOUL😼</span>
      <div>
        <TonConnectButton />
      </div>
    </header>
  );
};
