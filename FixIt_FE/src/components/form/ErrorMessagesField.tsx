// Components
import { ErrorField } from "../../components/form";
import { TErrorMessagesField } from "./type";

export default function ErrorMessagesField({
  registerError,
  loginError,
  comparePasswordError,
  emailNotConfirmedError,
  resendVerificationEmail,
  resendLoading,
}: TErrorMessagesField) {
  return (
    <>
      {registerError && <ErrorField text="כתובת מייל כבר נמצאת בשימוש" />}
      {emailNotConfirmedError && (
        <ErrorField
          text="עלייך לאשר את כתובת המייל בכדי להפעיל את החשבון"
          onResend={resendVerificationEmail}
          resendLoading={resendLoading}
        />
      )}
      {loginError && <ErrorField text="מייל או סיסמה אינם תקינים" />}
      {comparePasswordError && <ErrorField text="הסיסמאות אינן זהות" />}
    </>
  );
}
