// import { useState } from "react";

import Button from "../components/Button";

import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    alert("hi");
  };
  return (
    <>
      <div>
        <Button primary outline rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          click-me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload /> download
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoDatabase />
          storage
        </Button>
      </div>
      <div>
        <Button warning>Hi-there</Button>
      </div>
      <div>
        <Button success>Hi-there</Button>
      </div>
    </>
  );
}

export default ButtonPage;
