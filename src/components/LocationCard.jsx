import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

import IconPlanet from "../assets/icon-planet.svg?react";
import iconInfo from "../assets/icon-info.svg";

import IconButton from "./IconButton";
import FavoriteButton from "./FavoriteButton";

export default function LocationCard({ location }) {
    const { theme } = useTheme();
    const isLight = theme === "light";
    const textStyle = isLight ? "text-secondary" : "text-white";

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="flex flex-col items-center">
            {/* icon planet */}
            <IconPlanet className={`w-12 h-12 z-10 ${textStyle}`} />
            <div className={`card -mt-6 flex flex-col items-center gap-4 ${isLight ? "card-light" : "card-dark"}`}>
                {/* location info */}
                <div className="text-center mt-2">
                    {/* type */}
                    <p className={`truncate ${textStyle}`}>{location.type}</p>
                    {/* name */}
                    <h3 className="text-primary font-bold truncate" title={location.name}>
                        {location.name}
                    </h3>
                </div>
                {/* learn more */}
                <IconButton
                    icon={iconInfo}
                    label="Saiba mais"
                    color={isLight ? "btn-primary" : "btn-tertiary"}
                    onClick={() => alert("Informações sobre localização")}
                />
                {/* favorite button */}
                <FavoriteButton isFavorite={isFavorite} toggleFavorite={() => setIsFavorite(!isFavorite)} />
            </div>
        </div>
    );
}
