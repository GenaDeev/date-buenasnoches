import { NavLink } from "react-router-dom"
export default function Header() {
    return (
        <>
            <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-center font-bold text-white"><p className="subtitle-gradient">Sitio bajo desarrollo. 2024 <a href="https://github.com/GenaDeev">©GenaDev</a> | <a href="https://genahost.vercel.app/">©GenaHost</a></p></div>
            <footer className="bg-white text-gray-700">
                <NavLink to="/" className="double btn btn-ghost text-2xl">
                    <span>🌙</span>
                    <div className="flex flex-col">
                        <span className="inline-block text-xs font-bold tracking-tighter truncate">COMI</span>
                        BuenasNoches
                    </div>
                </NavLink>
            </footer>
        </>
    )
}