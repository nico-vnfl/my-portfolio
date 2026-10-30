import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { children, ...buttonProps } = props;
  return (
    <button
      className="rounded border bg-blue-900 px-4 py-2 text-white hover:bg-gray-800"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
