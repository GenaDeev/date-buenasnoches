import { Link, useLocation } from "react-router-dom"

export default function NotFound() {

    const { pathname } = useLocation();
    return (
        <main className="h-[100svh] p-8 flex flex-col items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                fill="none"
                stroke="#ff2825"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="icon icon-tabler icon-tabler-face-id-error"
                viewBox="0 0 24 24"
            >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M9 10h.01M15 10h.01M9.5 15.05a3.5 3.5 0 015 0"></path>
            </svg>
            <h1 className="text-2xl">
                No pudimos encontrar la página <strong className="text-[#ff2825]">{pathname}</strong> en nuestros servidores
            </h1>
            <Link to="/">Volver al inicio</Link>
        </main>
    )
}