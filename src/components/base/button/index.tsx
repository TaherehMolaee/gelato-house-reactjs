import React, { type JSX } from "react";
import { clx } from "../../../utilities/clx";

type ButtonProps = {
  varient?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyles = "rounded-3xl"

const varients = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white"
  },
  outlined: {
    primary: "text-primary-500 border border-primary-500",
    secondary: "text-secondary-500 border border-secondary-500"
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900"
  }
};

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

// const ButtonFactory = {
//   contained: (props) => (
//     <button className="p-2 bg-red-100 rounded-3xl" {...props}>
//       {props.children}
//     </button>
//   ),
//   outlined: (props) => (
//     <button {...props}>
//       Outlined Button
//     </button>
//   ),
//   text: (props) => (
//     <button {...props}>
//       Text Button
//     </button>
//   ),
// };

export const Button: React.FC<ButtonProps> = ({
  varient = "contained",
  children,
  color = "secondary",
  size = "medium",
  ...props
}): JSX.Element => {
  return (
    <button
      className={clx(
        buttonBaseStyles,
        sizes[size],
        varients[varient][color]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
