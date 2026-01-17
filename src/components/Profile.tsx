import { Icon } from "./Icon";
import contactList from "../data/contact";
import { useContext } from "react";
import { AppContext } from "../context/context";

export function ContactList() {
    const Item = (props: { text?: string, href?: string, icon?: string }) => {
        return (
            <li className="mb-2">
                <a href={props.href} className="text-gray-600 flex items-center gap-4">
                    <Icon name={props.icon ?? "mail"} />
                    {props.text}
                </a>
            </li>
        )
    }

    return (
        <ul className="mt-4">
            {contactList.map(c => <Item {...c as any} key={c.text} />)}
        </ul>
    )
}

export function Description() {
    const app = useContext(AppContext);

    const className = "text-[14px] text-teal-600 text-start"
    if (app?.lang === "es") return (
        <p className={className}>
            Soy una persona proactiva, responsable y adaptable, con facilidad para desempeñarme en distintos entornos y afrontar nuevos retos.
            <br />
            Destaco por mi capacidad para resolver problemas de forma eficiente y por ser autodidacta, siempre enfocado en aprender y mejorar continuamente.
        </p>
    )
    return (
        <p className={className}>
            I am a proactive, responsible, and adaptable person, with the ability to perform effectively in different environments and face new challenges.
            <br />
            I stand out for my ability to solve problems efficiently and for being self-taught, always focused on learning and continuously improving.
        </p>
    )
}
export function Profile() {
    const app = useContext(AppContext);

    return (
        <section className="mt-15" id="profile">
            <div className="flex flex-col lg:flex-row gap-15">
                <img
                    src="https://github.com/edgarvalli.png"
                    alt="profile"
                    className="h-70 w-70 rounded-3xl mt-5 m-auto"
                />
                <div className="text-center">
                    <h1
                        className="
                            bg-teal-100 text-teal-900 text-[12px]
                            p-0.5 w-full text-center rounded-4xl font-bold
                            "
                    >
                        {app?.lang === "es" ? "INGENIERO ADMINISTRADOR DE SISTEMAS" : "Systems Administration Engineer"}
                    </h1>
                    <h2 className="mt-4 text-2xl font-bold dark:text-white">Edgar Eduardo Valli Muñoz</h2>
                    <ContactList />

                    <Description />
                </div>
            </div>
        </section>
    )
}