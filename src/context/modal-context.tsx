import { useState, ReactNode, createContext } from "react";
import { modalIntialValues } from "./initial-values";

interface ModalContext {
  modalOpen: boolean;
  handleModal: (type: string) => void;
  modalType: string;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContext>(modalIntialValues);

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModal = (modal: string) => {
    setModalOpen(true);
    setModalType(modal);
    if (document.body) {
      window.scrollTo({ top: 0 });
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("h-full");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    if (document.body) {
      document.body.classList.remove("overflow-hidden", "h-full");
    }
  };

  return (
    <ModalContext.Provider
      value={{ modalOpen, handleModal, modalType, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
