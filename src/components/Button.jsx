import { Link } from "react-router-dom";

function Button({ to, href, children, className, onClick, ...passProps }) {
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

  return <Comp className={className}>{children}</Comp>;
}

export default Button;
