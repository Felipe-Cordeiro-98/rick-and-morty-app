import iconHeart from "../assets/icon-heart.svg";
import iconHeartSelected from "../assets/icon-heart-selected.svg";

export default function FavoriteButton({ isFavorite, toggleFavorite, className = "" }) {
    return (
        <button
            className={`cursor-pointer ${className}`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
            <img
                key={isFavorite}
                className={isFavorite ? "animate-pop" : ""}
                src={isFavorite ? iconHeartSelected : iconHeart}
                alt=""
            />
        </button>
    );
}
