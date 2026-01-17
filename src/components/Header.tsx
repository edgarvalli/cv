export function Header() {
    return (
        <header className="h-16 p-4 border-b border-gray-200 bg-background-light overflow-hidden hidden md:flex">
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
                        <a href="#profile">Perfil</a>
                    </li>
                    <li>
                        <a href="#skills">Conocimientos</a>
                    </li>
                    <li>
                        <a href="#experience">Experiencia</a>
                    </li>
                </ul>
                <button
                    className="
                        bg-teal-700 text-white 
                        flex items-center justify-center 
                        cursor-pointer p-2 w-40 rounded-3xl
                        hover:bg-teal-600 active:bg-teal-900 duration-300
                        "
                >
                    <span className="material-symbols-outlined me-2">
                        download
                    </span>
                    Descargar CV
                </button>
            </div>
        </header>
    )
}