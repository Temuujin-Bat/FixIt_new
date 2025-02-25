import { useState } from "react";

// Components
import { IUSER } from "../../../types";
import DeleteAccountModal from "./DeleteAccountModal";
import DeleteAccountButton from "./DeleteAccountButton";

export default function DeleteAccount({ userInfo }: { userInfo: IUSER }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <DeleteAccountButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <DeleteAccountModal
        userInfo={userInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
