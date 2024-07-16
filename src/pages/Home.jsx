import Card from "../components/Card";
import { people } from "../data/People"
import { setTitle } from "../tools/Utils";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        setTitle("Comi Buenas Noches | Sali con un admin.")
    })

    return (
        <main className="py-20 pt-48 px-8 flex flex-col items-center bg-white text-gray-700 space-y-20 sm:space-y-32 md:space-y-48 lg:space-y-64 xl:space-y-80">
            <section className="flex flex-col gap-8 w-full items-center h-full justify-center text-center">
                <h1 className="p-2 gradient-text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:max-w-[60%]">
                    Admins de
                    <span className="title-gradient"> Comi Buenas Noches</span>
                    🌙
                </h1>
                <h2 className="text-left text-lg sm:text-xl lg:max-w-[50%]">
                Postúlate para ser la Pareja Perfecta de uno de los Administradores de Comi Buenas Noches: ¡Ursu, Hele, Ivan o Lola te Esperan!
                ¿Quieres vivir una experiencia única junto a alguno de nuestros adorables administradores? Esta es tu oportunidad para unirte a Comi Buenas Noches en una nueva y emocionante aventura. Conoce más sobre cada uno de ellos y descubre cuál podría ser tu pareja ideal:
                </h2>
                <a className="transition duration-200 flex flex-col items-center px-6 py-2 bg-gray-200 hover:bg-gray-400 hover:scale-105 active:scale-95 rounded-xl text-gray-200" href="#info">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <p className="text-gray-700 font-bold text-lg sm:text-xl">Conócelo/a</p>
                </a>
            </section>
            <section id="info" className="flex h-full flex-wrap z-0 gap-4 items-center justify-center py-20 sm:py-32">
                {people.map((person) => {
                    return (
                        <Card
                            key={"persona" + person.id} // Añade una key única
                            name={person.name}
                            eyes={person.eyes}
                            height={person.height}
                            hair={person.hair}
                            age={person.age}
                            gender={person.gender}
                            likes={person.likes}
                            description={person.description}
                            url={person.url}
                            images={person.images}
                            ig={person.ig}
                        />
                    );
                })}
            </section>
        </main>

    )
}