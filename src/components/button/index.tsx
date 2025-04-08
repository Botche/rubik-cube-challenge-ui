import { PropsWithChildren } from "react";

type ButtonProps = {
  widthClass?: string;
  heightClass?: string;
  onClick: () => void;
};

export default function Button({
  widthClass = "w-auto",
  heightClass = "h-auto",
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
    <div
      className={`${widthClass} ${heightClass} px-3 py-1 border border-black rounded-md bg-white cursor-pointer select-none`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
