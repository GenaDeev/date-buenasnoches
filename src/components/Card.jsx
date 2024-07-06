import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

import Eye
    from "./Eye";
export default function Card(props) {
    const { name, eyes, height, hair, age, gender, likes, url, images, ig } = props;
    return (
        <article className="card flex flex-col w-[300px] h-[700px] bg-gray-200 hover:bg-gray-300 transition duration-200 justify-start">
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <Carousel className="relative max-h-[300px] h-56 overflow-hidden rounded-t-lg md:h-96">
                    {
                        images.map((image, index) => (
                            <img src={image} className="absolute object-cover block w-full h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Imagen número ${index + 1} de ${name}`} />
                        ))
                    }
                </Carousel>
            </div>
            <div className="p-7 flex flex-col h-full">
                <h3 className="font-bold text-2xl">{name}</h3>
                <div className="physics flex flex-wrap gap-2">
                    <div title={"Altura: " + height} className="hei cursor-pointer hover:bg-gray-200 transition duration-200 w-[48px] h-[48px] flex items-center justify-center text-xl bg-white rounded-xl">{height}</div>
                    <div title={"Ojos: " + eyes} className="eye w-12 rounded-xl h-12 p-2 bg-white cursor-pointer hover:bg-gray-200 transition duration-200">
                        <Eye type={eyes} />
                    </div>
                    <div className="hair cursor-pointer hover:bg-gray-200 transition duration-200 p-2 bg-white rounded-xl">
                        Pelo {hair}
                    </div>
                    <div className="age flex flex-col justify-start items-center cursor-pointer hover:bg-gray-200 transition duration-200 w-[48px] h-[48px] bg-white rounded-xl">
                        {age}
                        <span className="p-0 m-0 box-border">años</span>
                    </div>
                    <div title={"Genero: " + gender} className="gender flex items-center justify-center cursor-pointer hover:bg-gray-200 transition duration-200 w-[48px] h-[48px] bg-white rounded-xl">
                        {
                            gender === "female" ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 16v5" />
                                    <path d="M14 16v5" />
                                    <path d="M8 16h8l-2 -7h-4z" />
                                    <path d="M5 11c1.667 -1.333 3.333 -2 5 -2" />
                                    <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2" />
                                    <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 16v5" />
                                    <path d="M14 16v5" />
                                    <path d="M9 9h6l-1 7h-4z" />
                                    <path d="M5 11c1.333 -1.333 2.667 -2 4 -2" />
                                    <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" />
                                    <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                </svg>
                        }
                    </div>
                    <div className="likes h-[48px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition duration-200 p-2 bg-white rounded-xl">
                        Busca {likes === "both" ? "ambos generos" : "mujeres"}
                    </div>
                    <a href={"https://instagram.com/" + ig} target="_blank" rel="noreferrer" className="ig cursor-pointer hover:bg-gray-200 transition duration-200 p-2 bg-white rounded-xl">
                        <img width="32px" height="32px" src="/instagram_icon.webp" />
                    </a>
                </div>
                <Link className="p-2 mt-auto bg-blue-500 hover:bg-blue-400 hover:scale-105 active:scale-95 transition duration-200 rounded-xl text-white flex items-center gap-2" to={url}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="3.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    Abrir perfil
                </Link>
                <Link className="p-2 mt-2 bg-pink-500 hover:bg-pink-400 hover:scale-105 active:scale-95 transition duration-200 rounded-xl text-white flex items-center gap-2" to={"/apply" + url}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" strokeWidth="0" fill="currentColor" />
                    </svg>
                    Enviar solicitud
                </Link>
            </div>

        </article >
    )
}