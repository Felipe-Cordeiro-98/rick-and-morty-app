import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

import IconButton from "./IconButton";

import iconInfo from "../assets/icon-info.svg";
import IconPulse from "../assets/icon-pulse.svg?react";
import IconAlien from "../assets/icon-alien.svg?react";
import IconPlanet from "../assets/icon-planet.svg?react";

import iconHeart from "../assets/icon-heart.svg";
import iconHeartSelected from "../assets/icon-heart-selected.svg";

export default function CharacterCard({ character }) {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div
            className={`w-full p-4 rounded-xl transition-colors duration-300
                ${isLight ? "bg-[#f9f9f9] hover:bg-[#f1f1f1]" : "bg-[#1a1a1a] hover:bg-[#313234]"}
            `}
        >
            {/* character image */}
            <div className="w-full mb-4 rounded-2xl overflow-hidden">
                <img className="w-full h-auto" src={character.image} alt="Rick Sanchez" />
            </div>

            {/* info */}
            <div className="relative mb-6">
                <button className="absolute top-0 right-0" onClick={() => setIsFavorite(!isFavorite)}>
                    <img
                        className={`transition-transform duration-150 active:scale-125`}
                        src={isFavorite ? iconHeartSelected : iconHeart}
                        alt=""
                    />
                </button>
                <h3 className={`text-xl font-bold mb-4 ${isLight ? "text-[#313234]" : "text-white"}`}>{character.name}</h3>
                <div>
                    <div className="flex items-center gap-2">
                        <IconPulse />
                        <span className={`${isLight ? "text-[#313234]" : "text-white"}`}>{character.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconAlien className={`${isLight ? "text-[#313234]" : "text-white"}`} />
                        <span className={`${isLight ? "text-[#313234]" : "text-white"}`}>{character.species}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconPlanet className={`${isLight ? "text-[#313234]" : "text-white"}`} />
                        <span className={`${isLight ? "text-[#313234]" : "text-white"}`}>{character.origin.name}</span>
                    </div>
                </div>
            </div>

            {/* learn more */}
            <div className="w-full flex justify-end">
                <IconButton
                    icon={iconInfo}
                    label="Saiba mais"
                    color={`${isLight ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => alert("Informações sobre personagem")}
                />
            </div>
        </div>
    );
}
