import { useDocumentTitle } from "../hooks/useDocumentTitle";

import Header from "../components/Header";
import IconButton from "../components/IconButton";

import rickAndMortyLight from "../assets/rick-and-morty-light.png";
import rickAndMortyDark from "../assets/rick-and-morty-dark.png";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export default function HomePage() {
    useDocumentTitle("Página Inicial");

    return (
        <>
            <Header />
            <main className="flex flex-col">
                <section className="min-h-[calc(100dvh-70px)] flex flex-col">
                    {/* container image */}
                    <div className="grow w-full flex justify-center">
                        <img
                            className="max-w-full h-auto object-cover"
                            src={rickAndMortyLight}
                            alt="Rick and Morty Banner"
                        />
                    </div>
                    {/* container text and buttons */}
                    <div className="w-full flex flex-col justify-center py-4">
                        <div className="flex flex-col gap-2 mb-4">
                            <h2 className="max-xs:text-xl text-2xl text-center font-bold">
                                Saiba tudo em um só <span className="text-[#11B0C8]">lugar.</span>
                            </h2>
                            <p className="max-xs:text-xs text-sm text-center">
                                Personagens. localizações, episódios e muito mais.
                            </p>
                        </div>
                        <div className="flex justify-center gap-4 mb-4">
                            <IconButton 
                                icon={iconMoon} 
                                label="Escuro" 
                                onClick={() => alert("Escuro")} 
                            />
                            <IconButton
                                icon={iconSun}
                                label="Claro"
                                color="btn-primary"
                                onClick={() => alert("Claro")}
                            />
                        </div>
                        <p className="max-xs:text-xs text-[#11B0C8] text-center">
                            Wubba Lubba Dub Dub! Cuidado com os olhos.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
