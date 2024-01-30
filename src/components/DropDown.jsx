import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  //useEffect to handle click outside
  useEffect(() => {
    const handler = (event) => {
      // if ref is null
      if (!divEl.current) return;

      // if ref does not contain target
      if (!divEl.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // selection toggle handler
  const handleClick = () => {
    //toggle isopen state
    setIsOpen((currentIsopen) => !currentIsopen);
  };

  //option click handler
  const handleOptionClick = (option) => {
    //toggle isopen state set it to close
    setIsOpen(false);
    // what option is clicked
    onChange(option);
  };
  //render list
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //main render
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select an option.."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default DropDown;
