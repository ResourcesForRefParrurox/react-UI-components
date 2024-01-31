import { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";

//main component
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const ModalEl = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an imp agreement for you to accept</p>
    </Modal>
  );

  //render
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && ModalEl}
    </div>
  );
};

export default ModalPage;
