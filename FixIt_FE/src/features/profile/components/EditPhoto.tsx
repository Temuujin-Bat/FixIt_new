import { useState } from "react";

// Components
import { EditPhotoButton, EditPhotoModal } from "../index";
import { IUSER } from "../../../types";

export default function EditPhoto({ userInfo }: { userInfo: IUSER }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EditPhotoButton
        userInfo={userInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <EditPhotoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        userInfo={userInfo}
      />
    </>
  );
}
