import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DarkThemeToggle } from 'flowbite-react';
import Dropdown from './Dropdown';

export default function Navbar() {

    const dropdownProducts = [
        { label: "ProdCollab", link: "https://www.rasheemtareq.com/prodcollab" },
        { label: "Bible Affirmations", link: "https://bibleaffirmations.app" },
    ];
    const dropdownContact = [
        { label: "Email", link: "mailto:brewla.design@gmail.com" },
        { label: "Book a Call", link: "tel:+16196465002" },
    ];

    return (
        <nav className="flex flex-row justify-between w-full sticky top-5 max-w-desktop z-50">
            <div className="flex flex-row gap-8 justify-center items-center px-2 rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-800">
                <Link href="/">
                    <Image
                        src="/images/brand.svg"
                        width={48}
                        height={48}
                        alt="Home Link"
                        className="invert"
                    />
                </Link>
                <div className="flex flex-row items-center justify-center gap-6">
                    <Link href="/About">Services</Link>
                    <Dropdown
                        label='Products'
                        options={dropdownProducts}
                    />
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center pl-2 pr-6 py-2 bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl">
                <Dropdown
                    label='Contact'
                    options={dropdownContact}
                />
                <Link href="/About">About</Link>
                {/* <DarkThemeToggle className="bg-gray-50 dark:bg-gray-800" /> */}
                {/* <button className="px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <Link
                        href="/Account"
                    >
                        Log In
                    </Link>
                </button> */}
            </div>
        </nav>
    );
};
