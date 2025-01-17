import React from 'react';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    href?: string; // New prop for link
    target?: '_blank' | '_self' | '_parent' | '_top'; // Optional target for links
    rel?: string; // Optional rel for links
    variant?: 'primary' | 'secondary' | 'error';
    disabled?: boolean;
    filled?: boolean;
    outlined?: boolean;
    ghost?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    href,
    target,
    rel,
    variant = 'primary',
    filled = true,
    outlined = false,
    ghost = false,
    disabled = false,
}) => {
    const baseStyles = 'px-4 py-2 rounded-full text-base transition-all ease-out 200ms';

    const variantColors = {
        primary: {
            filled: 'bg-blue-600 text-white',
            outlined: 'border border-blue-500 text-blue-500',
            ghost: 'text-blue-500 hover:bg-gray-100',
            disabled: 'bg-gray-200 text-gray-400',
        },
        secondary: {
            filled: 'bg-gray-800 text-white',
            outlined: 'border border-gray-700 text-white hover:bg-gray-600',
            ghost: 'text-white hover:bg-gray-700',
            disabled: 'bg-gray-200 text-gray-400',
        },
        error: {
            filled: 'bg-red-500 text-white',
            outlined: 'border border-red-500 text-red-500',
            ghost: 'text-red-500 hover:bg-gray-100',
            disabled: 'bg-gray-200 text-gray-400',
        },
    };

    let buttonStyle = baseStyles;

    if (ghost) {
        buttonStyle += ` ${variantColors[variant].ghost} bg-transparent`;
    } else if (filled) {
        buttonStyle += ` ${variantColors[variant].filled} bg-opacity-100 hover:bg-opacity-80`;
    } else if (outlined) {
        buttonStyle += ` ${variantColors[variant].outlined} bg-transparent hover:bg-opacity-10`;
    }

    if (disabled) {
        buttonStyle += ` ${variantColors[variant].disabled} cursor-not-allowed`;
    }

    // Conditionally render <a> or <button> based on the presence of href
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`${buttonStyle} inline-block`} // Ensure inline-block for link appearance
                aria-disabled={disabled}
                onClick={(e) => {
                    if (disabled) {
                        e.preventDefault(); // Prevent navigation if disabled
                    }
                }}
            >
                {label}
            </a>
        );
    }

    return (
        <button
            className={buttonStyle}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
