import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.scss";

const ModalComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const customStyles: Modal.Styles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        <Image
          src="/burger-menu-opt.svg"
          alt="Menu"
          className={styles.burgerMenu}
          width={32}
          height={32}
        />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h1>Modal Content</h1>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};
export default ModalComponent;
