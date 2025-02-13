import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center p-4 border-b-2 border-gray-200">
            <h1>Harsha</h1>

            <ul className="flex flex-row gap-4">
                <li><Link href='/'>About</Link></li>
                <li><Link href='/'>Projects</Link></li>
                <li><Link href='/'>Contact</Link></li>
                <li><Link href='/'>Resume</Link></li>
            </ul>
        </header>
    )
}