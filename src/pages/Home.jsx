import Card from "../components/Card";

export default function Home() {
    const people = [
        {
            "name": "Ursu",
            "eyes": "green",
            "height": "1,68",
            "hair": "Marron con luces rubias",
            "age": 15,
            "ig": "ursu.em_",
            "gender": "female",
            "likes": "both",
            "description": "Escucha muy buena música. Escribe muy bien y también escucha de maravilla. Le gusta la joda así que la podés colar en cualquier lugar, pero también tiene su lado tímida que nunca te va decir que no a un plan de pelis en casa. Es muy alegre y creativa. Fácil enamorarse! Te puede armar historias o sacarte una sonrisa en cualquier momento por el siempre hecho de sonreír.",
            "url": "/ursu",
            "images": [
                'ursu.webp',
                'ursu1.webp'
            ],
            "id": 1
        },
        {
            "name": "Hele",
            "eyes": "brown",
            "height": "1,61",
            "hair": "Rubiona y largo",
            "age": 15,
            "ig": "hele.figueras",
            "gender": "female",
            "likes": "female",
            "description": "Le gusta y juega al fútbol. Muy buenos gustos en música y variados. Muy dulce y siempre te va a bancar. Muy buen apoyo emocional con mucho humor. Perfecta persona para cucharita. Lo que necesites te lo va a intentar conseguir y es de las personas más abrazables del mundo. Agarrate fuerte porque es un viaje de ida!",
            "url": "/hele",
            "images": [
                'hele.webp',
                'hele1.webp'
            ],
            "id": 2
        },
        {
            "name": "Ivan",
            "eyes": "brown",
            "height": "1,68",
            "hair": "Marron oscuro y corto",
            "age": 15,
            "ig": "_sethells",
            "gender": "male",
            "likes": "both",
            "description": "Interesado en muchas cosas. Medio hacker. Nunca te vas a aburrir, es misterioso. Si necesitabas algo que te sacuda un poco acá tenés. Con carisma hasta los cielos. Te puede hablar de temas que ni sabías que existía y te va a hacer sentir bien siempre. Pensalo bien porque no te vas a querer ir nunca!",
            "url": "/ivan",
            "images": [
                'ivan.webp',
                'ivan1.webp'
            ],
            "id": 3
        },
        {
            "name": "Lola",
            "eyes": "blue",
            "height": "1,52",
            "hair": "Castaño claro",
            "age": 15,
            "ig": "without.lola",
            "gender": "female",
            "likes": "both",
            "description": "Su gusto en música es superior, capaz parezca que tiene mucha confianza pero en realidad es una galletita. Nunca te va a negar una siestita ni mucho menos una salida a dársela en la pera. Te va a cuidar siempre y escuchar por horas. Mucho humor así que prepárate para cagarte de risa. Te puede leer poemas para que te duermas (si es que no se durmió antes). Aunque vivas en la loma del orto se toma 7 colectivos para ir a verte. Olvídate que no la vas a querer dejar ir jamás!",
            "url": "/lolita",
            "images": [
                'loli.webp',
                'loli1.webp'
            ],
            "id": 4
        }
    ]
    return (
        <main className="py-40 px-12 flex flex-col items-center bg-white text-gray-700 space-y-64 sm:space-y-96">
            <section className="flex flex-col gap-12 w-full items-center h-full justify-center">
                <h1 className="p-2 gradient-text font-bold text-6xl md:max-w-[60%] text-center">
                    Admins de
                    <span className="title-gradient"> Comi Buenas Noches</span>
                    🌙
                </h1>
                <h2 className="text-xl">
                    Postulate para ser pareja de algunx de lxs 4 admins de Comi Buenas Noches, Ursu, Hele, Ivan o Lola.
                </h2>
                <a className="transition duration-200 flex flex-col items-center px-8 py-2 bg-gray-200 hover:bg-gray-400 hover:scale-105 active:scale-95 rounded-xl text-gray-200" href="#info">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <p className="text-gray-700 font-bold text-xl">Conocelxs</p>
                </a>
            </section>
            <section id="info" className="flex h-full flex-wrap z-0 gap-4 items-center justify-center py-32">
                {people.map((person) => {
                    return (
                        <Card
                            key={"persona"+person.id} // Añade una key única
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