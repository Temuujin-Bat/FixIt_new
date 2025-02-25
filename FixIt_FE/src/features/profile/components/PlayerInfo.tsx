import { useState } from "react";

// Components
import { IUSER } from "../../../types";
import { PlayerInfoButton, PlayerInfoModal } from "../index";

export default function PlayerInfo({ userInfo }: { userInfo: IUSER }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PlayerInfoButton
        userInfo={userInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <PlayerInfoModal
        userInfo={userInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
