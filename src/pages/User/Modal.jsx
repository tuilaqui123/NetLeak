import React from "react";

const Modal = ({ isVisible, onClose }) => {
    if(!isVisible) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
            <div className="w-[300px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={()=>onClose()}>X</button>
                <div className="bg-white p-2 rounded">
                    Thông tin cá nhân
                </div>
            </div>

        </div>
    );

};

export default Modal;