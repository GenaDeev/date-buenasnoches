import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { people } from '../data/People'
import NotFound from './NotFound'
import Eye from "../components/Eye";
import MusicPlayer from "../components/MusicPlayer";
import { capitalizeFirstLetter, setTitle } from "../tools/Utils";
import { CookiesProvider, useCookies } from 'react-cookie'

Modal.setAppElement('#root'); // Necesario para accesibilidad

export default function PersonaProfile() {
    const { persona } = useParams();
    const personaData = people.find(person => person.url === `/${persona}`);
    const [userLikes, setUserLikes] = useState(false);
    const [likes, setLikes] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cookies, setCookie] = useCookies(['likes-ursu', 'likes-lola', 'likes-ivan', 'likes-hele']);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const toggleLike = () => {
        const newLikeState = !userLikes;
        setUserLikes(newLikeState);
        // Guardar el estado de like en las cookies
        setCookie(`likes-${personaData.name.toLowerCase()}`, newLikeState, { path: '/' });

        // Lógica para enviar o eliminar like (aquí iría tu código existente)
        if (newLikeState) {
            addLike();
        } else {
            deleteLike();
        }
        fetchLikes();
    };

    const fetchLikes = async () => {
        try {
            const response = await fetch(`https://filehost.comidolar.com.ar:9090/likes/${personaData.name.toLowerCase()}`);
            if (response.ok) {
                const data = await response.json();
                setLikes(data.likes);
            } else {
                console.error('Error fetching likes')
            }
        } catch (error) {
            console.error("Error fetching likes:", error);
            setExists(false);
        }
    }

    const addLike = async () => {
        try {
            const response = await fetch(`https://filehost.comidolar.com.ar:9090/likes/${personaData.name.toLowerCase()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error adding like');
            }

            const data = await response.json();
            setLikes(data.likes);
        } catch (error) {
            console.error('Error adding like:', error);
        }
    };

    const deleteLike = async () => {
        try {
            const response = await fetch(`https://filehost.comidolar.com.ar:9090/likes/${personaData.name.toLowerCase()}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error deleting like');
            }

            const data = await response.json();
            setLikes(data.likes);
        } catch (error) {
            console.error('Error deleting like:', error);
        }
    };

    useEffect(() => {
        const title = "Perfil de " + capitalizeFirstLetter(persona) + ' | Comi Buenas Noches'
        setTitle(title)
    }, [persona])

    useEffect(() => {
        fetchLikes()
    })
    
    useEffect(() => {
        setUserLikes(cookies[`likes-${personaData.name.toLowerCase()}`]);
    }, [personaData.name, cookies]);

    if (!personaData) {
        return <NotFound />;
    }

    return (
        <section className="relative pt-36 pb-24 bg-white">
            <img src="https://pagedone.io/asset/uploads/1705471739.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60" />
            <div className="w-full mx-auto md:px-8 px-20">
                <div className="flex items-center justify-center relative z-1 mb-2.5">
                    <img src={personaData.images[0]} alt="user-avatar-image" onClick={openModal} className="hover:scale-105 transition duration-200 shadow-xl hover:shadow-2xl border-4 border-solid border-white rounded-full object-cover w-[162px] h-[162px] cursor-pointer" />
                </div>
                <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                    <ul className="flex items-center gap-5">
                        <li> <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5 14.0902L7.5 14.0902M2.5 9.09545V14.0902C2.5 15.6976 2.5 16.5013 2.98816 17.0006C3.47631 17.5 4.26198 17.5 5.83333 17.5H14.1667C15.738 17.5 16.5237 17.5 17.0118 17.0006C17.5 16.5013 17.5 15.6976 17.5 14.0902V10.9203C17.5 9.1337 17.5 8.24039 17.1056 7.48651C16.7112 6.73262 15.9846 6.2371 14.5313 5.24606L11.849 3.41681C10.9528 2.8056 10.5046 2.5 10 2.5C9.49537 2.5 9.04725 2.80561 8.151 3.41681L3.98433 6.25832C3.25772 6.75384 2.89442 7.0016 2.69721 7.37854C2.5 7.75548 2.5 8.20214 2.5 9.09545Z"
                                    stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            <span className="font-medium text-base leading-7 text-gray-900">Comi Buenas Noches</span>
                        </Link>
                        </li>
                        <li> <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20"
                                fill="none">
                                <path d="M4.12567 1.13672L1 18.8633" stroke="#E5E7EB" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                            <span className="font-medium text-base leading-7 text-gray-400">Perfil</span>
                        </Link>
                        </li>
                        <li><button className="flex items-center gap-2 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20"
                                fill="none">
                                <path d="M4.12567 1.13672L1 18.8633" stroke="#E5E7EB" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                            <span className="font-medium text-base leading-7 text-gray-400 capitalize">{personaData.name}</span>
                            <span
                                className="rounded-full py-1.5 px-2.5 bg-indigo-50 flex items-center justify-center font-medium text-xs text-green-600">Nuevo</span>
                        </button>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <Link to={"/aplicar/" + persona}
                            className="flex items-center gap-2 justify-center rounded-full border border-solid border-pink-600 bg-pink-600 py-3 px-4 text-sm font-semibold text-white whitespace-nowrap shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-pink-700 hover:border-pink-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" strokeWidth="0" fill="currentColor" />
                            </svg>
                            Enviar solicitud
                        </Link>
                    </div>
                </div>
                <h1 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-3">{personaData.name}</h1>
                <div className="w-full flex flex-col items-center">
                    <p className="font-normal text-base leading-7 text-gray-500 text-left md:max-w-[50%] mb-8">{personaData.description}</p>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <a href={"https://instagram.com/" + personaData.ig}
                        className="p-3 rounded-full stroke-pink-400 border border-solid border-gray-300 bg-gray-50 group transition-all duration-200 hover:bg-gray-200 hover:border-gray-200">
                        <svg className="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.1667 5.83333V5.875M9.16673 17.5H10.8334C13.9761 17.5 15.5474 17.5 16.5237 16.5237C17.5001 15.5474 17.5001 13.976 17.5001 10.8333V9.16667C17.5001 6.02397 17.5001 4.45262 16.5237 3.47631C15.5474 2.5 13.9761 2.5 10.8334 2.5H9.16673C6.02403 2.5 4.45268 2.5 3.47637 3.47631C2.50006 4.45262 2.50006 6.02397 2.50006 9.16667V10.8333C2.50006 13.976 2.50006 15.5474 3.47637 16.5237C4.45268 17.5 6.02403 17.5 9.16673 17.5Z"
                                strokeWidth="1.6" strokeLinecap="round" />
                            <path
                                d="M14.1667 9.71667C14.1667 11.9658 12.3825 13.75 10.1334 13.75C7.88432 13.75 6.1001 11.9658 6.1001 9.71667C6.1001 7.46756 7.88432 5.68333 10.1334 5.68333C12.3825 5.68333 14.1667 7.46756 14.1667 9.71667Z"
                                strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </a>
                    <button
                        onClick={toggleLike}
                        className="p-3 rounded-full flex items-center stroke-gray-400 border border-solid border-gray-300 bg-gray-50 group transition-all duration-200 hover:bg-gray-200 hover:border-gray-200">
                        {
                            !userLikes ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1112 6.006a5 5 0 117.5 6.572"></path>
                                </svg> :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="red"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                    className="text-red-700"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        strokeWidth="0"
                                        d="M6.979 3.074a6 6 0 014.988 1.425l.037.033.034-.03a6 6 0 014.733-1.44l.246.036a6 6 0 013.364 10.008l-.18.185-.048.041-7.45 7.379a1 1 0 01-1.313.082l-.094-.082-7.493-7.422A6 6 0 016.979 3.074z"
                                    ></path>
                                </svg>
                        }
                        <span>{likes}</span>
                    </button>
                </div>
                <div className="w-full flex flex-col items-center text-gray-900 mt-32">
                    <h2 className="text-3xl font-bold">
                        Mas info
                    </h2>
                    <div className="info-container grid grid-cols-1 md:grid-cols-2 w-3/ sm:w-auto gap-4 p-4">
                        <div className="personal-container space-y-2 rounded-xl bg-gray-200 w-full sm:w-64 h-64 flex flex-col">
                            <header className="rounded-xl flex items-center w-full px-6 py-2 border-b-gray-900 border-2">
                                <span>👤</span>
                                <h3 className="font-semibold text-lg">Informacion personal</h3>
                            </header>
                            <article className="flex flex-col px-6 justify-center">
                                <h4>Nombre: <strong>{personaData.name}</strong></h4>
                                <h4>Edad: <strong>{personaData.age}</strong></h4>
                            </article>
                        </div>
                        <div className="physics-container space-y-2 rounded-xl bg-gray-200 w-full sm:w-64 h-64 flex flex-col">
                            <header className="rounded-xl flex items-center w-full px-6 py-2 border-b-gray-900 border-2">
                                <span>{personaData.gender === "female" ? "👧" : "🧑"}</span>
                                <h3 className="font-semibold text-lg">Características físicas</h3>
                            </header>
                            <article className="flex flex-col px-6 justify-center">
                                <h4>Pelo: <strong>{personaData.hair}</strong></h4>
                                <h4 className="flex gap-1">Ojos: <strong>{
                                    personaData.eyes === "brown" ? <div className="flex items-center">
                                        <span>Marrones</span> <Eye uclassName="w-6" type="brown" /></div> :
                                        personaData.eyes === "green" ? <div className="flex items-center">
                                            <span>Verdes</span> <Eye uclassName="w-6" type="green" /></div> :
                                            personaData.eyes === "blue" ? <div className="flex items-center">
                                                <span>Azules</span> <Eye uclassName="w-6" type="blue" /></div> :
                                                <span>""</span>
                                }</strong></h4>
                                <h4>Altura: <strong>{personaData.height}</strong></h4>
                            </article>
                        </div>
                        <div className="tastes-container space-y-2 rounded-xl bg-gray-200 w-full sm:w-64 h-64 flex flex-col">
                            <header className="rounded-xl flex items-center w-full px-6 py-2 border-b-gray-900 border-2">
                                <span>💖</span>
                                <h3 className="font-semibold text-lg">Datos amorosos</h3>
                            </header>
                            <article className="flex flex-col px-6 justify-center">
                                <h4>Relaciones pasadas: <strong className={personaData.couples === 0 ? "text-red-600" : personaData.couples < 4 ? "text-yellow-400" : personaData.couples >= 4 ? "text-green-900" : ""}>{personaData.couples}</strong></h4>
                                <h4>Género que busca: <strong>{personaData.likes === "male" ? "👨" : personaData.likes === "female" ? "👩" : "👨👩"}</strong></h4>
                            </article>
                        </div>
                        <div
                            className="music-container rounded-xl bg-gray-200 p-4 w-full sm:w-64 h-64">
                            <MusicPlayer music={personaData.music} person={personaData} />
                        </div></div>
                </div>
            </div>
            <div onClick={closeModal}>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    className="flex items-center justify-center fixed top-0 left-0 bg-black h-screen w-screen bg-opacity-50"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <div className="relative h-[300px] w-[300px] animate-zoomIn">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-white text-4xl">×</button>
                        <img src={personaData.images[0]} alt="user-avatar-image" className="w-full h-full object-cover rounded-full " />
                    </div>
                </Modal>
            </div>
        </section>
    );
}
