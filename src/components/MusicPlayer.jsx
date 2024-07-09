import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function MusicPlayer({ music, person }) {
    const [playing, setPlaying] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false); // Estado de reproducción
    const [progress, setProgress] = useState(0); // Estado de progreso en porcentaje
    const [modalVisibility, setModalVisibility] = useState(true)
    const audioRef = useRef(null);
    const navigate = useNavigate()
    // Función para manejar la reproducción y pausa
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Funciones para avanzar y retroceder la música
    const next = () => {
        setPlaying(playing + 1)
        if (playing === 3) {
            setPlaying(0)
        }
    };
    const back = () => {
        setPlaying(playing - 1)
        if (playing === 0) {
            setPlaying(3)
        }
    };

    // Actualización del progreso de la música
    const handleProgress = () => {
        const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percent);
    };
    // Check if music array is empty or playing index is out of bounds
    if (!music || music.length === 0 || playing >= music.length) {
        return <p>No music available</p>;
    }

    const handleModalHiding = () => {
        setModalVisibility(false)
        setIsPlaying(true)
    }

    useEffect(() => {
        return () => {
            setPlaying(0);
            setIsPlaying(false);
            setProgress(0);
            setModalVisibility(true);
        };
    }, [navigate]);


    const musicclass = 'music-player ' + music[playing].id;
    return (
        <div className={
            !modalVisibility ? musicclass : "player h-full " + person.name.toLowerCase()
        }>
            {
                !modalVisibility ?
                    <>
                        <div className='bg-[#00000072] backdrop-blur rounded-xl p-2 flex items-center flex-col'>
                            <audio
                                src={music[playing].sample}
                                ref={audioRef}
                                onTimeUpdate={handleProgress}
                                onEnded={() => setIsPlaying(false)} // Pausar al terminar
                            />
                            <div className="buttons flex p-2 gap-4">
                                <button onClick={() => back()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white hover:text-[#1db954] transition duration-200" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="currentColor" />
                                        <path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="currentColor" />
                                    </svg>
                                </button>
                                <button onClick={togglePlay}>
                                    {
                                        isPlaying ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-black bg-white p-[1px] rounded-full hover:bg-[#1db954] transition duration-200" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="currentColor" />
                                                <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="currentColor" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-black bg-white p-[1px] rounded-full hover:bg-[#1db954] transition duration-200" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="currentColor" />
                                            </svg>
                                    }
                                </button>
                                <button onClick={() => next()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white hover:text-[#1db954] transition duration-200" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="currentColor" />
                                        <path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                            <div className="progress-bar relative w-full flex py-1">
                                {/*audioRef.current.currentTime*/}
                                <div className='anti-progress top-0 absolute h-2 w-full rounded-xl bg-gray-400'></div>
                                <div
                                    className="progress top-0 absolute h-2 bg-white"
                                    style={{ width: `${progress}%` }}
                                />
                                {/*audioRef.current.duration*/}
                            </div>
                        </div>
                        <footer className="bottom">
                            <p className="artist-sub">Reproduciendo:</p>
                            <p className="artist">{music[playing].name}</p>
                        </footer></> :
                    <div className='w-full text-xl h-full gap-2 flex flex-col justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1db954] drop-shadow-gena" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M21 18a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a3 3 0 0 1 2.824 -2.995l.176 -.005h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .24v.17c.25 -.088 .516 -.144 .791 -.163l.209 -.007h1a3 3 0 0 1 2.995 2.824l.005 .176v3a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a9 9 0 0 1 17.996 -.265l.004 .265v6z" strokeWidth="0" fill="currentColor" />
                        </svg>
                        <p>Toma un tour por los gustos musicales de <strong>{person.name}</strong></p>
                        <button className='bg-[#1db954] p-1 w-24 rounded-xl hover:bg-[#27f870] hover:scale-105 active:scale-95 transition duration-200' onClick={handleModalHiding}>
                            Iniciar
                        </button>
                    </div>
            }
        </div>
    );
}
