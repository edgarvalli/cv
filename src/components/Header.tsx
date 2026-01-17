import { useContext, type MouseEvent } from "react"
import { AppContext } from "../context/context"

function LangButton(props: { text: string, lang?: string, onPress?: (e: MouseEvent) => void }) {
    return (
        <button
            className={`
                ${props.lang === props.text ? "text-teal-600" : "text-gray-600"}
                cursor-pointer hover:text-teal-300 
                active:text-teal-900 duration-150
                `}
            onClick={props.onPress}>
            {props.text}
        </button>
    )
}

function Lang() {
    const app = useContext(AppContext);

    const handlePress = (lang: "es" | "en") => {
        app?.changeLang(lang);
    }
    return (
        <div>
            <LangButton text="es" onPress={() => handlePress("es")} lang={app?.lang} />
            <span>/</span>
            <LangButton text="en" onPress={() => handlePress("en")} lang={app?.lang} />
        </div>
    )
}
export function Header() {

    const app = useContext(AppContext);

    return (
        <header className="h-16">
            <div className="lg:hidden h-full p-4 flex justify-between">
                <div className="flex items-center">
                    <div className="bg-teal-700 p-1.5 rounded-2xl text-white">
                        <span className="material-symbols-outlined">
                            engineering
                        </span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight ms-4">Edgar Valli</h1>
                </div>
                <Lang />
                <button
                    className="
                        bg-teal-700 text-white 
                        flex items-center justify-center 
                        cursor-pointer p-2 w-40 rounded-3xl
                        hover:bg-teal-600 active:bg-teal-900 duration-300
                        "
                    onClick={() => print()}
                >
                    <span className="material-symbols-outlined me-2">
                        download
                    </span>
                    {app?.lang === "es" ? "Descargar CV" : "Download CV"}
                </button>
            </div>
            <div className="
                fixed w-full p-4 border-b border-gray-200
                bg-background-light overflow-hidden hidden md:flex"
            >
                <div className="flex lg:items-center justify-center  lg:w-[90%] m-auto">
                    <div className="flex items-center">
                        <div className="bg-teal-700 p-1.5 rounded-2xl text-white">
                            <span className="material-symbols-outlined">
                                engineering
                            </span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight ms-4">Edgar Valli</h1>
                    </div>
                    <ul className="flex gap-4 m-auto font-bold text-[14px] text-gray-600">
                        <li>
                            <a href="#profile">
                                {app?.lang === "es" ? "Perfil" : "Profile"}
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                {app?.lang === "es" ? "Conocimientos" : "Core Competencies"}
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                {app?.lang === "es" ? "Experiencia Profesional" : "Profesional Experience"}
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center justify-between gap-6">
                        <Lang />
                        <button
                            className="
                        bg-teal-700 text-white 
                        flex items-center justify-center 
                        cursor-pointer p-2 w-40 rounded-3xl
                        hover:bg-teal-600 active:bg-teal-900 duration-300
                        "
                            onClick={() => print()}
                        >
                            <span className="material-symbols-outlined me-2">
                                download
                            </span>
                            {app?.lang === "es" ? "Descargar CV" : "Download CV"}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}