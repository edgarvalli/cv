import { Icon } from "./Icon";
import contactList from "../data/contact";

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
export function Profile() {
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
                            p-0.5 w-80 text-center rounded-4xl font-bold
                            "
                    >INGENIERO ADMINISTRADOR DE SISTEMAS</h1>
                    <h2 className="mt-4 text-2xl font-bold">Edgar Eduardo Valli Muñoz</h2>
                    <ContactList />

                    <p className="text-[14px] text-teal-600 text-wrap">
                        Soy una persona proactiva, responsable y adaptable, con facilidad para desempeñarme en distintos entornos y afrontar nuevos retos.
                        <br />
                        Destaco por mi capacidad para resolver problemas de forma eficiente y por ser autodidacta, siempre enfocado en aprender y mejorar continuamente.
                    </p>
                </div>
            </div>
        </section>
    )
}