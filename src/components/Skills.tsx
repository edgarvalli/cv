import { Icon } from "./Icon";
import skills from "../data/skills";

export function SkillItem({ items }: { items: string[] }) {
    const Item = (props: any) => {
        return (
            <li className="bg-gray-100 p-2 text-center rounded-2xl text-gray-600">
                {props.label}
            </li>
        )
    }
    return (
        <ul className="flex flex-wrap gap-4">
            {items.map((item, i) => (
                <Item label={item}  key={`${item}_${i}`}/>
            ))}
        </ul>
    )
}

export function Skills() {
    return (
        <section className="mt-20" id="skills">
            <h1 className="font-bold text-2xl flex items-center">
                <Icon name="collections_bookmark" className="me-2 text-teal-700" />
                Conocimientos
            </h1>
            <div className="lg:grid lg:grid-cols-3 gap-4">
                {
                    skills.map((sk, i) => {
                        return (
                            <div key={"skill_" + i} className={`bg-white rounded-3xl mb-4 lg:mb-0 shadow-2xs p-4 ${sk.full && "col-span-3"}`}>
                                <h1 className="font-bold text-gray-800 mb-6">{sk.titulo}</h1>
                                <SkillItem items={sk.items as string[]} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}