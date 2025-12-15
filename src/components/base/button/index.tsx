import React, { type JSX } from "react";
import { clx } from "../../../utilities/clx";

type ButtonProps = {
  varient?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyles = "rounded-full";

const varients = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
    sizes: {
      small: "px-5 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-7 py-3 text-lg",
    },
  },
  outlined: {
    primary: "text-primary-500 border border-primary-500",
    secondary: "text-secondary-500 border border-secondary-500",
    sizes: {
      small: "px-4 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-8 py-3 text-lg",
    },
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900",
    sizes: {
      small: "p-1 text-sm",
      medium: "p-2 text-base",
      large: "p-3 text-lg",
    },
  },
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
      className={clx(buttonBaseStyles, varients[varient][color], varients[varient]["sizes"][size])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
