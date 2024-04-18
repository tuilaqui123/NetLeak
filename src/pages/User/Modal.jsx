import React from "react";
import {
    CloseOutlined,
  } from "@ant-design/icons";

const Modal = ({ isVisible, onClose, children }) => {
    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
            <div className="w-[500px] flex flex-col">
                <div className="bg-white p-2 rounded-lg relative">
                    <button
                        className="text-black text-xl absolute top-2 right-5"
                        onClick={() => onClose()}
                    >
                        <CloseOutlined/>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );

};

export default Modal;