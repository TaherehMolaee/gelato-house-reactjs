import React, { type JSX, type PropsWithChildren } from "react";

type ModalProps = {
  title: string;
  onClose?: () => void;
} & PropsWithChildren;

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose = () => {},
}): JSX.Element | null => {
  if (!children) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-full w-2xl z-100">
        {/*Header*/}
        <div className="flex relative justify-center items-center">
          <h2 className="text-xl font-bold text-center">{title}</h2>
          <i className="absolute -top-2 left-0 text-3xl cursor-pointer" onClick={onClose}>&times;</i>
        </div>
        {/*Body*/}
        <div className="flex">{children}</div>
      </div>
      <div className="bg-black opacity-50 inset-0 fixed" onClick={onClose} />
    </div>
  );
};

export default Modal;
