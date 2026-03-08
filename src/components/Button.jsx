import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======

function Button({ to, href, children, className, onClick, ...passProps }) {
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
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

<<<<<<< HEAD
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
=======
  return <Comp className={className}>{children}</Comp>;
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
}

export default Button;
