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
    const textStyle = isLight ? "text-secondary" : "text-white";

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className={`card ${isLight ? "card-light" : "card-dark"}`}>
            {/* character image */}
            <div className="w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-gray-100">
                <img className="w-full h-full object-cover" src={character.image} alt={character.name} />
            </div>

            {/* info */}
            <div className="relative mb-6">
                {/* favorite button */}
                <button
                    className="absolute top-0 right-0"
                    aria-label="Favoritar personagem"
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    <img className="btn-favorite" src={isFavorite ? iconHeartSelected : iconHeart} alt="" />
                </button>
                {/* character name */}
                <h3 className={`text-xl font-bold mb-4 truncate ${textStyle}`}>{character.name}</h3>
                {/* character status */}
                <div>
                    {/* status */}
                    <div className="flex items-center gap-2">
                        <IconPulse />
                        <span className={`${textStyle}`}>{character.status}</span>
                    </div>
                    {/* specie */}
                    <div className="flex items-center gap-2">
                        <IconAlien className={`${textStyle}`} />
                        <span className={`${textStyle}`}>{character.species}</span>
                    </div>
                    {/* origin */}
                    <div className="flex items-center gap-2">
                        <IconPlanet className={`${textStyle}`} />
                        <span className={`${textStyle}`}>{character.origin.name}</span>
                    </div>
                </div>
            </div>

            {/* learn more */}
            <div className="w-full flex justify-end">
                <IconButton
                    icon={iconInfo}
                    label="Saiba mais"
                    color={`${isLight ? "btn-primary" : "btn-tertiary"}`}
                    onClick={() => alert("Informações sobre personagem")}
                />
            </div>
        </div>
    );
}
