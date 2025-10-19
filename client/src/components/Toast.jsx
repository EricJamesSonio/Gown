import { useEffect } from "react";
import "../css/components/Toast.css";

export default function Toast({ message, onClose, duration = 2000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="toast">
      {message}
    </div>
  );
}
