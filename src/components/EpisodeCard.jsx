import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import IconButton from "./IconButton";

import iconInfo from "../assets/icon-info.svg";
import iconHeart from "../assets/icon-heart.svg";
import iconHeartSelected from "../assets/icon-heart-selected.svg";

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
                <IconMonitorPlay className={`${textStyle}`} />
                <h3 className={`text-xl font-bold truncate ${textStyle}`}>
                    {episode.name} | {episode.episode}
                </h3>
            </div>

            <div className="flex justify-between items-center">
                {/* learn more */}
                <IconButton
                    icon={iconInfo}
                    label="Saiba mais"
                    color={`${isLight ? "btn-primary" : "btn-tertiary"}`}
                    onClick={() => alert("Informações sobre episódio")}
                />

                {/* favorite button */}
                <button className="" aria-label="Favoritar episódio" onClick={() => setIsFavorite(!isFavorite)}>
                    <img className="btn-favorite" src={isFavorite ? iconHeartSelected : iconHeart} alt="" />
                </button>
            </div>
        </div>
    );
}
