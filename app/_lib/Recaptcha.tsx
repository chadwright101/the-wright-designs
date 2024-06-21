import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
  onChange: (value: string | null) => void;
}

const Recaptcha = ({ onChange }: RecaptchaProps) => {
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      onChange={onChange}
      className="recaptcha"
    />
  );
};

export default Recaptcha;
