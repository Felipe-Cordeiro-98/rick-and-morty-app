import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="h-17.5 flex justify-between items-center p-4">
            {/* logo */}
            <img className="max-w-36 h-auto" src={logo} alt="Logo Rick and Morty" />

            {/* menu mobile */}
            <div>
                <button
                    className="flex flex-col justify-around items-center w-8 h-8 relative"
                    onClick={() => setShowMenu(!showMenu)}
                    aria-label="Toggle Menu"
                >
                    <div
                        className={`w-full h-1 bg-[#191919] rounded-2xl transition-all duration-300 ${
                            showMenu ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""
                        }`}
                    ></div>

                    <div
                        className={`w-full h-1 bg-[#191919] rounded-2xl transition-all duration-300 ${
                            showMenu ? "opacity-0" : "opacity-100"
                        }`}
                    ></div>

                    <div
                        className={`w-full h-1 bg-[#191919] rounded-2xl transition-all duration-300 ${
                            showMenu ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""
                        }`}
                    ></div>
                </button>
            </div>
        </header>
    );
}
