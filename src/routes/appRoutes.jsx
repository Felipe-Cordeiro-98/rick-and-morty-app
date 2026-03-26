import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharacterPage from "../pages/CharacterPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharacterPage />} />
            </Routes>
        </BrowserRouter>
    );
}
