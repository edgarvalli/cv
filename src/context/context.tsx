import { createContext, useState, type ReactNode } from "react";

export type AppContext = {
    lang?: string;
    changeLang: (lang: "es" | "en") => void;
}

export const AppContext = createContext<AppContext | null>(null);

export function AppContextView({ children }: { children?: ReactNode }) {
    const [lang, setLang] = useState<"es" | "en">("es")
    return (
        <AppContext value={{ lang, changeLang: (lang) => setLang(lang) }}>
            {children}
        </AppContext>
    )
}