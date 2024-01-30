import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  //state
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //handle click for each items
  const handleClick = (nextIndex) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex === nextIndex) {
        return -1;
      } else return nextIndex;
    });
  };
  //rendering
  const renderedItems = items.map((i, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    //render the items
    return (
      <div key={i.id}>
        <div
          className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {i.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{i.content}</div>}
      </div>
    );
  });

  //render
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
