import { Header } from "./Header";
import { Profile } from "./Profile";
import { Skills } from "./Skills";

export default function Curriculum() {
    return (
        <div className="bg-background-light pb-10">
            <Header />
            <main className="lg:w-[60%] w-[90%] m-auto">
                <Profile />
                <Skills />
            </main>
        </div>
    )
}