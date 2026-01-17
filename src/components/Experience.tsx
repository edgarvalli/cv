import { useContext } from "react"
import { Icon } from "./Icon"
import { AppContext } from "../context/context"
import { jobs } from "../data/jobs";

export type Experience = {
    company: string;
    position: string;
    period: string;
    manager: string;
    activities: string[];
}
export function ExperienceCard(props: Experience) {
    const app = useContext(AppContext);
    return (
        <>
            <div className="p-4 border-l border-l-teal-600">
                <div className="bg-white p-4 rounded-2xl shadow-xs">
                    <div className="flex justify-between">
                        <h1 className="font-bold">{props.company}</h1>
                        <span className="bg-gray-200 p-1 ps-2 pe-2 text-gray-500 rounded-2xl">{props.period}</span>
                    </div>
                    <h2 className="text-teal-600">{props.position}</h2>
                    <div className="mt-5 mb-5 flex gap-3">
                        <h4 className="font-bold">
                            {app?.lang === "es" ? "Jefe Directo" : "Manager"}:
                        </h4>
                        <span className="text-gray-600">
                            {props.manager}
                        </span>
                    </div>
                    <ul className="list-disc p-4">
                        {
                            props.activities.map(act => (
                                <li className="text-gray-500" key={act}>{act}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div className="rounded-full w-3 h-3 bg-teal-600 -ms-1.5"></div>
            </div>
        </>
    )
}

export function Experience() {
    const app = useContext(AppContext);
    const jobList = (app?.lang === "es" ? jobs.es : jobs.en) as Experience[];
    return (
        <section className="mt-20" id="experience">
            <h1 className="font-bold text-2xl flex items-center mb-10">
                <Icon name="collections_bookmark" className="me-2 text-teal-700" />
                {app?.lang === "es" ? "Experiencia Profesional" : "Profesional Experience"}
            </h1>
            {jobList.map((job) => <ExperienceCard {...job} key={job.company} />)}
        </section>
    )
}