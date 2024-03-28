"use client";

import { useGlobalState } from "@/app/context/GlobalProvider";
import { ChildrenProps } from "@/app/interfaces";

const ModalWrapper = ({ children }: ChildrenProps) => {
  const { closeModal }: any = useGlobalState();

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
