import { useEffect } from "react";

export function useDocumentTitle(title) {
    useEffect(() => {
        document.title = `Rick and Morty - ${title}`;
    }, [title]);
}
