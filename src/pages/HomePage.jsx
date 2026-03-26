import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useTheme } from "../contexts/ThemeContext";

import Header from "../components/Header";
import IconButton from "../components/IconButton";

import rickAndMortyLight from "../assets/rick-and-morty-light.png";
import rickAndMortyDark from "../assets/rick-and-morty-dark.png";
import iconMoonLight from "../assets/icon-moon-light.svg";
import iconMoonDark from "../assets/icon-moon-dark.svg";
import iconSun from "../assets/icon-sun.svg";

export default function HomePage() {
    useDocumentTitle("Página Inicial");
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <Header />
            <main className="flex flex-col select-none">
                <section
                    className={`min-h-[calc(100vh-70px)] flex flex-col
                        ${theme === "dark" && "bg-black"}
                    `}
                >
                    {/* container image */}
                    <div className="grow w-full flex justify-center">
                        <img
                            className="max-w-full h-auto object-cover"
                            src={theme === "dark" ? rickAndMortyDark : rickAndMortyLight}
                            alt="Rick and Morty Banner"
                        />
                    </div>
                    {/* container text and buttons */}
                    <div className="w-full flex flex-col justify-center py-4">
                        <div className="flex flex-col gap-2 mb-4">
                            <h2
                                className={`max-xs:text-xl text-2xl text-center font-bold 
                                    ${theme === "dark" && "text-white"}
                                `}
                            >
                                Saiba tudo em um só <span className="text-[#11B0C8]">lugar.</span>
                            </h2>
                            <p
                                className={`max-xs:text-xs text-sm text-center
                                    ${theme === "dark" && "text-white"}
                                `}
                            >
                                Personagens. localizações, episódios e muito mais.
                            </p>
                        </div>
                        <div className="flex justify-center gap-4 mb-4">
                            <IconButton
                                icon={theme === "dark" ? iconMoonLight : iconMoonDark}
                                label="Escuro"
                                color={theme === "dark" && "btn-primary"}
                                onClick={() => toggleTheme("dark")}
                            />
                            <IconButton
                                icon={iconSun}
                                label="Claro"
                                color={theme === "dark" ? "btn-secondary" : "btn-primary"}
                                onClick={() => toggleTheme("light")}
                            />
                        </div>
                        <p className="max-xs:text-xs text-[#11B0C8] text-center">
                            {theme === "dark" ? "Ai sim, Porr#@%&*" : "Wubba Lubba Dub Dub! Cuidado com os olhos."}
                        </p>
                    </div>
                </section>

                <section 
                    className={`min-h-screen 
                        ${theme === "dark" && "bg-[#313234]"}
                    `}>

                </section>
            </main>
        </>
    );
}
