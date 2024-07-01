import { useState } from "react";
import { Link } from "react-router-dom";
import Eye
    from "./Eye";
export default function Card(props) {
    const { name, eyes, height, hair, age, gender, likes, url, images, ig } = props;
    return (
        <article className="card flex flex-col w-[300px] h-[650px] bg-gray-200 hover:bg-gray-300 transition duration-200 justify-start">
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative max-h-[300px] h-56 overflow-hidden rounded-t-lg md:h-96">
                    {
                        images.map((image, index) => (
                            <div key={"slide-" + (index + 1)} className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={image} className="absolute object-cover block w-full h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Imagen número ${index + 1} de ${name}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="p-7 flex flex-col h-full">
                <h3 className="font-bold text-2xl">{name}</h3>
                <div className="physics flex flex-wrap gap-2">
                    <div title={"Altura: " + height} className="hei cursor-pointer hover:bg-gray-200 transition duration-200 w-[48px] h-[48px] flex items-center justify-center text-xl bg-white rounded-xl">{height}</div>
                    <div title={"Ojos: " + eyes} className="eye cursor-pointer hover:bg-gray-200 transition duration-200">
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
                    <div className="likes cursor-pointer hover:bg-gray-200 transition duration-200 p-2 bg-white rounded-xl">
                        Busca {likes === "both" ? "ambos generos" : "mujeres"}
                    </div>
                    <a href={"https://instagram.com/" + ig} target="_blank" rel="noreferrer" className="ig cursor-pointer hover:bg-gray-200 transition duration-200 p-2 bg-white rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path fill="#000" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"/></svg>
                    </a>
                </div>
                <Link className="p-2 mt-auto bg-pink-500 hover:bg-pink-400 hover:scale-105 active:scale-95 transition duration-200 rounded-xl text-white flex items-center gap-2" to={url}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor" />
                    </svg>
                    Enviar solicitud
                </Link>
            </div>

        </article >
    )
}