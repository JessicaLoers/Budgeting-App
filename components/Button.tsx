import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler;
  primary?: boolean;
  type?: "button" | "submit";
}

function Button({
  children,
  primary = false,
  type = "button",
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const isPrimary = () => (primary ? "bg-violet-500" : "bg-violet-300");

  const className = `${isPrimary()} px-4 py-2 m-2 rounded-full`;

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
