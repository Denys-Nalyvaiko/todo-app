"use client";

import { useEffect } from "react";
import { useGlobalState } from "@/app/context/GlobalProvider";
import { ChildrenProps } from "@/app/interfaces";

const CLOSE_MODAL_KEY = "Escape";

const ModalWrapper = ({ children }: ChildrenProps) => {
  const { closeModal }: any = useGlobalState();

  useEffect(() => {
    const handleCloseKeyModal = (event: KeyboardEvent) => {
      if (event.code === CLOSE_MODAL_KEY) {
        closeModal();
      }
    };

    addEventListener("keydown", handleCloseKeyModal);

    return () => removeEventListener("keydown", handleCloseKeyModal);
  }, [closeModal]);

  return (
    <div className="modal_wrapper">
      <div className="modal_overlay bg-colorBg3/50" onClick={closeModal}></div>
      <div className="modal_content bg-colorBg2 border-gray-500">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
