import { useState } from "react";

// Components
import { IUSER } from "../../../types";
import { UserInfoButton, UserInfoModal } from "../index";

export default function UserInfo({ userInfo }: { userInfo: IUSER }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <UserInfoButton
        userInfo={userInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <UserInfoModal
        userInfo={userInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
