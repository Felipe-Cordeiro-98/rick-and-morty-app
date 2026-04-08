import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

import IconButton from "./IconButton";
import FavoriteButton from "./FavoriteButton";

import iconInfo from "../assets/icon-info.svg";
import IconMonitorPlay from "../assets/icon-monitor-play.svg?react";

export default function EpisodeCard({ episode }) {
    const { theme } = useTheme();
    const isLight = theme === "light";
    const textStyle = isLight ? "text-secondary" : "text-white";

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className={`card ${isLight ? "card-light" : "card-dark"}`}>
            {/* episode name and session */}
            <div className="flex items-center gap-2 mb-3">
                <IconMonitorPlay className={textStyle} />
                <h3 className={`text-base truncate ${textStyle}`}>
                    {episode.name} | {episode.episode}
                </h3>
            </div>

            <div className="flex justify-between items-center">
                {/* learn more */}
                <IconButton
                    icon={iconInfo}
                    label="Saiba mais"
                    color={isLight ? "btn-primary" : "btn-tertiary"}
                    onClick={() => alert("Informações sobre episódio")}
                />

                {/* favorite button */}
                <FavoriteButton isFavorite={isFavorite} toggleFavorite={() => setIsFavorite(!isFavorite)} />
            </div>
        </div>
    );
}
