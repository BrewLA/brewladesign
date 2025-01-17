import Image from "next/image";
import React from "react";

type FeaturesProps = {
    listItems: string[];  // Array of strings for list items
    alignment: "left" | "right";  // Alignment prop
    heading: string;
    subheading: string;
};

const Features: React.FC<FeaturesProps> = ({ listItems, alignment, heading, subheading }) => {
    // Determine the alignment class based on the prop value
    const alignmentClass = alignment === "right" ? "items-end" : "items-start";

    return (
        <div className="w-[620px] flex flex-row justify-between">
            <div className={`flex flex-col gap-9 ${alignmentClass}`}>
                <div className="flex flex-col gap-3">
                    <h2 className="text-gray-500">{heading}</h2>
                    <h3 className="text-[48px] leading-[115%] tracking-[-0.96px] font-medium">
                        {subheading}
                    </h3>
                </div>
                <ul className="flex flex-col gap-3">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex flex-row gap-3 items-center h-9 text-xl tracking-[-0.50px] text-gray-500">
                            <Image
                                src="/images/star.svg"
                                alt="star icon"
                                width={24}
                                height={36}
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Features;
