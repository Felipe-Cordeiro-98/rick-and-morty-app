export default function IconButton({ icon, label, color, onClick }) {
    return (
        <button className={`btn ${color}`} onClick={onClick}>
            <img width={24} height={24} src={icon} alt="" />
            {label}
        </button>
    );
}
