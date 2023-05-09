import { toast } from "react-hot-toast";
import "./toast.css";
import { Check } from "react-feather";

export function customToast(text: string) {
  toast(<ToastContent text={text} />, {
    duration: 3000,
    position: "bottom-center",
    className: "toast",
    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
}

type Props = {
  text: string;
};

function ToastContent({ text }: Props) {
  return (
    <div className="toast__content">
      <div className="toast__icon">
        <Check size={14} strokeWidth={4} />
      </div>
      <div className="toast__text"> {text} </div>
    </div>
  );
}
