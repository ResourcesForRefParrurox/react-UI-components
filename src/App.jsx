import { useState } from "react";

import DropDown from "./components/DropDown";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  // options for dropdown
  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];
  return (
    <DropDown options={options} value={selection} onChange={handleSelect} />
  );
}

export default App;
