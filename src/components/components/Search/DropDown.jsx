import React, { useState } from 'react';
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";

const DropdownCheckbox = ({ dropdownName, options, onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [iconDirection, setIconDirection] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIconDirection(isOpen ? false : true);
        onOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        const selectedIndex = selectedOptions.findIndex((selectedOption) => selectedOption.id === option.id);

        if (selectedIndex === -1) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            const updatedOptions = [...selectedOptions];
            updatedOptions.splice(selectedIndex, 1);
            setSelectedOptions(updatedOptions);
        }
    };

    return (
        <div className="pl-3 pt-3 w-full relative inline-block text-left">
            <div className="w-full flex flex-row">
                <button
                    type="button"
                    className="inline-flex justify-between w-[50%] rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none"
                    id={`${dropdownName}-dropdown`}
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={toggleDropdown}
                >
                    {dropdownName}
                    <div>
                        {iconDirection ? <MdArrowDropDownCircle /> : <IoMdArrowDropupCircle />}
                    </div>
                </button>

            </div>
            {isOpen && (
                <div className="absolute mt-2 w-[70%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby={`${dropdownName}-dropdown`}>
                        {options.map((option) => (
                            <div key={option.id} className="flex items-center justify-between px-4 py-2">
                                <label className="flex items-center w-full">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                                        onChange={() => handleOptionClick(option)}
                                    />
                                    <div className="ml-2 text-sm text-gray-700 w-full truncate">{option.label}</div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownCheckbox;