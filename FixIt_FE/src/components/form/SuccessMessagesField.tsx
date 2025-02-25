// Components
import SuccessField from "./SuccessField";
import { TSuccessMessagesField } from "./type";

export default function SuccessMessagesField({
  contactUsSuccess,
}: TSuccessMessagesField) {
  return (
    <>
      {contactUsSuccess && (
        <SuccessField text="תודה! הטופס נשלח בהצלחה. ניצור איתך קשר בהקדם האפשרי." />
      )}
    </>
  );
}
