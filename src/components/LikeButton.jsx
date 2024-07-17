import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function LikeButton({ persona }) {
    const [cookies, setCookie] = useCookies(['likes-ursu', 'likes-lola', 'likes-ivan', 'likes-hele']);
    const [userLikes, setUserLikes] = useState(false);
    const [likes, setLikes] = useState(0)

    const toggleLike = () => {
        const newLikeState = !userLikes;
        setUserLikes(newLikeState);
        // Guardar el estado de like en las cookies
        setCookie(`likes-${persona}`, newLikeState, { path: '/' });

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
            const response = await fetch(`https://filehost.comidolar.com.ar:9090/likes/${persona}`);
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
            const response = await fetch(`https://filehost.comidolar.com.ar:9090/likes/${persona}`, {
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
            const response = await fetch(`https://filehost.comidolar.com.ar:9090/likes/${persona}`, {
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
        fetchLikes()
    })

    useEffect(() => {
        setUserLikes(cookies[`likes-${persona}`]);
    }, [persona, cookies]);

    return (
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
    )
}