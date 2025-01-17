import { useState } from "react";

interface DropdownOption {
    label: string;
    link: string;
}

interface DropdownProps {
    label: string;
    options: DropdownOption[];
}

export default function Dropdown({ label, options }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="group flex items-center gap-2 w-full px-4 py-2 rounded-md bg-transparent hover:bg-gray-700 focus:outline-none">
                {label}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform fill-white transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                >
                    <path
                        d="M7.9987 11.3333L12.6654 6H3.33203L7.9987 11.3333Z"
                        fill="currentColor"
                    />
                </svg>
            </button>

            <div
                className={`${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    } absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top-right`}
            >
                <div className="py-1">
                    {options.map((option, index) => (
                        <a
                            key={index}
                            href={option.link}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                        >
                            {option.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
