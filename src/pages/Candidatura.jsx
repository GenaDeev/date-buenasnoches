import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function Candidatura() {
    const { id } = useParams();
    const [candidatura, setCandidatura] = useState(null);
    const [exists, setExists] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://filehost.comidolar.com.ar:9090/get/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCandidatura(data);
                    setExists(true);
                } else {
                    setExists(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setExists(false);
            }
        };

        fetchData();
    }, [id]);

    if (!exists) {
        return <NotFound />;
    }

    if (!candidatura) {
        return <div className="text-center mt-8">Cargando...</div>;
    }

    return (
        <main className="px-4 max-w-screen-xl mx-auto pt-[125px]">
            <h1 className="text-3xl">{candidatura.genero === "Masculino" ? "Candidato" : candidatura.genero === "Femenino" ? "Candidata" : "Candidatx"} para <strong className="capitalize">{candidatura.persona}</strong></h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white h-48 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{candidatura.nombre}</h2>
                    <p className="text-gray-600 mb-2"><span className="font-semibold">Edad:</span> {candidatura.edad}</p>
                    <p className="text-gray-600 mb-2"><span className="font-semibold">Teléfono:</span> {candidatura.telefono}</p>
                    <p className="text-gray-600 mb-2"><span className="font-semibold">Instagram:</span> {candidatura.instagram}</p>
                </div>
                <div className="bg-white h-48 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Descripción</h2>
                    <p className="text-gray-600">{candidatura.descripcion}</p>
                </div>
                <div className="bg-white h-48 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Preferencias</h2>
                    <p className="text-gray-600"><span className="font-semibold">Preferencia Sexual:</span> {candidatura.preferenciaSexual}</p>
                    <p className="text-gray-600"><span className="font-semibold">Género:</span> {candidatura.genero}</p>
                </div>
                <div className="bg-white h-48 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Artistas Favoritos</h2>
                    <p className="text-gray-600"><span className="font-semibold">Artista Favorito:</span> {candidatura.artistaFavorito}</p>
                    {candidatura.otrosArtistas.length > 0 ? <p className="text-gray-600"><span className="font-semibold">También le gustan:</span> {candidatura.otrosArtistas}</p> : <></>}
                </div>
                <a className="w-full h-48 gap-2 transition duration-200 flex items-center hover:bg-green-400 hover:text-white text-green-400 justify-center p-4 bg-white rounded-lg shadow-md mb-12" href={"https://wa.me/" + candidatura.telefono}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-inherit" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                    <p className="text-xl font-bold"> Escribirle por WhatsApp</p>
                </a>
                <a className="w-full h-48 gap-2 transition duration-200 flex items-center hover:bg-pink-400 hover:text-white text-pink-400 justify-center p-4 bg-white rounded-lg shadow-md mb-12" href={"https://instagram.com/" + candidatura.instagram}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-inherit" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                    </svg>
                    <p className="text-xl font-bold"> Ir a su IG</p>
                </a>
            </div>
        </main>
    );
}
