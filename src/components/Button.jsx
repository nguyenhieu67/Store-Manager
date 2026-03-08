import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function Button({
  to,
  href,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp
      className={twMerge(
        "wrapper inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-5 py-2.5 font-bold select-none",
        className,
      )}
    >
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className="title">{children}</span>
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
