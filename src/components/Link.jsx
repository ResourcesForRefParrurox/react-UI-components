import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

// main code
const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  //classes
  const classes = classNames(
    "text-blue-500 hover:text-blue-800",
    className,
    currentPath === to && activeClassName,
    "cursor-pointer"
  );

  //handle click
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
