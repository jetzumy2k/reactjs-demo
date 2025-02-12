import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  type: string;
  isDimissible?: boolean;
}

function Alert({ children, type, isDimissible }: Props) {
  const dismissableClass = isDimissible ? "alert-dismissible fade show" : "";
  return (
    <>
      <div className={`alert ${type} ${dismissableClass}`} role="alert">
        {children}
      </div>
    </>
  );
}

export default Alert;
