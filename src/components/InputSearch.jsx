import IconSearch from "../assets/icon-search.svg?react";
import { useTheme } from "../contexts/ThemeContext";

export default function InputSearch({ value, onChange, placeholder }) {
    const { theme } = useTheme();
    return (
        <div className="w-full relative">
            <input
                className={`w-full h-10 rounded-3xl pl-4 pr-10
                    ${theme === "light" ? "text-[#313234] bg-white border border-[#313234]" : "text-[#E4F4F4] bg-[#1a1a1a]"}
                `}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                aria-label="search"
            />
            <IconSearch
                className={`w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3
                    ${theme === "light" ? "text-[#313234]" : "text-[#e4f4f4]"}
                `}
            />
        </div>
    );
}
